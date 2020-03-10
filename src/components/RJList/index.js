import React from 'react';

const RJList = (props) => {
    const notificationList = props.list.map((list) =>
        <li key={list.id} className={`list-group-item ${list.read ? `` : `font-weight-bold`}`}>{list.title}</li>
    );
    return (  
        <ul className="list-group w-100">
            {notificationList}
        </ul>
    )
}

export default RJList;