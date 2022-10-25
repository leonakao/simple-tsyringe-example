import { IMailService } from "../signup.service";

export class FakeMailService implements IMailService{
    async sendMail(to: string, message: string): Promise<void> {
        console.log('[[ Fake Mail Service ]]')
        console.log(`Sending email to ${to} with message: ${message}`);
        console.log()
    }
}