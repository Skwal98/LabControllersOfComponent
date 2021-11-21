import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';
import {
  HINT_CONTROLLER_PROVIDER,
  HINT_WATCHED_CONTROLLER,
} from '../common/providers';
import { HintControllerDirective } from '../directives/hint.directive';

@Component({
  selector: 'app-primitive-text-field',
  templateUrl: './primitive-text-field.component.html',
  styleUrls: ['./primitive-text-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HINT_CONTROLLER_PROVIDER],
})
export class PrimitiveTextFieldComponent implements OnInit {
  constructor(
    @Inject(HINT_WATCHED_CONTROLLER)
    readonly hintController: HintControllerDirective | null
  ) {}

  ngOnInit(): void {}

  get cdGet(): string {
    console.log('Primitive text field: cd invoked');
    return '';
  }
}
