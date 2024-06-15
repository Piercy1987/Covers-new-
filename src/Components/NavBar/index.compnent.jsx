import NavMenu from './NavMenu.component'
import NavBanner from './NavBanner.component'

const NavBar = () => {

    return (
        <>
            <div className='navBar-container'>
                <NavBanner />
                <NavMenu />
            </div>
        </>
    )
}

export default NavBar