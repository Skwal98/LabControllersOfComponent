import { Directive, forwardRef, InjectionToken, Input } from '@angular/core';
import { Controller } from '../common/controller';

@Directive({
  selector: '[textfieldCleaner]',
  providers: [
    {
      provide: forwardRef(() => TEXTFIELD_CLEANER),
      useExisting: forwardRef(() => TextfieldCleanerDirective),
    },
  ],
})
export class TextfieldCleanerDirective extends Controller {
  @Input('textfieldCleaner')
  cleaner = false;
}

export const TEXTFIELD_CLEANER = new InjectionToken<TextfieldCleanerDirective>(
  'textfieldCleaner',
  { factory: cleanerDirectiveFactory }
);

export function cleanerDirectiveFactory(): TextfieldCleanerDirective {
  return new TextfieldCleanerDirective();
}
