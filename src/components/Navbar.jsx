import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const activeLinkClass = ({ isActive }) => {
        return isActive ? 'red' : ''
    }

    const counter = useSelector((state) => state.products.counter)
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={activeLinkClass}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/basket" className={activeLinkClass}>
                        basket {counter}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
