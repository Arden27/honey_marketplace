"use client";

import { useDispatch } from "react-redux";
import { setItems } from "@/redux/store";
import { useEffect } from "react";

export default function LoadDB() {
  const dispatch = useDispatch();

  const items = [
    {
      id: 1,
      position: 34,
      recommended: 1,
      promotion: 1,
      name: "Miód rzepakowy",
      name2: "z nutką gryki",
      tag: "miod-rzepakowy-z-nutka-gryki",
      image: "/img/boxes/jak-rozpoznac.jpg",

      //   images: [
      //     { image: "/img/boxes/jak-rozpoznac.jpg", default: true },
      //     { image: "/img/boxes/jak-rozpoznac.jpg" },
      //     { image: "/img/boxes/jak-rozpoznac.jpg" },
      //   ],

      sizes: [
        { size: "250 g", price: 59.99 },
        { size: "450 g", price: 79.99, default: true },
        { size: "1 kg", price: 99.99 },
      ],
      categories: ["miody"],
      type: "Rzepakowy z nutką gryki",

      harvestDate: "IV 2023",
      terminationDate: "IV 2026",
      consistency: "skrystalizowany, kremowy",
      color: "jasno-żółta",

      descriptionShort:
        "Krótki opis miodu lorem ipsum dolorololo lorem dolorololo fdsfsdf dfsdfs dfsdf dfsdfs sdf sd sdfs df",

      descriptionLong:
        "Długi opis lorememememe lorem ipsum dolorololo lorem dolorololo fdsfsdf dfsdfs dfsdf dfsdfs sdf sd sdfs df lorem ipsum dolorololo lorem dolorololo fdsfsdf dfsdfs dfsdf dfsdfs sdf sd sdfs df lorem ipsum dolorololo lorem dolorololo fdsfsdf dfsdfs dfsdf dfsdfs sdf sd sdfs df ",

      metadataTitle: "Miód Rzepakowy z nutką gryki - Sklep - Dobry Bartnik",
      metadataDescription: "OPIS",
      metadataKeywords: "TAGI",
    },
    {
      id: 2,
      name: "Miód rzepakowy\nz nutką gryki",
      tag: "miod-rzepakowy-z-nutka-gryki",
      image: "/img/products/honey/honey1.jpeg",
      sizes: [
        { size: "250 G", price: 59.99 },
        { size: "450 G", price: 79.99 },
        { size: "1 KG", price: 99.99, default: true },
      ],
      categories: ["miody"],
    },
    {
      id: 3,
      name: "Miód firmowy",
      tag: "miod-firmowy",
      image: "/img/products/honey/honey2.webp",
      sizes: [
        { size: "250 G", price: 59.99 },
        { size: "450 G", price: 79.99, default: true },
        { size: "1 KG", price: 99.99 },
      ],
      categories: ["miody", "promocje"],
    },
    {
      id: 4,
      name: "Miod gorzki",
      tag: "miod-gorzki",
      image: "/img/products/honey/honey3.webp",
      sizes: [
        { size: "250 G", price: 49.99 },
        { size: "450 G", price: 59.99, default: true },
        { size: "1 KG", price: 69.99 },
      ],
      categories: ["miody"],
    },
    {
      id: 5,
      name: "Miod z krowy",
      tag: "miod-z-krowy",
      image: "/img/products/honey/honey4.jpeg",
      sizes: [
        { size: "250 G", price: 19.99 },
        { size: "450 G", price: 29.99, default: true },
        { size: "1 KG", price: 39.99 },
      ],
      categories: ["miody"],
    },
    {
      id: 6,
      name: "Bzestaw miodu",
      tag: "bzestaw-miodu",
      image: "/img/products/sets/zestaw_miodu5.jpeg",
      sizes: [
        { size: "450 G", price: 769.99 },
        { size: "1 KG", price: 1089.99, default: true },
      ],
      categories: ["miody", "zestawy"],
    },
    {
      id: 7,
      name: "Zestaw miodu powiększony",
      tag: "zestaw-miodu-powiekszony",
      image: "/img/products/sets/zestaw_miodu2.jpeg",
      sizes: [
        { size: "250 G", price: 489.99 },
        { size: "450 G", price: 869.99, default: true },
        { size: "1 KG", price: 989.99 },
      ],
      categories: ["miody", "zestawy", "promocje"],
    },
    {
      id: 8,
      name: "Zestaw miodu",
      tag: "zestaw-miodu",
      image: "/img/products/sets/zestaw_miodu3.jpeg",
      sizes: [
        { size: "250 G", price: 389.99 },
        { size: "450 G", price: 669.99, default: true },
        { size: "1 KG", price: 889.99 },
      ],
      categories: ["miody", "zestawy"],
    },
    {
      id: 9,
      name: "Elitny zestaw miodu",
      tag: "elitny-zestaw-miodu",
      image: "/img/products/sets/zestaw_miodu4.png",
      sizes: [
        { size: "3 KG", price: 1069.99, default: true },
        { size: "5 KG", price: 1489.99 },
      ],
      categories: ["miody", "zestawy"],
    },
    {
      id: 10,
      name: "Świca oryginalna",
      tag: "swica-oryginalna",
      image: "/img/products/candles/candle1.webp",
      sizes: [{ size: "3 KG", price: 15.99, default: true }],
      categories: ["swiece"],
    },
    {
      id: 11,
      name: "Świca czarna",
      tag: "swica-czarna",
      image: "/img/products/candles/candle2.jpeg",
      sizes: [{ size: "3 KG", price: 21.99, default: true }],
      categories: ["swiece", "promocje"],
    },
    {
      id: 12,
      name: "Świca prosto z miodu",
      tag: "swica-prosto-z-miodu",
      image: "/img/products/candles/candle4.jpeg",
      sizes: [{ size: "3 KG", price: 16.99, default: true }],
      categories: ["swiece"],
    },
    {
      id: 13,
      name: "Świca podstawowa",
      tag: "swica-podstawowa",
      image: "/img/products/candles/candle3.jpeg",
      sizes: [{ size: "3 KG", price: 12.99, default: true }],
      categories: ["swiece"],
    },
    {
      id: 14,
      name: "Zestaw świec miodowych",
      tag: "zestaw-swiec-miodowych",
      image: "/img/products/sets/zestaw_swiec1.jpeg",
      sizes: [
        { size: "10 szt", price: 35.99 },
        { size: "25 szt", price: 50.99, default: true },
        { size: "40 szt", price: 99.99 },
      ],
      categories: ["swiece", "zestawy"],
    },
    {
      id: 15,
      name: "Mega miodowy zestaw świec",
      tag: "mega-miodowy-zestaw-swiec",
      image: "/img/products/sets/zestaw_swiec2.jpeg",
      sizes: [
        { size: "50 szt", price: 139.99 },
        { size: "85 szt", price: 249.99, default: true },
        { size: "130 szt", price: 599.99 },
      ],
      categories: ["swiece", "zestawy"],
    },
    {
      id: 16,
      name: "Wosk pszczeli ",
      tag: "wosk-pszczeli",
      image: "/img/products/bee_products/bee_product1.jpeg",
      sizes: [
        { size: "50 szt", price: 139.99 },
        { size: "85 szt", price: 249.99, default: true },
        { size: "130 szt", price: 599.99 },
      ],
      categories: ["produkty-pszczele"],
    },
    // add more items as needed
  ];

  useEffect(() => {
    dispatch(setItems(items));
  }, []);
}
