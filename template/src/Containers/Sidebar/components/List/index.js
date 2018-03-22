import React from 'react'

import './style.css'

const List = ({ title, items }) => {
    return (
        <div className="list">
            { 
                title ? 
                    <h5 className="list__title">{ title }</h5> 
                    : null 
            }
            <ul className="list__body">
                {
                    items.map(
                        (item, index) => 
                            <li className="list__item" key={index}>
                                <a className={`list__link ${ item.active ? "list__link--active" : "" }`} href={item.link}>{item.title}</a>
                            </li>
                    )
                }
            </ul>
        </div>
    )
}

export default List