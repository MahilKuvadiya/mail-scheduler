import express from 'express'

import { getAllProducts } from '../../db/producs';

export const getAllproducts = async ( req : express.Request , res : express.Response) => {
    try{
        const products = await getAllProducts();

        return res.status(200).json(products).end();
    }catch ( e){
        console.log('Error from controller/ products/ index', e)
        return res.status(500).json("Internal server error").end();
    }
}