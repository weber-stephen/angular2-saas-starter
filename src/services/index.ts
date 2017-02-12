import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { MessageService } from './message.service';
import { NavigationService } from './navigation.service';
import { SearchService } from './search.service';
import { SalesService } from './sales.service';
import { TableService } from './table.service';
import { RolesService } from './roles.service';

export const SERVICES_MODULE = [
    AuthenticationService,
    UserService,
    MessageService,
    NavigationService,
    SearchService,
    SalesService,
    TableService,
    RolesService
];