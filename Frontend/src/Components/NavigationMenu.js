import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props){
    return (
        <div>
            <div className="font-bold py-3">
                Group 22 E-Wallet
            </div>
            <ul>

                <li>
                    <Link
                        to="/dashboard"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Dashboard
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu
