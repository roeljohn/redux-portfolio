import React from 'react';

const RJCountArray = (props) => {
    const listCount = props.list && props.list.length;
    return (  
        <>
            {listCount}
        </>
    )
}

export default RJCountArray;