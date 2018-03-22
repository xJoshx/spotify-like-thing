import React from 'react'
import './style.css'

const Menu = ({ items }) => {
    return (
        <ul className="menu">
           {
               items.map(item =>
                <li className="menu__item">
                    <a className="menu__link" href={item.link}>{item.title}</a>
                </li>
                )
           }
        </ul>
    );
};

export default Menu