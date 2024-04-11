import express from 'express'

import { createProduct } from '../../db/producs';

export const createProductController = async (req : express.Request, res : express.Response) => {
    try{
        const { name , price , stock } = req.body;

        var description : string | null = req.body.description || null;
        
        const product = await createProduct({ name , price, stock ,description})
       
        return res.status(200).json(product).end();
    }catch (e){
        console.log('Error from controller/ products/ createProduct',e)
        return res.status(500).json({message : 'Internal Server Error'}).end();
    }
}