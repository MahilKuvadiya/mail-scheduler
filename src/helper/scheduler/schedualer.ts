import { sendEmail } from '../../helper/mail/send-mail';
import cron from 'node-cron';

export const scheduler = ( emailId : string, time: string , sendOnce : boolean ) => {
    // function scheduleEmail(time, mailOptions) {
            console.log('time', time)
            let job = cron.schedule(time, () => {
                sendEmail( emailId )
                // console.log('Email sent');
                if(sendOnce){
                    job.stop();
                }
              });
        
      
        console.log(`Email scheduler set for time: ${time}`);
      }