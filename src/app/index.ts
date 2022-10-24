import 'reflect-metadata'
import './container'
import { SignUpController } from './signup.controller';

class Server {
    public static async start() {
        try {
            await SignUpController.handle()
        } catch (err) {
            console.log('Ocorreu um erro')
            console.error(err)
        }
    }
}

Server.start();