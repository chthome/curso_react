import React from 'react';

const ShowUserName = (props) => {
    return (
        <div>
            <h2>O nomme do usuário é: {props.name}</h2>
        </div>
    );
};

export default ShowUserName;