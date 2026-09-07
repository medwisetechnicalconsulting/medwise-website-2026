import os
import re
from pathlib import Path
from PIL import Image

WORKSPACE_DIR = Path(r"c:\Users\Alekoo\Desktop\medwise")
RAW_DIR = WORKSPACE_DIR / "public" / "images" / "products-raw"
OUTPUT_DIR = WORKSPACE_DIR / "public" / "images" / "products"
PRODUCTS_FILE = WORKSPACE_DIR / "lib" / "products.ts"

TARGET_SIZE = (800, 800)

PRODUCTS = [
    {"id": "mindray-bc-10", "patterns": ["bc-10", "bc10", "mindray-bc-10"]},
    {"id": "zybio-z3", "patterns": ["z3", "zybio-z3"]},
    {"id": "dymind-dh36", "patterns": ["dh36", "dh-36", "dymind-dh36"]},
    {"id": "bioelab-ec-30", "patterns": ["ec30", "ec-30", "bioelab-ec-30"]},
    {"id": "mindray-bc-5000", "patterns": ["bc-5000", "bc5000", "mindray-bc-5000"]},
    {"id": "zybio-z50", "patterns": ["z50", "zybio-z50"]},
    {"id": "dymind-df-55", "patterns": ["df-55", "df55", "dymind-df-55"]},
    {"id": "icubio-ichem-535", "patterns": ["ichem-535", "ichem535", "535", "icubio"]},
    {"id": "dymind-dp-c16", "patterns": ["dp-c16", "dpc16", "c16"]},
    {"id": "seamaty-sd-1", "patterns": ["sd-1", "sd1", "seamaty"]},
    {"id": "zybio-exc-200", "patterns": ["exc-200", "exc200"]},
    {"id": "bioelab-as-160", "patterns": ["as-160", "as160"]},
    {"id": "mindray-bs-240", "patterns": ["bs-240", "bs240", "mindray-bs-240"]},
    {"id": "finecare-fs-113", "patterns": ["finecare", "fs-113", "fs113"]},
    {"id": "anbio-fia-analyzer", "patterns": ["anbio", "fia"]},
    {"id": "getein-1160", "patterns": ["getein", "1160"]},
    {"id": "yxz-microscope", "patterns": ["yxz", "yxz-200b", "entry-microscope"]},
    {"id": "olympus-cx-21", "patterns": ["cx21", "cx-21", "olympus-cx21"]},
    {"id": "olympus-cx-23", "patterns": ["cx23", "cx-23", "olympus-cx23"]},
    {"id": "laboratory-incubator", "patterns": ["incubator"]},
    {"id": "clinical-centrifuges", "patterns": ["centrifuge", "centrifuges"]},
    {"id": "roller-mixer", "patterns": ["roller", "mixer"]},
    {"id": "vdrl-shaker", "patterns": ["vdrl", "shaker"]},
    {"id": "hot-air-oven", "patterns": ["oven", "hot-air"]},
    {"id": "laboratory-fridge", "patterns": ["fridge", "refrigerator"]},
    {"id": "micropipettes", "patterns": ["pipette", "pipettes", "micropipette"]},
    {"id": "microscope-slides", "patterns": ["slides", "microscope-slide"]},
    {"id": "cover-slips", "patterns": ["cover-slip", "coverslip", "coverslips"]},
    {"id": "yellow-tips", "patterns": ["yellow-tips", "pipette-tips", "tips"]},
    {"id": "vacutainer-tubes", "patterns": ["vacutainer", "blood-tubes", "tubes"]},
    {"id": "medical-gloves", "patterns": ["gloves", "latex", "nitrile"]}
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
        
        # Create white background canvas
        canvas = Image.new("RGBA", TARGET_SIZE, (255, 255, 255, 0))
        
        # Paste centered
        offset_x = (TARGET_SIZE[0] - img.width) // 2
        offset_y = (TARGET_SIZE[1] - img.height) // 2
        canvas.paste(img, (offset_x, offset_y), img)
        
        # Save as WebP
        canvas.save(dest_path, "WEBP", quality=90, method=6)
        print(f"Processed: {src_path.name} -> {dest_path.name}")

def update_products_catalog(matched_map):
    if not PRODUCTS_FILE.exists():
        return
    content = PRODUCTS_FILE.read_text(encoding="utf-8")
    updated = False
    
    for product_id, img_rel_path in matched_map.items():
        # Check if already has image
        id_pattern = rf"(id:\s*'{product_id}',\s*\n)((\s*image:\s*'[^']+',\s*\n)?)"
        replacement = rf"\1    image: '{img_rel_path}',\n"
        if f"id: '{product_id}'," in content:
            # Check if image field exists for this product
            search_regex = rf"(id:\s*'{product_id}',\s*\n)(\s*image:\s*'[^']+',\s*\n)?"
            match = re.search(search_regex, content)
            if match:
                if "image:" not in match.group(0):
                    content = re.sub(
                        rf"(id:\s*'{product_id}',\s*\n)",
                        rf"\1    image: '{img_rel_path}',\n",
                        content,
                        count=1
                    )
                    updated = True
                else:
                    # Update existing
                    content = re.sub(
                        rf"(id:\s*'{product_id}',\s*\n\s*image:\s*)'[^']+'",
                        rf"\1'{img_rel_path}'",
                        content,
                        count=1
                    )
                    updated = True
                    
    if updated:
        PRODUCTS_FILE.write_text(content, encoding="utf-8")
        print("Updated lib/products.ts with image paths successfully!")

def main():
    if not RAW_DIR.exists():
        print(f"Directory {RAW_DIR} does not exist.")
        return
        
    raw_files = [f for f in RAW_DIR.iterdir() if f.is_file() and f.suffix.lower() in [".png", ".jpg", ".jpeg", ".webp", ".jhpg", ".jfif"]]
    if not raw_files:
        print(f"No raw images found in {RAW_DIR}")
        return
        
    print(f"Found {len(raw_files)} files in {RAW_DIR}")
    matched_map = {}
    
    for file in raw_files:
        product_id = match_product(file.name)
        if product_id:
            dest_file = OUTPUT_DIR / f"{product_id}.webp"
            process_image(file, dest_file)
            matched_map[product_id] = f"/images/products/{product_id}.webp"
        else:
            # Keep original slug as filename
            slug = re.sub(r'[^a-z0-9\-]', '-', Path(file.name).stem.lower())
            dest_file = OUTPUT_DIR / f"{slug}.webp"
            process_image(file, dest_file)
            print(f"Warning: No automatic catalog match for '{file.name}', saved as '{slug}.webp'")
            
    if matched_map:
        update_products_catalog(matched_map)

if __name__ == "__main__":
    main()
