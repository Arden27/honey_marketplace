import React from "react";
import Image from "next/image";
import Link from 'next/link'

export default function Description() {
	return (
        <div className="page-wrapper shop-menu-wrapper">
            <div className="shop-menu">
                <div className="shop-menu__item">
                    <Link 
                        className="shop-menu__item__img shop-menu__item__img--sale" 
                        href="/sklep/promocje"
                    >
                        <div className="shop-menu__item__img shop-menu__item__img--sale"></div>

                    </Link>
                    <Link 
                        className="shop-menu__item-link" 
                        href="/sklep/promocje"
                    >
                        <h2 className="shop-menu__item__text">Promocje</h2>
                    </Link>
                </div>

                <div className="shop-menu__item">
                    <Link 
                        className="shop-menu__item__img shop-menu__item__img--honey" 
                        href="/sklep/miody"
                    >
                        <div className="shop-menu__item__img shop-menu__item__img--honey"></div>

                    </Link>
                    <Link 
                        className="shop-menu__item-link" 
                        href="/sklep/miody"
                    >
                        <h2 className="shop-menu__item__text">Miody</h2>
                    </Link>
                </div>

                <div className="shop-menu__item">	
                    <Link 
                        className="shop-menu__item__img shop-menu__item__img--bee-products" 
                        href="/sklep/produkty-pszczele"
                    >
                        <div className="shop-menu__item__img shop-menu__item__img--bee-products"></div>

                    </Link>
                    <Link 
                        className="shop-menu__item-link" 
                        href="/sklep/produkty-pszczele"
                    >
                        <h2 className="shop-menu__item__text">Produkty pszczele</h2>
                    </Link>
               </div>

                <div className="shop-menu__item">
                    <Link 
                        className="shop-menu__item__img shop-menu__item__img--candles" 
                        href="/sklep/swiece"
                    >
                        <div className="shop-menu__item__img shop-menu__item__img--candles"></div>

                    </Link>
                    <Link 
                        className="shop-menu__item-link" 
                        href="/sklep/swiece"
                    >
                        <h2 className="shop-menu__item__text">Świece</h2>
                    </Link>
                </div>

                <div className="shop-menu__item">
                    <Link 
                        className="shop-menu__item__img shop-menu__item__img--sets" 
                        href="/sklep/zestawy"
                    >
                        <div className="shop-menu__item__img shop-menu__item__img--sets"></div>

                    </Link>
                    <Link 
                        className="shop-menu__item-link" 
                        href="/sklep/zestawy"
                    >
                        <h2 className="shop-menu__item__text">Zestawy</h2>
                    </Link>
                </div>
            </div>				
        </div>
    );
}
