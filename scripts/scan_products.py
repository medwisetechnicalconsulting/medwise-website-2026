import re
import sys
from pathlib import Path

content = Path('lib/products.ts').read_text(encoding='utf-8')

# Extract PRODUCTS_CATALOG array
catalog_match = re.search(r'export const PRODUCTS_CATALOG:\s*Product\[\]\s*=\s*\[([\s\S]*?)\];', content)
if not catalog_match:
    print("Could not find PRODUCTS_CATALOG in lib/products.ts")
    sys.exit(1)

catalog_text = catalog_match.group(1)

# Split into individual product blocks
blocks = re.split(r'\n\s*\{\s*\n\s*id:\s*\'', catalog_text)[1:]

public_dir = Path('public')

has_image = []
missing_image = []

categories = {}

for block in blocks:
    m_id = re.match(r'^([^\']+)\'', block)
    pid = m_id.group(1) if m_id else 'unknown'
    
    m_name = re.search(r'name:\s*\'([^\']+)\'', block)
    name = m_name.group(1) if m_name else ''
    
    m_cat = re.search(r'category:\s*\'([^\']+)\'', block)
    cat = m_cat.group(1) if m_cat else ''

    m_subcat = re.search(r'subcategory:\s*\'([^\']+)\'', block)
    subcat = m_subcat.group(1) if m_subcat else ''
    
    m_model = re.search(r'model:\s*\'([^\']+)\'', block)
    model = m_model.group(1) if m_model else ''

    m_brand = re.search(r'brand:\s*\'([^\']+)\'', block)
    brand = m_brand.group(1) if m_brand else ''

    m_img = re.search(r'image:\s*\'([^\']+)\'', block)
    
    item = {
        'id': pid,
        'name': name,
        'brand': brand,
        'model': model,
        'category': cat,
        'subcategory': subcat,
    }

    if m_img:
        img_path = m_img.group(1)
        local_file = public_dir / img_path.lstrip('/')
        if local_file.exists():
            item['image'] = img_path
            item['size'] = local_file.stat().st_size
            has_image.append(item)
        else:
            item['image_missing_path'] = img_path
            missing_image.append(item)
    else:
        missing_image.append(item)

print(f"TOTAL_PRODUCTS={len(blocks)}")
print(f"WITH_IMAGE={len(has_image)}")
print(f"MISSING_IMAGE={len(missing_image)}")

print("\n--- PRODUCTS WITH MISSING IMAGES (PLACEHOLDERS) ---")
by_cat = {}
for p in missing_image:
    by_cat.setdefault(p['category'], []).append(p)

for cat, items in by_cat.items():
    print(f"\n### Category: {cat.upper()} ({len(items)} items)")
    for idx, item in enumerate(items, 1):
        clean_model = item['model'].encode('ascii', 'replace').decode('ascii')
        clean_name = item['name'].encode('ascii', 'replace').decode('ascii')
        print(f"  {idx}. ID: {item['id']}")
        print(f"     Name: {clean_name}")
        print(f"     Brand / Model: {item['brand']} | {clean_model}")
        print(f"     Subcategory: {item['subcategory']}")
        print(f"     Suggested file name: {item['id']}.png (or .jpg, .webp)")

print("\n--- PRODUCTS ALREADY WITH ACTIVE IMAGES ---")
for p in has_image:
    print(f"  - [{p['category']}] {p['id']} -> {p['image']}")
