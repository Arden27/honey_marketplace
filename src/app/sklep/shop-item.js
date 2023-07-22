"use client"

import Image from 'next/image';
import React, { useState } from 'react';


function ShopItem({ item }) {
    // Initialize state to store the currently selected size
    const [selectedSize, setSelectedSize] = useState();
    const [selectedPrice, setSelectedPrice] = useState();

    const handleSizeChange = (size, price) => {
        setSelectedSize(size);
        setSelectedPrice(price);
    };

    return (
        <div className="shop__item">
            <Image
                className="shop__item__img"
                src={item.image}
                width={500}
                height={500}
                alt={item.name}
            />

            <div className="shop__item__content-wrapper">
                <h2 className="shop__item__content shop__item__content__name">
                    {item.name}
                </h2>

                <div className="shop__item__content__weight-wrapper">
                    {item.sizes.map((sizeObj, index) => (
                        <React.Fragment key={index}>  {/* Using shorthand syntax for React.Fragment */}
                            <input 
                                type="radio" 
                                id={`weight-${sizeObj.size}-${item.id}`} 
                                name={`weight-${item.id}`} 
                                value={sizeObj.size} 
                                onChange={() => handleSizeChange(sizeObj.size, sizeObj.price)}
                                className="visually-hidden"
                            />
                            <label htmlFor={`weight-${sizeObj.size}-${item.id}`} className="button shop__item__content shop__item__content__weight">{sizeObj.size}</label>
                        </React.Fragment>
                    ))}
                </div>

                <div className="shop__item__content shop__item__content__price">
                    {selectedPrice} zł
                </div>
                <button className="button-big shop__item__content shop__item__content__add-to-cart">
                    Dodaj do koszyka
                </button>
            </div>
        </div>
    );
}

export default ShopItem;
