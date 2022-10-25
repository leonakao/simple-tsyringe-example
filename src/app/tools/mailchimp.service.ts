import { IMailService } from "../signup.service";

export class MailchimpService implements IMailService{
    async sendMail(to: string, message: string): Promise<void> {
        console.log('[[ Mailchimp Service ]]')
        console.log(`Sending email to ${to} with message: ${message}`);
        console.log()
    }
}