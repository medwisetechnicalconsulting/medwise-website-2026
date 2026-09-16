import os
import shutil
from pathlib import Path
from PIL import Image

REPO_ROOT = Path(__file__).resolve().parent.parent
DOWNLOADS_DIR = Path.home() / 'Downloads' / 'Consumables'
RAW_PROJECT_DIR = REPO_ROOT / 'public' / 'images' / 'products-raw' / 'consumables'
DEST_DIR = REPO_ROOT / 'public' / 'images' / 'products' / 'consumables'

DEST_DIR.mkdir(parents=True, exist_ok=True)

MAPPING = {
    'AFB STAINING KIT.jpg': 'afb-staining-kit.webp',
    'ASOT.jpg': 'asot-test-kit.webp',
    'Applicator sticks.webp': 'wooden-applicator-sticks.webp',
    'BLUE TIPS.jpg': 'blue-tips-1000ul.webp',
    'BOROSILICATE TEST TUBES.jpg': 'glass-test-tubes-pack.webp',
    'Blood grouping.jpg': 'blood-grouping-antisera-kit.webp',
    'Bovine Albumin.webp': 'bovine-serum-albumin.webp',
    'COVER GLASS.jpg': 'cover-slips.webp',
    'Coombs.jpg': 'ahg-coombs-reagent.webp',
    'ESR.jpg': 'esr-westergren-tube-stand.webp',
    'FROSTED SLIDES.webp': 'microscope-slides-frosted.webp',
    'H.Pylori.png': 'hpylori-antigen-test-kit.webp',
    'HCG.jpg': 'hcg-pregnancy-strips.webp',
    'Hepatitis B.webp': 'hbsag-rapid-test-kit.webp',
    'Malaria.png': 'malaria-pf-rdt-kit.webp',
    'Nitrile-Gloves.jpg': 'medical-examination-gloves.webp',
    'PLAIN SLIDES.webp': 'microscope-slides-plain.webp',
    'Pedal Bins.jpg': 'waste-segregation-bins-ryb.webp',
    'RF.jpg': 'rf-test-kit.webp',
    'Safety-Sharp-Box-3-1024x1024-1-700x700.png': 'biohazard-sharps-container-5l.webp',
    'Salmonella Ag.jpg': 'sat-salmonella-antigen-kit.webp',
    'Salmonella.jpg': 'sab-salmonella-antibody-kit.webp',
    'Sinocare-Home-Testing-Glucose-Meter-Diabetes-Meter-Blood-Glucose-Test-Strips-Blood-Sugar-Monitor-50-PCS-Diabetic-Test-Strips.webp': 'blood-glucose-meter-strips.webp',
    'Torniquet.jpg': 'phlebotomy-tourniquet.webp',
    'Urinalysis.webp': 'urinalysis-strips-10-parameter.webp',
    'VDRL.jpg': 'vdrl-rpr-test-kit.webp',
    'Vacucare-Blood-Collection-Tubes-Purple-Top-EDTA-k2-6ml.png': 'edta-vacuum-tubes.webp',
    'Vacutainer blood collection needles.jpg': 'vacutainer-needles.webp',
    'YELLOW TIPS.jpg': 'yellow-tips-200ul.webp',
    'blood_tubes_vacutainer color coded series.png': 'vacutainer-tubes.webp',
    'brucella.webp': 'brucella-test-kit.webp',
    'field-stain-kit-a-b-for-detecting-malaria-parasites.png': 'malaria-field-staining-kit.webp',
    'gRAM STAINING KIT.jpg': 'grams-staining-kit.webp',
    'polypot.png': 'poly-pots-specimen-containers.webp',
    'test tube stand.webp': 'test-tube-rack-polypropylene.webp',
    'urine sterile sample-container-100-pcs.webp': 'sterile-urine-containers.webp',
    'vacuum-blood-collection-tube-red.jpg': 'plain-clot-activator-tubes.webp',
}

TARGET_SIZE = (800, 800)

def find_source_file(filename: str):
    for sdir in [DOWNLOADS_DIR, RAW_PROJECT_DIR, DEST_DIR.parent]:
        p = sdir / filename
        if p.exists():
            return p
    return None

def process_image(src_file: Path, dest_file: Path):
    with Image.open(src_file) as img:
        has_alpha = False
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            img_rgba = img.convert('RGBA')
            extrema = img_rgba.getextrema()
            if len(extrema) >= 4 and extrema[3][0] < 240:
                has_alpha = True

        img = img.convert('RGBA')
        img.thumbnail((TARGET_SIZE[0] - 40, TARGET_SIZE[1] - 40), Image.Resampling.LANCZOS)

        if has_alpha:
            canvas = Image.new('RGBA', TARGET_SIZE, (255, 255, 255, 0))
        else:
            canvas = Image.new('RGBA', TARGET_SIZE, (255, 255, 255, 255))

        offset_x = (TARGET_SIZE[0] - img.width) // 2
        offset_y = (TARGET_SIZE[1] - img.height) // 2
        canvas.paste(img, (offset_x, offset_y), img)

        canvas.save(dest_file, 'WEBP', quality=90, method=4)
        print(f'Processed: {src_file.name} -> {dest_file.name}')

def main():
    processed = 0
    for src_name, dest_name in MAPPING.items():
        src_path = find_source_file(src_name)
        if not src_path:
            continue
        dest_path = DEST_DIR / dest_name
        process_image(src_path, dest_path)
        processed += 1

    widal_dest = DEST_DIR / 'widal-test-kit.webp'
    if not widal_dest.exists() or widal_dest.stat().st_size == 0:
        sal_path = find_source_file('Salmonella.jpg')
        if sal_path:
            process_image(sal_path, widal_dest)
            processed += 1

    print(f'Finished! Processed {processed} consumable images.')

if __name__ == '__main__':
    main()
