import cv2 as cv
import numpy as np
import pytesseract
from PIL import Image
import json
import os

def MostrarImage(self, img):
    imagem = np.array(img)

    locTopLeft = (82, 358)
    locBottomRight = (957, 563)

    cv.rectangle(imagem, locTopLeft, locBottomRight, (255, 255, 0), 2)
    
    cv.imshow('IMG', imagem)

    cv.waitKey()
    cv.destroyAllWindows()

def extract_text(image: str):
    myConfig = R'--psm 11 --oem 3 -c tessedit_char_whitelist="0123456789, "'
    WINDOWS_PATH = R"C:\Users\and5r\AppData\Local\Programs\Tesseract-OCR\tesseract.exe"
    pytesseract.pytesseract.tesseract_cmd = WINDOWS_PATH

    img = cv.imread(image, cv.IMREAD_UNCHANGED)


    h, w, _ = img.shape

    img = cv.resize(img, (w, h))

    ptsInput = np.float32([[146,146], [3270, 146], [3270, 1050], [146, 1050]])
    ptsOutPut = np.float32([[0,0], [w,0], [w,h], [0,h]])

    matrix = cv.getPerspectiveTransform(ptsInput, ptsOutPut)
    imgWarped = cv.warpPerspective(img, matrix, (w, h))

    extrated_text = pytesseract.image_to_string(imgWarped, config=myConfig)
    print(extrated_text)
    boxes = pytesseract.image_to_boxes(imgWarped, config=myConfig)

    for box in boxes.splitlines():
        box = box.split(" ")
        imgWarped = cv.rectangle(imgWarped, (int(box[1]), h - int(box[2])), (int(box[3]), h - int(box[4])), (255, 255, 0), 2)

    cv.imshow('sla2', imgWarped)
    cv.waitKey()
    cv.destroyAllWindows()


def testUploadImgur():
    import requests
    import base64
    url = "https://api.imgur.com/3/image"
    headers = {"Authorization": "Client-ID a2656278ad93ddf"}

    with open("../../../test/images/Açucar Etiqueta.jpg", "rb") as file:
        data = file.read()
        base64_data = base64.b64encode(data)

    response = requests.post(url, headers=headers, data={"image": base64_data})
    url = response.json()["data"]
    print(url)

# Redimencionar images teste para { width: 1020, height: 920 }
def redimencionarImagens():
    for image in os.listdir('images/'):
        img = cv.imread(F"images/{image}")

        img = cv.resize(img, (1020, 920))

        cv.imwrite(F"imagesResized/{image}", img)

        # Apenas para ver se deu certo
        # cv.imshow('img', img)
        # cv.waitKey()
        # cv.destroyAllWindows()

redimencionarImagens()
