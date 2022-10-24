import { container } from 'tsyringe';
import { SignUpService } from './signup.service';

container.register<SignUpService>(
  SignUpService,
  { useClass: SignUpService },
)
