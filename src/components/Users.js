import React, {useEffect} from 'react';
import {Device} from "./User";

const Users = () => {
    const devices = [
        {id:1, model:'iPhone 15 Pro Max', price:'66 000 UAH', memory:'256', image:'https://y3h2v2a5.rocketcdn.me/wp-content/uploads/2023/09/apple-iphone-15-pro-128gb-white-titanium-mtuw3.png' },
        {id:2, model:'iPhone 15 Pro', price:'55 000 UAH', memory:'256', image:'https://y3h2v2a5.rocketcdn.me/wp-content/uploads/2023/09/apple-iphone-15-pro-max-256gb-natural-titanium-mu793.png' },
        {id:3, model:'iPhone 15', price:'39 000 UAH', memory:'128', image:'https://y3h2v2a5.rocketcdn.me/wp-content/uploads/2023/09/apple-iphone-15-pro-max-256gb-natural-titanium-mu793.png' },

    ]

    return (
        <div>
            {devices.map(device => <Device key={device.id} device={device}/>)}
        </div>
    );
};

export {Users};