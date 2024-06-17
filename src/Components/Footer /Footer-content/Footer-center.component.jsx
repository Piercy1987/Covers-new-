import { Link } from 'react-router-dom'
import { navData } from '../../../data/Nav.data.js'

const FooterCenter = () => {

    return (
        <div className="footer_navlink_container" >
            {navData.map((data) =>  (               
                <div className="footer_navlink_container--item_container" >
                    <Link to={data.route}>
                        {data.label}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default FooterCenter