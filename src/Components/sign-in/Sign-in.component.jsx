import { useState } from "react"
import Button from "../Lib/Button/Button.component"
import FormInput from "../Lib/form-input/Form-input.component"
import { signInWithGooglePopup, signInWithGoogleEmailAndPassword } from "../../Firebase/firebase"
import './sign-in.styles.scss'
import { useDispatch } from "react-redux"
import { setUser } from "../../Redux/Slices/User.slice"
import { setError } from "../../Redux/Slices/Error.slice"
import { setEditMode } from "../../Redux/Slices/control.slice"

const defaultValues = {
    email: '',
    password: ''
}

const SignIn = ({}) => {

    const resetFields = () => setSignInValues(defaultValues)

    const [ signInValues, setSignInValues ] = useState(defaultValues)
    const { email, password } = signInValues
    const dispatch = useDispatch()

    const handleChange = (e) => { 
        const { name, value } = e.target
        setSignInValues({ ...signInValues, [name]:value })
    }

    const handleSignInWithEmailAndPassword = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithGoogleEmailAndPassword(email, password)
            console.log(user.user)
            dispatch(setUser(user.user))
            dispatch(setEditMode(true))
            resetFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    dispatch(setError({
                        code: 1,
                        message: 'No user found'
                    }))
                    break;
                case 'auth/wrong-password':
                    dispatch(setError({
                        code: 1,
                        message: 'Wrong password'
                    }))
                    break
                default: 
                    console.log(error.code)
                    break;
            }
            resetFields()
        }
    }

    return (
        <div className='sign-in-container'>
            <h1>Sign in</h1>
            <form onSubmit={handleSignInWithEmailAndPassword}>
                <FormInput 
                    label='Email'
                    value={signInValues.email}
                    name='email'
                    type='email'
                    onChange={handleChange}
                    required
                />
                <FormInput 
                    label='Password'
                    value={signInValues.password} 
                    name='password' 
                    type='password' 
                    onChange={handleChange} 
                    required 
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn