import { combineReducers } from "redux";
import { DispatchTypes } from "../types/dispatchTypes";

const notifications = (state = [], action) => {
  switch (action.type) {
    case "FETCH_NOTIFICATIONS":
          return action.notifications.reverse();
    case "READ_NOTIFICATION":
      return state.map((notification) =>
        notification.id === action.id ? { ...notification, read: true } : notification
    );
    // case DispatchTypes.UNREAD_NOTIFICATION:
    //   return state.map((notification) =>
    //     notification.id === action.id ? { ...notification, read: false } : notification
    //   );
    // case DispatchTypes.READ_ALL_NOTIFICATIONS:
    //   return state.map((notification) => 
    //     notification ? { ...notification, read: true } : notification
    //   );
    // case DispatchTypes.UNREAD_ALL_NOTIFICATIONS:
    //   return state.map((notification) => 
    //     notification ? { ...notification, read: false } : notification
    //   );
    // case DispatchTypes.FILTER_READ_NOTIFICATIONS:
    //   return action.notifications.filter((notification) => notification.read);
    // case DispatchTypes.FILTER_UNREAD_NOTIFICATIONS:
    //   return action.notifications.filter((notification) => !notification.read);
    // case DispatchTypes.DISPLAY_ALL_NOTIFICATIONS:
    //   return action.notifications.reverse();
    default:
      return state;
  }
};


export default combineReducers({
  notifications
});