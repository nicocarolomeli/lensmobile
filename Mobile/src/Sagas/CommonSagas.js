import { call, put } from 'redux-saga/effects';
import CommonActions from '../Redux/CommonRedux';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export function* animationDuration(api, action) {
  const {time} = action;
  if(__DEV__){
  console.log('antes tiempo------------------------------------');
  }
  yield delay(time);
  if(__DEV__){
  console.log('tras tiempo------------------------------------');
  }
  yield put(CommonActions.setAnimationEnd());
}