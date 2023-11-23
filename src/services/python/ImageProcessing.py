import cv2 as cv
import numpy as np
import pytesseract
from PIL import Image
import json

class ImageProcessing:
    def __init__(self):
        configFile = open("../../config/config.json")
        TESSERACT_PATH = json.load(configFile)["TesseractPath"]


if __name__ == "__main__":
    pass
    

        