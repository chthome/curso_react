import React from 'react';
import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Pedro", age: 20},
        {id: 3, name: "Josias", age: 19},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) =>
            prevUsers.filter((user) => randomNumber !== user.id)
        );
        
    };

    return (
        <div>
            {/* 4 - Render sem Key */}
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>

            {/* 5 - Render COM Key */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>

            {/* 6 - previous state */}
            <button onClick={deleteRandom}>Delete Ramndom user</button>
        </div>
    );
};

export default ListRender;