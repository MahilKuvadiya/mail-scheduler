import express from 'express'

import { getAllUsers } from '../../../controllers/users'
import { validateAccessToken } from '../../../middlewares'

export const users = (router : express.Router) => {
    router.get('/users' , validateAccessToken ,  getAllUsers)
}