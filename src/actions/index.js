import { 
    getNotifications, 
    putNotification, 
    postUnreadNotification, 
    postReadAllNotifications, 
    postUnreadAllNotifications } from "../api";
  
  // Fetch All Notifications
  export const fetchAllNotification = () => {
      return (dispatch) => {
        getNotifications()
        .then(res => 
          dispatch({ type: "FETCH_NOTIFICATIONS", notifications: res.data })
        )
        .catch(err => 
          dispatch({ type: "ERROR",msg: "Unable to fetch data" })
        );
      };
  }
  
  // Read Notification
  export const readNotification = (id, data) => {
    return (dispatch) => {
      putNotification(id, data)
      .then(res => 
        dispatch({ type: "READ_NOTIFICATION", id })
      )
      .catch(err => 
        dispatch({ type: "ERROR",msg: "Unable to fetch data" })
      );
    };
  }
  
//   // Unread Notification
//   export const unreadNotification = (id: any) => {
//     return (dispatch: any) => {
//       postUnreadNotification(id)
//       .then(res => 
//         dispatch({ type: DispatchTypes.UNREAD_NOTIFICATION, id })
//       )
//       .catch(err => 
//         dispatch({ type: "ERROR",msg: "Unable to fetch data" })
//       );
//     };
//   }
  
//   // Read All Notification
//   export const readAllNotifications = () => {
//     return (dispatch: any) => {
//       postReadAllNotifications()
//       .then(res => 
//         dispatch({ type: DispatchTypes.READ_ALL_NOTIFICATIONS, notifications: res.data })
//       )
//       .catch(err => 
//         dispatch({ type: "ERROR",msg: "Unable to fetch data" })
//       );
//     };
//   }
  
//   // Unread All Notification
//   export const unreadAllNotifications  = () => {
//     return (dispatch: any) => {
//       postUnreadAllNotifications()
//       .then(res => 
//         dispatch({ type: DispatchTypes.UNREAD_ALL_NOTIFICATIONS, notifications: res.data })
//       )
//       .catch(err => 
//         dispatch({ type: "ERROR",msg: "Unable to fetch data" })
//       );
//     };
//   }
  
  
  
//   // Filter Read Notifications
//   export const filterReadNotifications = () => {
//     return (dispatch: any) => {
//       getNotifications()
//       .then(res => 
//         dispatch({ type: DispatchTypes.FILTER_READ_NOTIFICATIONS, notifications: res.data })
//       )
//       .catch(err => 
//         dispatch({ type: "ERROR",msg: "Unable to fetch data" })
//       );
//     };
//   }
  
//   // Filter Unread Notifications
//   export const filterUnreadNotifications = () => {
//     return (dispatch: any) => {
//       getNotifications()
//       .then(res => 
//         dispatch({ type: DispatchTypes.FILTER_UNREAD_NOTIFICATIONS, notifications: res.data })
//       )
//       .catch(err => 
//         dispatch({ type: "ERROR",msg: "Unable to fetch data" })
//       );
//     };
//   }
//   // Display All Notifications
//   export const displayAllNotifications = () => {
//     return (dispatch: any) => {
//       getNotifications()
//       .then(res => 
//         dispatch({ type: DispatchTypes.DISPLAY_ALL_NOTIFICATIONS, notifications: res.data })
//       )
//       .catch(err => 
//         dispatch({ type: "ERROR",msg: "Unable to fetch data" })
//       );
//     };
//   }