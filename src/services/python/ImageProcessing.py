import cv2 as cv
import numpy as np

class ImageProcessing:
    def __init__(self):
        pass

    def detectEtiqueta(self, img):
        
        TEMPLATE_ETIQUETA = cv.imread('..\\..\\..\\test\\ImagesCut\\Biscoito Etiqueta.jpg', cv.IMREAD_UNCHANGED)
        IMG = cv.imread('..\\..\\..\\test\\images\\Suco Instantaneo Etiqueta.jpg', cv.IMREAD_UNCHANGED)
        TEMPLATE_ETIQUETA_WIDTH = int(TEMPLATE_ETIQUETA.shape[1] * 30 / 100)
        TEMPLATE_ETIQUETA_HEIGHT = int(TEMPLATE_ETIQUETA.shape[0] * 30 / 100)
        IMG_WIDTH = int(IMG.shape[1] * 30 / 100)
        IMG_HEIGHT = int(IMG.shape[0] * 30 / 100)

        DIM1 = (TEMPLATE_ETIQUETA_WIDTH, TEMPLATE_ETIQUETA_HEIGHT)
        DIM2 = (IMG_WIDTH, IMG_HEIGHT)

        TEMPLATE_ETIQUETA = cv.resize(TEMPLATE_ETIQUETA, DIM1)
        IMG = cv.resize(IMG, DIM2)

        result = cv.matchTemplate(IMG, TEMPLATE_ETIQUETA, cv.TM_CCOEFF_NORMED)

        min_val, max_val, min_loc, max_loc = cv.minMaxLoc(result)

        cv.rectangle(IMG, max_loc, (max_loc[0] + TEMPLATE_ETIQUETA.shape[1], max_loc[1] + TEMPLATE_ETIQUETA.shape[0]), (255, 255, 0), 2)

        cv.imshow('TEMPLATE_ETIQUETA', TEMPLATE_ETIQUETA)
        cv.imshow('IMG', IMG)
        cv.imshow('result', result)

        cv.waitKey()
        cv.destroyAllWindows()

sla = ImageProcessing()

sla.detectEtiqueta('batata')

        