import { IEncrypterService } from "../signup.service";

export class FakeEncrypterService implements IEncrypterService{
    async encrypt(value: string): Promise<string> {
        return `${value}.encrypted`;
    }
}