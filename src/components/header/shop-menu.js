import React from "react";
import Image from "next/image";

export default function Description() {
	return (
        <div className="shop-menu-wrapper">
            <div className="shop-menu">

                <div className="shop-menu__item">   
                    <div className="shop-menu__item__img shop-menu__item__img--sale"></div>
                    <h2 className="shop-menu__item__text">Promocje</h2>
                </div>

                <div className="shop-menu__item">
                    <div className="shop-menu__item__img shop-menu__item__img--honey"></div>
                    <h2 className="shop-menu__item__text">Miody</h2>					
                </div>

                <div className="shop-menu__item">	
                    <div className="shop-menu__item__img shop-menu__item__img--bee-products"></div>				
                    <h2 className="shop-menu__item__text">Produkty Pszczele</h2>					
               </div>

                <div className="shop-menu__item">	
                    <div className="shop-menu__item__img shop-menu__item__img--candles"></div>				
                    <h2 className="shop-menu__item__text">Świece</h2>			
                </div>

                <div className="shop-menu__item">
                    <div className="shop-menu__item__img shop-menu__item__img--sets"></div>				
                    <h2 className="shop-menu__item__text">Zestawy</h2>					
                </div>
            </div>				
        </div>
    );
}
