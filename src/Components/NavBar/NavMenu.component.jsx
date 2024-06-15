import NavItem from './NavItem.component'
import { v4 as uuidv4 } from "uuid"
import {navData} from '../../data/Nav.data'

const NavMenu = () => {

    // console.log(navData)
    return (
        <div className="nav-menu-container">
            {navData.length && navData.map((data) => <NavItem key={uuidv4()} data={data} />)}
        </div>
    )
}

export default NavMenu