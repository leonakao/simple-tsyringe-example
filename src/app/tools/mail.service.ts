import { IMailService } from "../signup.service";

export class FakeMailService implements IMailService{
    async sendMail(to: string, message: string): Promise<void> {
        console.log(`Sending email to ${to} with message: ${message}`);
    }
}