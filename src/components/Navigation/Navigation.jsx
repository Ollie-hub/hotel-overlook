import React from 'react'
import { Link } from 'react-router-dom'
import Style from './navigation.module.scss'
import Logo from '../../assets/Img/hotel-overlook-logo.svg'

export function Navigation() {
    return (
        <nav className={Style.navBar}>
            <img src={Logo} className={Style.Logo} alt=""></img>
            <ul>
                <li className={Style.link}><Link to="/forside">Forside</Link></li>
                <li className={Style.link}><Link to="/hoteller">Hoteller og desinationer</Link></li>
                <li className={Style.link}><Link to="/vaerelser">værelser</Link></li>
                <li className={Style.link}><Link to="reservation">reservation</Link></li>
                <li className={Style.login}><Link to="login">Login</Link></li>
            </ul>
        </nav>
    )
}

