import React from "react";

const initialState = {
  isLoggedIn: false,
  notification: false,
  user: {***REMOVED***,
***REMOVED***

export const AuthContext = React.createContext({***REMOVED***

function AuthReducer(authState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...authState,
        isLoggedIn: true,
        user: action.payload.user,
  ***REMOVED***;
    case "SIGN_OUT":
      return {
        ...authState,
        isLoggedIn: false,
        user: {***REMOVED***,
  ***REMOVED***;
    case "UPDATE_USER":
      return {
        ...authState,
        notification: action.payload.msg,
        user: action.payload.user,
  ***REMOVED***;
    case "NOTIFICATION_TRUE":
      return {
        ...authState,
        notification: action.payload,
  ***REMOVED***;
    case "NOTIFICATION_FALSE":
      return {
        ...authState,
        notification: false,
  ***REMOVED***;
    default:
      return authState;
***REMOVED***
***REMOVED***

export const AuthProvider = ({ children ***REMOVED***) => {
  const [authState, authDispatch] = React.useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch ***REMOVED******REMOVED***>
      {children***REMOVED***
    </AuthContext.Provider>
  );
***REMOVED***
