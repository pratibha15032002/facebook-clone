import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';


function Login() {

    return (
        <div>
            <div className="Login">
                <div className="facebook">
                    <div className="facebooktext">
                        Facebook
                    </div>
                    <div className="title">
                        Application Used for Finding and connecting with Friends
                    </div>
                </div>
                <div className="LoginContainer">
                    <div className="LoginDetails">
                        <input type='text' name='email' placeholder='Email Addresh or Phone Number'/>
                        <br/>
                        <input type='password' placeholder='password' maxLength={'10'}/>
                        <br/>
                        <Link to ='/Home' className="btn"><strong>Login</strong> </Link>
                    </div>
                    <div className="forgot">
                        <a href="forget">Forgot Password?</a>
                        <br/>
                        <Link to='/Sign' className="btns" style={{color:"fffff"}}>
                            Create New Account</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;
