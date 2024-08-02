import express from 'express'
import authentication from './authentication';
import { mail } from './mail';

const router = express.Router();

export default () : express.Router => {

    authentication(router) // authentication paths
    mail(router) // mail paths

    return router;
}