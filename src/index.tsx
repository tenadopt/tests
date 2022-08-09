/*
Вопрос:

    Какой тип правильнее указать вместо "any" при типизации стэйта?

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const results = useState<any>(["Bob", "Alex", "Ann"])
    const users = results[0]
    const setUsers = results[1]

    return (
        <p>Тут будет список пользователей</p>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);

// Какой тип правильнее указать вместо "any" при типизации стэйта?
*/

/*
Вопрос:

    Что вернёт выражение: typeof useState?

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    return (
        <p>Тут будет список пользователей!</p>
    )
}

ReactDOM.render(
    <UsersList />, document.getElementById('root')
);

// Что вернёт выражение: typeof useState?
*/
/*
Вопрос:

    Чему равно results.length?

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const results = useState<Array<string>>(["Bob", "Alex", "Ann"])

    const users = results[0]
    const setUsers = results[1]

    return (
        <p>Тут будет список пользователей</p>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);

// Чему равно results.length?*/


/*
Вопрос:

    Что вернёт выражение: Array.isArray(users)?

    copy

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    return (
        <p>Тут будет список пользователей</p>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что вернёт выражение: Array.isArray(users)?
*/



/*Что надо вставить вместо ХХХ, чтобы код заработал?

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                { users.ХХХ(user => <li>{user}</li> )}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что надо вставить вместо ХХХ, чтобы код заработал?*/

/*Что надо вставить вместо XXX, чтобы код заработал?
❗ Ответ дать минимально возможным объёмом кода

copy

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>
    const usersList = users.map(XXX)

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {usersList}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);

// Что надо вставить вместо XXX, чтобы код заработал?
// ❗ Ответ дать минимально возможным объёмом кода*/
/*
Вопрос:

    Что вернёт выражение: Array.isArray(usersList)?

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>
    const usersList = users.map(getUser)

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {usersList}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что вернёт выражение: Array.isArray(usersList)?*/

/*Что вернёт выражение: typeof getUser?

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {users.map(getUser)}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что вернёт выражение: typeof getUser?

Вопрос:

    Что надо написать вместо XXX, чтобы код работал?
❗ Ответ дать минимально возможным объёмом кода

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type UserType = {
    id: number
    name: string
    age: number
}

function User(props: UserType) {
    return (
        <li>User {props.name}: {props.age} y.o.</li>
    )
}

function UsersList() {
    const state = [
        {id: 1, name: "Bob", age: 34},
        {id: 2, name: "Alex", age: 25},
        {id: 3, name: "Ann", age: 30},
        {id: 4, name: "John", age: 23},
    ]
    const users = [
        {id: 1, userName: "Bob", age: 34},
        {id: 2, userName: "Alex", age: 25},
        {id: 3, userName: "Ann", age: 30},
        {id: 4, userName: "John", age: 23},
    ]

    const [usersList, setUsersList] = useState<Array<UserType>>(XXX)
    return (
        <main>
            <h5>User list:</h5>
            <p>Тут будет список пользователей</p>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что надо написать вместо XXX, чтобы код работал?
// ❗ Ответ дать минимально возможным объёмом кода*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
