import { Observable } from 'rxjs';
import { TextfieldCleanerDirective } from '../directives/cleaner.directive';

export class TextfieldController {
  constructor(
    readonly change$: Observable<unknown>,
    private readonly cleanerDirective: TextfieldCleanerDirective // other directives...
  ) {}

  get cleaner(): boolean {
    return this.cleanerDirective.cleaner;
  }

  // other directives...
}
