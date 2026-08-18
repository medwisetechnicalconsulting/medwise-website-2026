import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

z50_path = 'C:/Users/Alekoo/Downloads/2_en.png'
z3_path = 'C:/Users/Alekoo/Downloads/z3_sec02.png'
out_path = 'C:/Users/Alekoo/Desktop/medwise/public/images/blog/hematology-analyzer-guide.jpg'

W, H = 1200, 630

# Create canvas with clean slate background
bg = Image.new('RGB', (W, H), '#f8fafc')
draw = ImageDraw.Draw(bg)

# Top Banner Header Bar (#0f172a dark slate)
draw.rectangle([(0, 0), (W, 90)], fill='#0f172a')

# Accent line under header
draw.line([(0, 90), (W, 90)], fill='#2563eb', width=4)

# Load fonts - try Arial or Segoe UI
try:
    font_header = ImageFont.truetype('arialbd.ttf', 24)
    font_sub = ImageFont.truetype('arial.ttf', 14)
    font_badge = ImageFont.truetype('arialbd.ttf', 15)
    font_body = ImageFont.truetype('arial.ttf', 13)
    font_footer = ImageFont.truetype('arialbd.ttf', 13)
except Exception:
    font_header = font_sub = font_badge = font_body = font_footer = ImageFont.load_default()

# Header text
draw.text((W//2, 32), "AUTOMATED HEMATOLOGY ANALYZER COMPARISON", fill='#ffffff', font=font_header, anchor='mm')
draw.text((W//2, 64), "3-Part Differential vs. 5-Part Differential Cell Counters in Kenya", fill='#94a3b8', font=font_sub, anchor='mm')

# Center vertical divider
draw.line([(W//2, 110), (W//2, H-50)], fill='#cbd5e1', width=2)

# Load & resize analyzer images
img_z3 = Image.open(z3_path).convert('RGBA')
img_z50 = Image.open(z50_path).convert('RGBA')

# Target height for analyzers
target_h = 360

w3, h3 = img_z3.size
r3 = target_h / h3
img_z3 = img_z3.resize((int(w3 * r3), target_h), Image.Resampling.LANCZOS)

w50, h50 = img_z50.size
r50 = target_h / h50
img_z50 = img_z50.resize((int(w50 * r50), target_h), Image.Resampling.LANCZOS)

# Position Images
pos_z3 = (80, 140)
pos_z50 = (680, 140)

bg.paste(img_z3, pos_z3, img_z3)
bg.paste(img_z50, pos_z50, img_z50)

# Draw Left Side (Z3) Badges & Text
# Title Pill for Z3
draw.rounded_rectangle([(320, 130), (570, 165)], radius=10, fill='#eff6ff', outline='#bfdbfe', width=1)
draw.text((445, 147), "Zybio Z3 (3-Part)", fill='#1e40af', font=font_badge, anchor='mm')

z3_specs = [
    "• 21 Parameters + 3 Histograms",
    "• Electrical Impedance Tech",
    "• Micro-Sampling: 9 µL Volume",
    "• 30-60 Tests / Hour Throughput",
    "• Low Running Reagent Cost",
    "• Ideal for Outpatient Clinics"
]

y_start = 190
for line in z3_specs:
    draw.text((330, y_start), line, fill='#334155', font=font_body)
    y_start += 28

# Draw Right Side (Z50) Badges & Text
# Title Pill for Z50
draw.rounded_rectangle([(920, 130), (1170, 165)], radius=10, fill='#f0fdf4', outline='#bbf7d0', width=1)
draw.text((1045, 147), "Zybio Z50 (5-Part)", fill='#166534', font=font_badge, anchor='mm')

z50_specs = [
    "• 29 Parameters + 3D Scattergrams",
    "• Semiconductor Laser Cytometry",
    "• Micro-Sampling: 15 µL Volume",
    "• Up to 60+ Tests / Hour",
    "• Advanced Eosinophil/Basophil Diff",
    "• Ideal for Referral Hospitals"
]

y_start = 190
for line in z50_specs:
    draw.text((930, y_start), line, fill='#334155', font=font_body)
    y_start += 28

# Bottom Footer Accent Bar
draw.rectangle([(0, H-45), (W, H)], fill='#1e293b')
draw.text((W//2, H-22), "MEDWISE TECHNICAL CONSULTING  •  BIOMEDICAL ENGINEERING & EQUIPMENT ADVISORY KENYA", fill='#e2e8f0', font=font_footer, anchor='mm')

# Save high quality JPG
bg.save(out_path, quality=95)
print('Graphic banner successfully generated and saved to:', out_path)
