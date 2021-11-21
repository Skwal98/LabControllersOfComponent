import { Directive, Input, TemplateRef } from '@angular/core';
import { Controller } from '../common/controller';

@Directive({
  selector: '[hintContent]',
})
export class HintControllerDirective extends Controller {
  @Input('hintContent')
  content!: TemplateRef<any>;

  @Input('hintDirection')
  direction: string = 'bottom-left';

  @Input('hintMode')
  mode: string | null = null;
}
