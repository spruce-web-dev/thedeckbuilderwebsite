# USAGE: put in the directory of images to process, and run it. It will create a new folder there with the p rocessed images

import os
from PIL import Image, ImageEnhance, ImageOps

MAX_WIDTH = 900
SATURATION_BOOST = 1.06

current_dir = os.getcwd()
folder_name = os.path.basename(current_dir)

output_dir = os.path.join(current_dir, folder_name)
os.makedirs(output_dir, exist_ok=True)

supported = (".jpg", ".jpeg", ".png")

for filename in os.listdir(current_dir):
    if not filename.lower().endswith(supported):
        continue

    in_path = os.path.join(current_dir, filename)
    out_path = os.path.join(output_dir, filename)

    try:
        with Image.open(in_path) as img:

            # Fix EXIF rotation
            img = ImageOps.exif_transpose(img)

            width, height = img.size

            # Resize if wider than 900
            if width > MAX_WIDTH:
                new_height = int((MAX_WIDTH / width) * height)
                img = img.resize((MAX_WIDTH, new_height), Image.LANCZOS)

            # Slight saturation boost
            enhancer = ImageEnhance.Color(img)
            img = enhancer.enhance(SATURATION_BOOST)

            if filename.lower().endswith((".jpg", ".jpeg")):
                img = img.convert("RGB")
                img.save(
                    out_path,
                    "JPEG",
                    quality=85,
                    optimize=True,
                    progressive=True
                )
            else:
                img.save(out_path, "PNG", optimize=True)

            print(f"Compressed: {filename}")

    except Exception as e:
        print(f"Failed: {filename} ({e})")