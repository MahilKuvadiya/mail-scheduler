//fetching all the emails form the sender

import { getAllEmails, getAllUnsendedEmails, getEmailBySenderEmail } from '../../db/email';
import { Request, Response } from 'express';

export const getAllEmailsController = async (req: Request, res: Response) => {
    try {
        // get all the emails from the database

        if(req.body.user.email === undefined){
            return res.status(400).json({message : 'sender email is required'}).end();
        }

        const emails = await getEmailBySenderEmail(req.body.user.email);
        return res.status(200).json({ emails }).end(); 
    } catch (error) {
        console.log('Error from controller/ email/ getAllEmails', error);
        return res.sendStatus(500);
    }
}

export const unsendedEmails = async ( req :Request, res :Response ) => {
    try {
        if( req.body.user.email === undefined ){
            return res.status(400).json({message : 'sender email is required'}).end();
        }

        const emails = await getAllUnsendedEmails(req.body.user.email);

        return res.status(200).json({ emails }).end();
    } catch (error) {
        console.log('Error from controller/ email/ unsendedEmails', error);
        return res.sendStatus(500);
    }
}