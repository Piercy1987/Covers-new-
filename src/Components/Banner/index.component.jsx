


const Banner = ({ url }) => {

    const handleLocation = (url) => {
        switch (url) {
            case '/':
                return 'Covers Brothers'
            case '/setlist':
                return 'Set List'
            case '/gallery':
                return 'Gallery'
            case '/gigs':
                return 'Gigs'
            case '/contact':
                return 'Contact us'
            case '/login':
                return 'Admin'
            default:
                break;
        }
    }

    return (
        <div className='bannerContainer'>
            <div className="page-title">{handleLocation(url)}</div>
        </div>
    )
}

export default Banner