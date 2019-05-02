import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState, getMyBanana } from '../app.state';
import { GetNewBanana } from './state';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.scss']
})
export class BananaComponent implements OnInit {

  title = 'My NgRx Banana App';

  banana$: Observable<any>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.newBanana();
    this.banana$ = this.store.pipe(select(getMyBanana));
  }

  newBanana() {
    this.store.dispatch(new GetNewBanana(null));
  }


  peelBanana() {

  }

  eatBanana() {

  }

  timeHop() {

  }

}
