import { Injectable } from '@angular/core';
import { Subject, Observable, from } from 'rxjs';
import { delay, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {
  protected layoutService$ = new Subject();

  changeLayoutSize() {
    this.layoutService$.next();
  }

  onChangeLayoutService(): Observable<any> {
    return this.layoutService$.pipe(
      share(),
      delay(1)
    );
  }
}

