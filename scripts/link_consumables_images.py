import re
from pathlib import Path

consumables_file = Path(r"c:\Users\Alekoo\Desktop\medwise\lib\consumables.ts")
content = consumables_file.read_text(encoding="utf-8")

# Search in both consumables subfolder and products root folder
search_dirs = [
    Path(r"c:\Users\Alekoo\Desktop\medwise\public\images\products\consumables"),
    Path(r"c:\Users\Alekoo\Desktop\medwise\public\images\products"),
]

valid_extensions = (".webp", ".png", ".jpg", ".jpeg")
found_images = {}

for sdir in search_dirs:
    if sdir.exists():
        for f in sdir.iterdir():
            if f.is_file() and f.suffix.lower() in valid_extensions:
                rel_path = "/" + f.relative_to(Path(r"c:\Users\Alekoo\Desktop\medwise\public")).as_posix()
                stem = f.stem.lower()
                if stem not in found_images:
                    found_images[stem] = rel_path

print(f"Available consumable image files on disk: {len(found_images)}")

updated_count = 0
for cid, img_path in found_images.items():
    if f"id: '{cid}'," in content:
        # Update existing image field for this id
        pattern = re.compile(rf"(id:\s*'{re.escape(cid)}',[\s\S]*?)(image:\s*'[^']+',)")
        match = pattern.search(content)
        if match:
            old_image_line = match.group(2)
            new_image_line = f"image: '{img_path}',"
            if old_image_line != new_image_line:
                content = content[:match.start(2)] + new_image_line + content[match.end(2):]
                updated_count += 1
                print(f"Linked {cid} -> {img_path}")

consumables_file.write_text(content, encoding="utf-8")
print(f"Sync complete. Updated {updated_count} consumable entries in lib/consumables.ts.")
