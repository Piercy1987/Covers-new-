import FooterComponent from './Footer-container/Footer-column.component'
// import FooterRight from './Footer-content/content-right.component'
// import FooterCenter from './Footer-content/Footer-center.component'
import FooterLeft from './Footer-content/Footer-left.component'

const Footer = () => {

    return (
        <div className="footer-container">
            <FooterComponent FooterContent={<FooterLeft />} />
            {/* <FooterComponent FooterContent={<FooterCenter />} />
            <FooterComponent FooterContent={<FooterRight />} /> */}
            
        </div>
    )
}

export default Footer