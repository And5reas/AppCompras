from PIL import Image
import cv2 as cv
import numpy as np
import requests
import base64

class ImageProcessing:
    def __init__(self):
        pass

    def sendAndGetUrlImage(img):
        urlAPI_imgur = "https://api.imgur.com/3/image"
        headers = {"Authorization": "Client-ID a2656278ad93ddf"}

        imagePIL = Image.open(img)
        imageNp = np.asarray(imagePIL)
        imageCorrectColors = cv.cvtColor(imageNp, cv.COLOR_RGB2BGR)
        _, stringImg = cv.imencode('.jpg', imageCorrectColors)
        base64_data = base64.b64encode(stringImg)

        response = requests.post(urlAPI_imgur, headers=headers, data={"image": base64_data})
        url = response.json()["data"]
        
        return url["link"]


if __name__ == "__main__":
    pass
    

        