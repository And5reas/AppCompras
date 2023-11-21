import cv2 as cv
import numpy as np
import pytesseract
import enum 
from PIL import Image

class ImageProcessing:
    def __init__(self):
        pass

    def MostrarImage(self, img):
        imagem = np.array(img)

        locTopLeft = (82, 358)
        locBottomRight = (957, 563)

        cv.rectangle(imagem, locTopLeft, locBottomRight, (255, 255, 0), 2)
        
        cv.imshow('IMG', imagem)

        cv.waitKey()
        cv.destroyAllWindows()


def extract_text(image: str):
    myConfig = R"--psm 11 --oem 3"
    WINDOWS_PATH = R"C:\Program Files\Tesseract-OCR\tesseract.exe"
    pytesseract.pytesseract.tesseract_cmd = WINDOWS_PATH

    img = cv.imread(image, cv.IMREAD_UNCHANGED)

    extrated_text = pytesseract.image_to_string(img, config=myConfig)
    print(extrated_text)

    h, w, _ = img.shape

    h = int(h/3)
    w = int(w/3)

    img = cv.resize(img, (w, h))

    pts1 = np.float32([[72/3,93/3], [3317/3, 64/3], [3241/3, 1077/3], [106/3, 1082/3]])
    pts2 = np.float32([[0,0], [w,0], [0,h], [w,h]])

    matrix = cv.getPerspectiveTransform(pts1, pts2)
    imgOut = cv.warpPerspective(img, matrix, (w, h))

    boxes = pytesseract.image_to_boxes(img, config=myConfig)

    for box in boxes.splitlines():
        box = box.split(" ")
        img = cv.rectangle(img, (int(box[1]), h - int(box[2])), (int(box[3]), h - int(box[4])), (255, 255, 0), 2)

    cv.imshow('sla', img)
    cv.imshow('sla2', imgOut)
    cv.waitKey()
    cv.destroyAllWindows()

if __name__ == "__main__":
    text = extract_text('..\\..\\..\\test\\ImagesCut\\Suco Instantaneo Etiqueta.jpg')
    print(text)

        