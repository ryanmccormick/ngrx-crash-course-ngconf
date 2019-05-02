import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RotService {

  rotBanana(): Observable<any> {
    console.log('ROT BANANA');

    const milliseconds = 2000;
    return Observable.create(observer => {
      setTimeout(() => {
        console.log('DONE WAITING');
        observer.next('brown');
        observer.complete();
      }, milliseconds);
    });
  }

}
