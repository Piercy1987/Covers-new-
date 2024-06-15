import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
const FooterRight = () => {

    return (
        <div>
            <div className="iconContainer">
                <FontAwesomeIcon 
                        style={{paddingRight: 10}} 
                        color='#303030' 
                        size="2x" 
                        icon={icon({name: 'facebook', style: 'brands'})} 
                />
            </div>
        </div>
    )
}

export default FooterRight