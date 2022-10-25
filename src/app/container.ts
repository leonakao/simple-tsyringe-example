import { container } from 'tsyringe';
import { IEncrypterService, IMailService, IUserRepository } from './signup.service';
import { FakeEncrypterService } from './tools/encrypter.service';
import { FakeMailService } from './tools/mail.service';
import { MailchimpService } from './tools/mailchimp.service';
import { UserRepository } from './user.repository';

container.register<IMailService>(
  'MailService',
  { useClass: MailchimpService },
)

container.register<IEncrypterService>(
    'EncrypterService',
    { useClass: FakeEncrypterService },
)

container.register<IUserRepository>(
    'UserRepository',
    { useClass: UserRepository },
)
  
