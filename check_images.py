from PIL import Image
import os

images_dir = r"c:\Users\sdas6\.gemini\antigravity\scratch\yogaperson-portfolio\public\images"
for filename in os.listdir(images_dir):
    if filename.startswith("yoga"):
        img = Image.open(os.path.join(images_dir, filename))
        print(f"{filename}: {img.size}")
