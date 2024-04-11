import { createProductController } from '../../../controllers/product/createProduct'
import express from 'express'
import { validateAccessToken } from '../../../middlewares'
import { getAllproducts } from '../../../controllers/product'
import { getOneProduct } from '../../../controllers/product/getOneProduct'

export const products = ( router: express.Router) => {
    router.post('/createProduct', validateAccessToken , createProductController)
    router.get('/product', validateAccessToken , getAllproducts)
    router.get('/product/:id', validateAccessToken, getOneProduct)
}