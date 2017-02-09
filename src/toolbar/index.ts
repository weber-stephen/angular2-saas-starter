import { ToolbarComponent } from './toolbar.component';
import { SearchAutocompleteComponent } from './search-autocomplete/search-autocomplete.component';
import { ClickOutsideDirective } from './search-autocomplete/clickinside.directive';

export const TOOLBAR_MODULE = [
    ToolbarComponent,
    SearchAutocompleteComponent,
    ClickOutsideDirective
];