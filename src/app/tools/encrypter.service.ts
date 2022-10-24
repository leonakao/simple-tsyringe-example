import { IEncrypterService } from "../signup.service";

export class FakeEncrypterService implements IEncrypterService{
    async encrypt(value: string): Promise<string> {
        console.log(`Encrypting value ${value}`);
        
        return `${value}.encrypted`;
    }
}