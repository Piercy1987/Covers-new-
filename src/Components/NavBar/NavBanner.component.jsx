import { ReactComponent as Icon } from '../../Images/Icon.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { logOutUser } from '../../Redux/Slices/User.slice'
import { useDispatch, useSelector } from "react-redux"
import { setEditMode, setPreviewMode } from '../../Redux/Slices/control.slice'

const NavBanner = () => {

    const {editMode, previewMode} = useSelector(state => state.control)

    const { user } = useSelector(state => state.users)
    const dispatch = useDispatch()

    const handleLogoutUser = async () => {
        await dispatch(logOutUser())
        await dispatch(setPreviewMode())
        await dispatch(setEditMode(false))
    }

    return (

        <div className='nav-banner-container'>
            <Link to='/'>
                <Icon style={{ height: '65px', color: 'red' }} />
            </Link>
            {editMode && 
                ((editMode && !previewMode) ?
                    <div className='nav-banner-container--headerTitle'>
                        Viewing in edit mode
                    </div > 
                    :
                    <div className='nav-banner-container--headerTitle'>
                        Viewing in preview Mode
                    </div>
                ) 
            }
            {user.email && 
            <div onClick={handleLogoutUser} className='nav-banner-container__icon'>
                Logged in as admin user <FontAwesomeIcon size="xl" icon={icon({ name: 'right-from-bracket', style: 'solid' })} />
            </div>}
        </div>
    )
}

export default NavBanner