import { deleteEmailById } from '../../db/email';
import express from 'express'

export const deleteMail = async ( req : express.Request , res : express.Response) => {
    try{
        const id = req.params.id;

        const product = await deleteEmailById(id)

        return res.status(200).json({message: 'success'});
    }catch(e){
        console.log('Error from controller/ email/ deleteMail', e)
        return res.status(500).json({message:'Internal server error'});
    }
}