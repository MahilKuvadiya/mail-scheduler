import express from 'express'
import authentication from './authentication';
import { users } from './protected/users';
import { products } from './protected/product';

const router = express.Router();

export default () : express.Router => {

    authentication(router) // authentication paths
    users(router); // protected paths
    products(router)

    return router;
}