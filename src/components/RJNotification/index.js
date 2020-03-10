import React from 'react';
import {RJCountArray} from '../../components';

const RJNotification = (props) => {
    const unreadNotificationList = props.list.filter((list) => list.read === false);
    const notificationList = unreadNotificationList.map((list) =>
        <button key={list.id} onClick={() => props.readNotification(list.id, list)} class="dropdown-item" type="button">{list.title}</button>
    );
    return (  
        <div class="dropdown">
        All Notifications 
        <button class="btn btn-link dropdown-toggle float-right" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Unread Notification <RJCountArray list={unreadNotificationList} />
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            {notificationList}
        </div>
        </div>
)
}

export default RJNotification;