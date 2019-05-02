import { EAT_BANANA, GET_NEW_BANANA, PEEL_BANANA, TIME_HOP_COMPLETE } from './banana.actions';
import * as programActions from './banana.actions';

function logReducer(action: any): void {
  console.log('REDUCER:', action);
}

export function reducer(state: any, action: programActions.BananaAction): any {
  switch (action.type) {
    case GET_NEW_BANANA:
      logReducer(GET_NEW_BANANA);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: 'yellow'
      };
    case PEEL_BANANA:
      logReducer(PEEL_BANANA);
      return {
        ...state,
        isPeeled: true
      };
    case EAT_BANANA:
      logReducer(EAT_BANANA);
      const copy = {...state};
      const currentBitesRemaining = copy.bitesRemaining;
      const nextBite = currentBitesRemaining > 0 ? currentBitesRemaining - 1 : 0;

      return {
        ...state,
        bitesRemaining: nextBite
      };
    case TIME_HOP_COMPLETE:
      logReducer(TIME_HOP_COMPLETE);
      return {
        ...state,
        // @ts-ignore
        color: action.payload
      };
    default:
      return {
        ...state
      };
  }
}
