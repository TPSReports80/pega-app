const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isLogged: !state.isLogged };
      break;
    case "LOG_OUT":
      return { ...state, isLogged: !state.isLogged };
      break;
    default:
      return state;
  }
};

export default reducer;
