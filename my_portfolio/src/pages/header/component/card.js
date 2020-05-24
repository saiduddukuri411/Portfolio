import React from 'react';
import '../styles/card.scss';
import {NavLink} from 'react-router-dom';

const Card = ({title,link}) => {
    return (
        <NavLink className="card" to={link} activeClassName="active_card" >
            <h7 className="nav_title">{title}</h7>
        </NavLink>
    )
}
export default Card;
