import SignIn from "../sign-in/Sign-in.component"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AuthenticationPage = () => {

    const { email } = useSelector((state) => state.users.user)
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth)
    //     response && createUserDocumentFromAuth(response.user)
    // },[])

    return (
        <div className='pageContainer'>
            {email ? <div>
                Welcome {email}
                <div>
                    <Link to='/'>Home</Link>
                </div>
            </div> :
            <div className='authentication-page-container'>
                <SignIn  />
            </div>}
        </div>
    )
}

export default AuthenticationPage