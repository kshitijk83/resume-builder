import React from 'react';

const preview = (props) => {
    // console.log(props);

    return (
        <>
            <div>name: {props.name}</div>
            <div>email: {props.email}</div>
            <div>phone: {props.phone}</div>
        </>
    );
}

export default preview;