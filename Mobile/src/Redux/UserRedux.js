import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setToken: ['token'],
  setUser: ['userData'],
  firstOnBoarding: ['flagOnBoarding'],
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  token: null,
  userData: null,
  flagOnBoarding: null,
})

/* ------------- Reducers ------------- */

export const setToken = (state, { token }) => state.merge({ token })

export const setUser = (state, { userData }) => state.merge({ userData })

export const firstOnBoarding = (state, { flagOnBoarding }) => state.merge({ flagOnBoarding })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TOKEN]: setToken,
  [Types.SET_USER]: setUser,
  [Types.FIRST_ON_BOARDING]: firstOnBoarding,
})