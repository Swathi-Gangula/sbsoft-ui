import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class LoaderService {
    public loaderCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    displayLoader(value: boolean) {
      let counter = value ? this.loaderCounter.value + 1 : this.loaderCounter.value - 1;
      this.loaderCounter.next(counter);
    }
}