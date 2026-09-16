import re
from pathlib import Path

consumables_path = Path(r"c:\Users\Alekoo\Desktop\medwise\lib\consumables.ts")
content = consumables_path.read_text(encoding="utf-8")

# 1. Update interface ConsumableItem if image field is not yet present
if "image?: string;" not in content:
    content = content.replace(
        "  storage?: string;\n}",
        "  storage?: string;\n  image?: string;\n}"
    )

# 2. Add image field to every item in CONSUMABLES_CATALOG if not present
# Pattern matches id, name, category, subcategory, packaging
pattern = re.compile(
    r"(id:\s*'([a-z0-9-]+)',\n\s*name:\s*'[^']+',\n\s*category:\s*'[^']+',\n\s*subcategory:\s*'[^']+',\n\s*packaging:\s*'[^']+',\n)"
)

def add_image(match):
    matched_text = match.group(1)
    item_id = match.group(2)
    # If image already present, don't duplicate
    if "image:" in matched_text:
        return matched_text
    return matched_text + f"    image: '/images/products/consumables/{item_id}.webp',\n"

new_content, count = pattern.subn(add_image, content)

consumables_path.write_text(new_content, encoding="utf-8")
print(f"Updated interface and added image field to {count} consumable items.")
