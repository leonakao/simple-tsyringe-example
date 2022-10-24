import { container, injectable } from "tsyringe";
import { SignUpService } from "./signup.service";

@injectable()
export class SignUpController {
    constructor() {}
    
    static async handle(): Promise<void> {
        const service = container.resolve(SignUpService);

        await service.execute('John Doe', 'john@gmail.com', '123456');
    }
}