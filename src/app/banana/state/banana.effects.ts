import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { INITIATE_TIME_HOP, InitiateTimeHop, TimeHopComplete } from './banana.actions';
import { RotService } from '../../rot.service';


@Injectable({providedIn: 'root'})
export class BananaEffects {

  constructor(private action$: Actions, private rot: RotService) {
  }

  @Effect()
  initiateTimeHop$ = this.action$.pipe(
    ofType(INITIATE_TIME_HOP),
    switchMap((action: InitiateTimeHop) =>
      this.rot.rotBanana().pipe(
        map(color => new TimeHopComplete(color))
      )
    )
  );


}
