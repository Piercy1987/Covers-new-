import React from "react"
import { NavLink } from "react-router-dom"
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavItem = ({data}) => {

    const { label, route } = data
    const handleIcon = (iconName) => {

        switch (iconName) {
            case 'Gigs':
                return icon({name: 'guitar', style: 'solid'})
            case 'Home':
                return icon({name: 'house', style: 'solid'})
            case 'Setlist':
                return icon({name: 'list', style: 'solid'})
            case 'Gallery':
                return icon({name: 'images', style: 'solid'})
            case 'Contact':
                return icon({name: 'envelope', style: 'solid'})
            case 'Login':
                return icon({name: 'right-to-bracket', style: 'solid'})
        }
    }

    return (
        <NavLink className={({ isActive }) => isActive ? `navitem-container navitem-container__active` : 'navitem-container'} to={route} >
            <div >
                <FontAwesomeIcon 
                    style={{paddingRight: 10}} 
                    color='#303030' size="small" 
                    icon={handleIcon(label)} 
                />
                {/* {label} */}
            </div>
        </NavLink>
    )
}

export default NavItem