import {
  ChangeDetectorRef,
  InjectionToken,
  Optional,
  Provider,
} from '@angular/core';
import { HintControllerDirective } from '../directives/hint.directive';
import { Controller } from './controller';

export const HINT_WATCHED_CONTROLLER = new InjectionToken(
  'watched hint controller'
);

export const HINT_CONTROLLER_PROVIDER: Provider = [
  {
    provide: HINT_WATCHED_CONTROLLER,
    deps: [[new Optional(), HintControllerDirective], ChangeDetectorRef],
    useFactory: hintWatchedControllerFactory,
  },
];

export function hintWatchedControllerFactory(
  controller: HintControllerDirective | null,
  changeDetectorRef: ChangeDetectorRef
): Controller {
  if (!controller) {
    return new HintControllerDirective();
  }

  controller.change$.pipe().subscribe(() => {
    changeDetectorRef.markForCheck();
  });

  return controller;
}
