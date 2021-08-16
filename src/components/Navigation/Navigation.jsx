import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import Style from './navigation.module.scss'

export function Navigation() {
    return (
        <nav className={Style.navBar}>
            <img src={Logo} alt=""></img>
            <ul>
                <li className={Style.link}><Link to="/forside">Forside</Link></li>
                <li className={Style.link}><Link to="/camps">Camps</Link></li>
                <li className={Style.link}><Link to="/billeter">Billetter</Link></li>
                <li className={Style.link}><Link to="praktisk-info">Praktisk Info</Link></li>
                <li className={Style.link}><Link to="login">Login</Link></li>
            </ul>
        </nav>
    )
}

