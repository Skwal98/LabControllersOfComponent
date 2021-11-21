import { ChangeDetectorRef, InjectionToken, Provider } from '@angular/core';
import { merge, Observable } from 'rxjs';
import {
  TextfieldCleanerDirective,
  TEXTFIELD_CLEANER,
} from '../directives/cleaner.directive';
import { TextfieldController } from './textfield.controller';
import { tap } from 'rxjs/operators';

export const TEXTFIELD_WATCHED_CONTROLLER =
  new InjectionToken<TextfieldController>('watched textfield controller');

export const TEXTFIELD_CONTROLLER_PROVIDER: Provider = [
  {
    provide: TEXTFIELD_WATCHED_CONTROLLER,
    deps: [ChangeDetectorRef, TEXTFIELD_CLEANER],
    useFactory: textfieldWatchedControllerFactory,
  },
];

export function textfieldWatchedControllerFactory(
  changeDetectorRef: ChangeDetectorRef,
  ...controllers: [TextfieldCleanerDirective]
): TextfieldController {
  const change$ = merge(...controllers.map(({ change$ }) => change$)).pipe(
    tap(() => changeDetectorRef.markForCheck())
  );

  change$.subscribe();

  return new TextfieldController(change$, ...controllers);
}
