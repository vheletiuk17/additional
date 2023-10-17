import React from 'react';
import './Devices.css'

const Device = ({device}) => {
const {id, model, price, memory, image} = device;
    return (
        <div className={"Main"}>
            <div className={"Info"}>
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>price: {price}</p>
            <p>memory: {memory}</p>
                <form action="https://jabko.ua/ivano-frankivsk/iphone/">
                <button typeof={"button"} className={"button"} >Buy</button>
                </form>
            </div>

            <p>{<img src={image} alt={model}/>}</p>
        </div>
    );
};

export {Device};