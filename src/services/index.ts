import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { MessageService } from './message.service';
import { NavigationService } from './navigation.service';
import { SearchService } from './search.service';

export const SERVICES_MODULE = [
    AuthenticationService,
    UserService,
    MessageService,
    NavigationService,
    SearchService
];