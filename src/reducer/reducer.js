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
      attendee.checkedIn = true;
      const newData = state.data.map((conf) => {
        if (conf.id === id) {
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
    case "UPDATE_ATTENDEE":
      const { id: updatedID, attendee: updatedAttendee } = action.payload;

      const updatedData = state.data.map((conf) => {
        if (conf.id === updatedID) {
          const updatedList = conf.attendees.map((person) => {
            if (person.email === updatedAttendee.email) {
              return { ...person, checkedIn: true };
            } else return person;
          });
          return { ...conf, attendees: updatedList };
        } else return conf;
      });
      return {
        ...state,
        data: updatedData,
      };
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
