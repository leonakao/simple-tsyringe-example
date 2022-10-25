import { IEncrypterService } from "../signup.service";

export class FakeEncrypterService implements IEncrypterService{
    async encrypt(value: string): Promise<string> {
        console.log('[[ Fake Encrypter Service ]]')
        console.log(`Encrypting value ${value}`);
        console.log()
        
        return `${value}.encrypted`;
    }
}