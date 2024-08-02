import { getEmailById } from '../../db/email';
import express from 'express'

// import { getProductById } from '../../db/producs';

export const getOneMail = async ( req: express.Request, res: express.Response ) =>{
    try{
        const id = req.params.id;

        const product = await getEmailById(id)

        return res.status(200).json(product).end();
    }catch(e){
        console.log('Error from controller/ product/ getOneProduct', e)
        return res.status(500).json({message:'Internal server error'});
    }
}

// export const getOneProduct = async ( req :express.Request, res : express.Response ) =>{
//     try{
//         const id = req.params.id;

//         const product = await getProductById(id)

//         return res.status(200).json(product);
//     }catch(e){
//         console.log('Error from controller/ product/ getOneProduct', e)
//         return res.status(500).json({message:'Internal server error'});
//     }
// }