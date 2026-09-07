import re
from pathlib import Path

pfile = Path(r"c:\Users\Alekoo\Desktop\medwise\lib\products.ts")
content = pfile.read_text(encoding="utf-8")

products_dir = Path(r"c:\Users\Alekoo\Desktop\medwise\public\images\products")
webp_files = {f.stem: f"/images/products/{f.name}" for f in products_dir.glob("*.webp")}

print(f"Available WebP images: {len(webp_files)}")

updated_count = 0
for pid, img_path in webp_files.items():
    if f"id: '{pid}'," in content:
        block_pattern = re.compile(rf"(id:\s*'{re.escape(pid)}',[\s\S]*?)(description:)")
        match = block_pattern.search(content)
        if match:
            block_text = match.group(1)
            if "image:" in block_text:
                new_block = re.sub(r"image:\s*'[^']+',\s*\n", f"image: '{img_path}',\n", block_text)
            else:
                new_block = block_text + f"    image: '{img_path}',\n    "
            content = content[:match.start(1)] + new_block + content[match.start(2):]
            updated_count += 1
            print(f"Linked {pid} -> {img_path}")

pfile.write_text(content, encoding="utf-8")
print(f"Successfully updated {updated_count} products in lib/products.ts")
