/* ---------------import api----------------- */

import { takeLatest, all } from 'redux-saga/effects';
// import AppConfig from '../Config/AppConfig';

// import LoginApi from '../Containers/Login/api'
// import LoginApiFixture from '../Containers/Login/api.fixture'

/* ------------- Types ------------- */

// import { LoginTypes } from '../Screens/Login/redux';

/* ------------- Sagas ------------- */
  
// import { doLogin} from '../Screens/Login/sagas';

/* ------------- API ------------- */

// const loginApi = AppConfig.useFixtures ? LoginApiFixture : LoginApi.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([    
    // takeLatest(LoginTypes.DO_LOGIN, doLogin, loginApi),
  ])
}