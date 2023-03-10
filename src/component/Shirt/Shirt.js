import React from 'react';
import './Shirt.css'

const Shirt = ({ shirt,handelAddToCart }) => {
    const {price, name, picture } = shirt;
    return (
        <div className='shirt_area'> 
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <button onClick={ ()=>handelAddToCart (shirt)}>Bey Now</button>
        </div>
    );
};

export default Shirt;