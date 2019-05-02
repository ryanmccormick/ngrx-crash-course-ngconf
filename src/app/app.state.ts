import * as bananaStore from './banana/state';
import { ActionReducerMap } from '@ngrx/store';

export class AppState {
  banana: bananaStore.BananaState;
}

export const initialState: AppState = {
  banana: bananaStore.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  banana: bananaStore.reducer
};

export const getMyBanana = (s: AppState) => s.banana;
