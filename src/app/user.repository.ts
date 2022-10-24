import { IUserRepository } from "./signup.service";

export class UserRepository implements IUserRepository {
    async create(name: string, email: string, password: string): Promise<void> {
        console.log(`Creating user ${name} with email ${email} and password ${password}`);
    }
}