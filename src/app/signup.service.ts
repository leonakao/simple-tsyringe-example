import { inject, injectable } from "tsyringe";

export interface IMailService {
    sendMail(to: string, message: string): Promise<void>;
}

export interface IEncrypterService {
    encrypt(value: string): Promise<string>;
}

export interface IUserRepository {
    create(name: string, email: string, password: string): Promise<void>;
}

@injectable()
export class SignUpService {
    constructor(
        @inject('UserRepository') private readonly userRepository: IUserRepository,
        @inject('MailService') private readonly mailService: IMailService,
        @inject('EncrypterService') private readonly encrypterService: IEncrypterService
    ) {}
    
    async execute(name: string, email: string, password: string): Promise<void> {
        const encryptPassword = await this.encrypterService.encrypt(password);

        await this.userRepository.create(name, email, encryptPassword);

        await this.mailService.sendMail(email, 'Welcome to our platform');
    }
}