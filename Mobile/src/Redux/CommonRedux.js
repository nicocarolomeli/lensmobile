import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setNetworkError: null,
  resetNetworkError: null,
  setTimeoutError: null,
  resetTimeoutError: null,
  isLoadingTrue: null,
  isLoadingFalse: null,
  animationDuration: ['time'],
  setAnimationEnd: null,
  resetAnimationEnd: null,
})

export const CommonTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  networkError: false,
  timeoutError: false,
  isLoading: false,
  animationEnd: false,
})

/* ------------- Reducers ------------- */

export const setNetworkError = (state) => state.merge({ networkError: true })

export const resetNetworkError = (state) => state.merge({ networkError: false })



export const setTimeoutError = (state) => state.merge({ timeoutError: true })

export const resetTimeoutError = (state) => state.merge({ timeoutError: false })



export const isLoadingTrue = (state) => state.merge({ isLoading: true })

export const isLoadingFalse = (state) => state.merge({ isLoading: false })



export const animationDuration = (state) => state.merge({ animationEnd: false })

export const setAnimationEnd = (state) => state.merge({ animationEnd: true })

export const resetAnimationEnd = (state) => state.merge({ animationEnd: false })


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {  
  [Types.SET_NETWORK_ERROR]: setNetworkError,
  [Types.RESET_NETWORK_ERROR]: resetNetworkError,
  [Types.SET_TIMEOUT_ERROR]: setTimeoutError,
  [Types.RESET_TIMEOUT_ERROR]: resetTimeoutError,
  [Types.IS_LOADING_TRUE]: isLoadingTrue,
  [Types.IS_LOADING_FALSE]: isLoadingFalse,
  [Types.ANIMATION_DURATION]: animationDuration,
  [Types.SET_ANIMATION_END]: setAnimationEnd,
  [Types.RESET_ANIMATION_END]: resetAnimationEnd,
})
