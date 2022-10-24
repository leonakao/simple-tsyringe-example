import 'reflect-metadata'
import './container'
import { SignUpController } from './signup.controller';

class Server {
    public static start() {
        SignUpController.handle().then(result => {
            console.log(result);
        }).catch(error => console.log(error))
    }
}

Server.start();