import React from "react";
import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.jpg"
import shoe3 from "../assets/shoe3.jpg"
import shoe4 from "../assets/shoe4.jpg"
import shoe5 from "../assets/shoe5.jpg"
import shoe6 from "../assets/shoe6.jpg"
import shoe7 from "../assets/shoe7.jpg"
import shoe8 from "../assets/shoe8.jpg"
import shoe9 from "../assets/shoe9.jpg"

export const products = [
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        image: shoe1,
        price: "12 999 som"
    },
    {
        title: "Женские Кроссовки Adidas Superstar",
        image: shoe2,
        price: "9 999 som"
    },
    {
        title: "Мужские Кроссовки Puma RS-X3",
        image: shoe3,
        price: "10 499 som"
    },
    {
        title: "Женские Кроссовки Reebok Classic Leather",
        image: shoe4,
        price: "8 499 som"
    },
    {
        title: "Мужские Кроссовки New Balance 574",
        image: shoe5,
        price: "11 999 som"
    },
    {
        title: "Мужские Кроссовки Nike Kyrie 7",
        image: shoe6,
        price: "11 299 som"
    },
    {
        title: "Мужские Кроссовки Jordan Air Jordan 11",
        image: shoe7,
        price: "10 755 som"
    },
    {
        title: "Мужские Кроссовки Nike LeBron XVIII",
        image: shoe8,
        price: "16 699 som" 
    },
    {
        title: "Мужские Кроссовки Nike Lebron XVIII Low",
        image: shoe9,
        price: "13 999 som"  
    },
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        image: shoe5,
        price: "8 999 som"
    },
    {
        title: "Кроссовки Puma X Aka Boku Future Rider",
        image: shoe3,
        price: "8 999 som"
    },
    {
        title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
        image: shoe6,
        price: "12 299 som"  
    }
];

export default function ShoeItem({ products }) {
  return <div>ShoeItem</div>;
}
