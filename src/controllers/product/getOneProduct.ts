import express from 'express'

import { getProductById } from '../../db/producs';

export const getOneProduct = async ( req :express.Request, res : express.Response ) =>{
    try{
        const id = req.params.id;

        const product = await getProductById(id)

        return res.status(200).json(product);
    }catch(e){
        console.log('Error from controller/ product/ getOneProduct', e)
        return res.status(500).json({message:'Internal server error'});
    }
}