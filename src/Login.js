import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { auth } from './Firebase'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('/')

            })
            .catch(error => alert(error.message))

    }
    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))

    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src="/materials/amazon_white.jpg" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='login_signInButton' onClick={signIn}>Sign In</button>
                    <p> By signing-in you agree to Amazon's Conditions of Use &  Privacy Notice.

                    </p>

                </form>

            </div>
            <p className='new_to_amazon'>New to Amazon?</p>
            <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
        </div>
    )
}

export default Login