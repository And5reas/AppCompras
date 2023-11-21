import cv2 as cv
import numpy as np

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

        