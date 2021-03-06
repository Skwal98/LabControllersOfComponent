import { Injectable, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class Controller implements OnChanges {
  readonly change$ = new Subject<void>();

  ngOnChanges() {
    this.change$.next();
  }
}
