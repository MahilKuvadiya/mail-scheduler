import { getOneMail } from "../../controllers/email/get-particuler-mail"
import { getAllEmailsController, unsendedEmails } from "../../controllers/email/get-all-emails"
import { schedualEmail } from "../../controllers/email/schedual-email"
import { Router } from "express"
import { deleteMail } from "../../controllers/email/delete-mail"
import { validateAccessToken } from "../../middlewares"
import { validate } from "node-cron"


export const mail = ( router: Router) => {
    router.post('/schedualEmail',validateAccessToken, schedualEmail)
    router.get('/getAllMails',validateAccessToken, getAllEmailsController)
    router.get('/unsendedEmails',validateAccessToken, unsendedEmails)
    router.get('/mail/:id',validateAccessToken, getOneMail)
    router.delete('/mail/:id',validateAccessToken, deleteMail)
}