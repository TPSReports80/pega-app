const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isLogged: !state.isLogged, showMobileNav: false };
      break;
    case "LOG_OUT":
      return { ...state, isLogged: !state.isLogged, showMobileNav: false };
      break;
    case "TOGGLE_NAV":
      return {
        ...state,
        showMobileNav: !state.showMobileNav,
      };
    case "ADD_ATTENDEE":
      const { id, attendee } = action.payload;
      const newData = state.data.map((conf) => {
        if (conf.id === id) {
          console.log("add attendee to conf");
          conf.attendees.push(attendee);
          return conf;
        } else {
          return conf;
        }
      });
      return {
        ...state,
        data: newData,
      };
      break;
    case "INVALID_ID":
      return {
        ...state,
        showTable: false,
      };
    case "UPDATE_VIEW":
      const viewConf = state.data.find((conf) => {
        return conf.id === action.payload;
      });
      return {
        ...state,
        viewList: viewConf.attendees,
        showTable: true,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
