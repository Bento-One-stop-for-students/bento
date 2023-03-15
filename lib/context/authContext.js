import React from "react";

const initialState = {
  isLoggedIn: false,
  notification: false,
  user: {},
};

export const AuthContext = React.createContext({});

function AuthReducer(authState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...authState,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case "SIGN_OUT":
      return {
        ...authState,
        isLoggedIn: false,
        user: {},
      };
    case "UPDATE_USER":
      return {
        ...authState,
        notification: action.payload.msg,
        user: action.payload.user,
      };
    case "NOTIFICATION_TRUE":
      return {
        ...authState,
        notification: action.payload,
      };
    case "NOTIFICATION_FALSE":
      return {
        ...authState,
        notification: false,
      };
    default:
      return authState;
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = React.useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
