import { createEmail } from '../../db/email';
import express from 'express';
import { scheduler } from '../../helper/scheduler/schedualer'


function getCronTimes(recurrence : Recurrence) {
    return recurrence.times.flatMap(time => {
        const [hour, minute] = time.split(':').map(Number);

        switch (recurrence.type) {
            case 'daily':
                return [`${minute} ${hour} * * *`];
            case 'weekly':
                return recurrence.days.map(day => `${minute} ${hour} * * ${day}`);
            case 'monthly':
                return recurrence.days.map(day => `${minute} ${hour} ${day} * *`);
            case 'quarterly':
                // Quarterly on specific days of Jan, Apr, Jul, Oct
                return recurrence.days.map(day => `${minute} ${hour} ${day} 1,4,7,10 *`);
            case 'one-time':
                const [date, month, year] = recurrence.dateTime.split(' ')[1].split('/').map(Number);
                return [`${minute} ${hour} ${date} ${month} *`];
            default:
                throw new Error('Invalid recurrence type');
        }
    });
}


    interface Recurrence {
        type: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'one-time';
        days?: number[];
        dateTime?: string;
        times?: string[];
    }

function parseDateString(dateString : string) {
    const [time, date] = dateString.split(' ');
    const [hour, minute, second] = time.split(':').map(Number);
    const [day, month, year] = date.split('/').map(Number);

    return new Date(year, month - 1, day, hour, minute, second);
}

export const schedualEmail = async (req : express.Request, res : express.Response) => {
    try {
        // Get the email data from the request
        const { email, scheduledTime, recurrence, receiverEmail, subject, text } = req.body;
        // Save the email data in the database (uncomment when createEmail function is available)
        const r = await createEmail({
            senderEmail : req.body.user.email,
            receiverEmail : receiverEmail,
            subject : subject,
            text : text,
            recurrence,
        });

        // Parse the scheduled time from the input format
        console.log('scheduledTime', scheduledTime);
        let cronTimes;

        if (recurrence.type === 'one-time') {
            const parsedDate = parseDateString(recurrence.dateTime);
            cronTimes = getCronTimes({
                type: 'one-time',
                dateTime: `${parsedDate.getDate()}/${parsedDate.getMonth() + 1}/${parsedDate.getFullYear()}`,
                times: [`${parsedDate.getHours()}:${parsedDate.getMinutes()}:${parsedDate.getSeconds()}`]
            });
        } else {
            cronTimes = getCronTimes(recurrence);
        }

        // Schedule the email for each cron time

        cronTimes.forEach((cronTime: string) => {
            scheduler(r._id + '',cronTime, recurrence.type === 'one-time');
        });

        return res.status(200).json({ message: 'success' }).end();
    } catch (e) {
        console.log('Error from controller/email/schedualEmail', e);
        return res.sendStatus(500);
    }
};
