
interface IClientRepository {
    save(): void;
}

interface IMailService {
    sendMail(): void;
}

class ClientRepositoryMemory implements IClientRepository {
    constructor(key: string) {}

    save(): void {
        console.log('Saving client in memory');
    }
}

class MailService implements IMailService {
    constructor(key: string) {}

    sendMail(): void {
        console.log('sending mail');
    }
}


const clientRepositoryFactory = () => {
    return new ClientRepositoryMemory('123');
}

const mailServiceFactory = () => {
    return new MailService('123');
}

const serviceLocator = (dependencyName: string) => {
    switch (dependencyName) {
        case 'ClientRepository':
            return new ClientRepositoryMemory('123');
        case 'MailService':
            return mailServiceFactory();
        default:
            throw new Error('Dependency not found');
    }
}

class CreateClientUseCase {
    constructor (
            private clientRepo: IClientRepository = serviceLocator('ClientRepository') as IClientRepository, 
            private mailService: IMailService
        ) {
        this.clientRepo = serviceLocator('ClientRepository') as IClientRepository;
        this.mailService = serviceLocator('MailService') as MailService;
    }

    run () {
        console.log('[[ Create Client Use Case ]]')
    }
}

new CreateClientUseCase(
    serviceLocator('ClientRepository') as IClientRepository, 
    new MailService('123')
).run();