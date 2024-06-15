import { ReactComponent as Icon } from '../../../Images/Icon.svg'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'

const FooterLeft = () => {

    return (
        <div>
            <Link to='/' />
                <Icon style={{ height: '65px', color: 'red' }} />
            <Link />
        </div>
    )
}

export default FooterLeft