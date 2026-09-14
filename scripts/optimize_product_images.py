import os
import sys
import re
from pathlib import Path
from PIL import Image

WORKSPACE_DIR = Path(r"c:\Users\Alekoo\Desktop\medwise")
RAW_DIRS = [
    WORKSPACE_DIR / "products-raw",
    WORKSPACE_DIR / "public" / "images" / "products-raw"
]
OUTPUT_DIR = WORKSPACE_DIR / "public" / "images" / "products"
PRODUCTS_FILE = WORKSPACE_DIR / "lib" / "products.ts"

TARGET_SIZE = (800, 800)

PRODUCTS = [
    # Hematology
    {"id": "mindray-bc-10", "patterns": ["bc-10", "bc10", "mindray-bc-10"]},
    {"id": "zybio-z3", "patterns": ["z3", "zybio-z3"]},
    {"id": "dymind-dh36", "patterns": ["dh36", "dh-36", "dymind-dh36"]},
    {"id": "bioelab-ec-30", "patterns": ["ec30", "ec-30", "bioelab-ec-30"]},
    {"id": "mindray-bc-5000", "patterns": ["bc-5000", "bc5000", "mindray-bc-5000"]},
    {"id": "zybio-z50", "patterns": ["z50", "zybio-z50"]},
    {"id": "dymind-df-55", "patterns": ["df-55", "df55", "dymind-df-55"]},
    
    # Biochemistry
    {"id": "icubio-ichem-535", "patterns": ["ichem-535", "ichem535", "535", "icubio"]},
    {"id": "dymind-dp-c16", "patterns": ["dp-c16", "dpc16", "c16"]},
    {"id": "seamaty-sd-1", "patterns": ["sd-1", "sd1", "seamaty"]},
    {"id": "zybio-exc-200", "patterns": ["exc-200", "exc200"]},
    {"id": "bioelab-as-160", "patterns": ["as-160", "as160"]},
    {"id": "mindray-bs-240", "patterns": ["bs-240", "bs240", "mindray-bs-240"]},
    
    # Immunoassay
    {"id": "finecare-fs-113", "patterns": ["finecare", "fs-113", "fs113"]},
    {"id": "anbio-fia-analyzer", "patterns": ["anbio", "fia", "af-100", "af100"]},
    {"id": "getein-1160", "patterns": ["getein", "1160"]},
    
    # Microscopes
    {"id": "yxz-microscope", "patterns": ["yxz", "xsz", "yxz-200b", "xsz-microscope", "entry-microscope"]},
    {"id": "olympus-cx-21", "patterns": ["cx21", "cx-21", "olympus-cx21"]},
    {"id": "olympus-cx-23", "patterns": ["cx23", "cx-23", "olympus-cx23"]},
    
    # Lab Equipment (Currently Placeholders)
    {"id": "laboratory-incubator", "patterns": ["incubator", "dhp", "dnp", "lab-incubator", "bacteriological-incubator"]},
    {"id": "clinical-centrifuges", "patterns": ["centrifuge", "centrifuges", "80-2c", "802c", "td4", "benchtop-centrifuge"]},
    {"id": "roller-mixer", "patterns": ["roller", "mixer", "tube-roller", "roller-mixer", "tr-6", "tr6"]},
    {"id": "vdrl-shaker", "patterns": ["vdrl", "shaker", "orbital-shaker", "vr-100", "vr100"]},
    {"id": "hot-air-oven", "patterns": ["oven", "hot-air", "hotair", "drying-oven", "grx", "dhg"]},
    {"id": "laboratory-fridge", "patterns": ["fridge", "refrigerator", "mpc", "yc", "lab-fridge", "medical-fridge"]},
    {"id": "micropipettes", "patterns": ["pipette", "pipettes", "micropipette", "micropipettes"]},
    
    # Consumables (Currently Placeholders)
    {"id": "microscope-slides", "patterns": ["slides", "microscope-slide", "microscope-slides", "7101", "7102", "glass-slides"]},
    {"id": "cover-slips", "patterns": ["cover-slip", "coverslip", "cover-slips", "coverslips", "cover-glass", "cover-glasses"]},
    {"id": "yellow-tips", "patterns": ["yellow-tips", "yellow-tip", "pipette-tips", "tips-200", "yellowtips"]},
    {"id": "vacutainer-tubes", "patterns": ["vacutainer", "blood-tubes", "tubes", "vacutainer-tubes", "collection-tubes", "blood-collection"]},
    {"id": "medical-gloves", "patterns": ["gloves", "glove", "latex-gloves", "nitrile-gloves", "medical-gloves", "exam-gloves"]}
]

def clean_name(filename):
    stem = Path(filename).stem.lower()
    return re.sub(r'[^a-z0-9]', '', stem)

def match_product(filename):
    stem = Path(filename).stem.lower()
    cleaned = clean_name(filename)
    
    # Check exact ID first
    for p in PRODUCTS:
        if p["id"].lower() == stem or clean_name(p["id"]) == cleaned:
            return p["id"]
            
    # Check patterns
    for p in PRODUCTS:
        for pat in p["patterns"]:
            if clean_name(pat) in cleaned:
                return p["id"]
                
    return None

def process_image(src_path, dest_path):
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src_path) as img:
        # Convert to RGBA
        img = img.convert("RGBA")
        
        # Calculate aspect ratio preserving thumbnail
        img.thumbnail((TARGET_SIZE[0] - 40, TARGET_SIZE[1] - 40), Image.Resampling.LANCZOS)
        
        # Create clean white or transparent canvas
        canvas = Image.new("RGBA", TARGET_SIZE, (255, 255, 255, 0))
        
        # Paste centered
        offset_x = (TARGET_SIZE[0] - img.width) // 2
        offset_y = (TARGET_SIZE[1] - img.height) // 2
        canvas.paste(img, (offset_x, offset_y), img)
        
        # Save as WebP
        canvas.save(dest_path, "WEBP", quality=88, method=4)
        print(f"Processed: {src_path.name} -> {dest_path.name}", flush=True)

def update_products_catalog(matched_map):
    if not PRODUCTS_FILE.exists():
        return
    content = PRODUCTS_FILE.read_text(encoding="utf-8")
    updated_count = 0
    
    for product_id, img_rel_path in matched_map.items():
        if f"id: '{product_id}'," in content:
            pattern = re.compile(rf"(id:\s*'{re.escape(product_id)}',[\s\S]*?)(    description:)")
            match = pattern.search(content)
            if match:
                block_text = match.group(1)
                if "image:" in block_text:
                    new_block = re.sub(r"image:\s*'[^']+',?\s*\n", f"image: '{img_rel_path}',\n", block_text)
                else:
                    new_block = block_text + f"    image: '{img_rel_path}',\n"
                content = content[:match.start(1)] + new_block + content[match.start(2):]
                updated_count += 1
                print(f"Linked {product_id} -> {img_rel_path} in lib/products.ts")
                    
    if updated_count > 0:
        PRODUCTS_FILE.write_text(content, encoding="utf-8")
        print(f"Successfully updated {updated_count} products in lib/products.ts")

def main():
    raw_files = []
    for raw_dir in RAW_DIRS:
        if raw_dir.exists():
            files = [f for f in raw_dir.iterdir() if f.is_file() and f.suffix.lower() in [".png", ".jpg", ".jpeg", ".webp", ".jfif", ".tiff", ".bmp"]]
            if files:
                print(f"Found {len(files)} files in {raw_dir}")
                raw_files.extend(files)
                
    if not raw_files:
        print(f"No raw images found in any of: {[str(d) for d in RAW_DIRS]}")
        return
        
    force_all = "--all" in sys.argv
    matched_map = {}
    
    for file in raw_files:
        product_id = match_product(file.name)
        if product_id:
            dest_file = OUTPUT_DIR / f"{product_id}.webp"
            if force_all or not dest_file.exists() or file.stat().st_mtime > dest_file.stat().st_mtime:
                process_image(file, dest_file)
            else:
                print(f"Skipping (already up-to-date): {product_id}.webp", flush=True)
            matched_map[product_id] = f"/images/products/{product_id}.webp"
        else:
            slug = re.sub(r'[^a-z0-9\-]', '-', Path(file.name).stem.lower())
            dest_file = OUTPUT_DIR / f"{slug}.webp"
            if force_all or not dest_file.exists() or file.stat().st_mtime > dest_file.stat().st_mtime:
                process_image(file, dest_file)
            else:
                print(f"Skipping (already up-to-date): {slug}.webp", flush=True)
            print(f"Warning: No automatic catalog match for '{file.name}', saved as '{slug}.webp'", flush=True)
            
    if matched_map:
        update_products_catalog(matched_map)

if __name__ == "__main__":
    main()
