import React, { useState } from 'react'
import "./Forms.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [isText, setIsText] = useState(false);
    const handleShow = () => {
        setIsText(!isText);
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            axios
                .post("http://localhost:8080/api/login", user)
                .then((res) => {
                    window.localStorage.setItem("LoggedUser",JSON.stringify(res.data.user));
                })
                .catch(err => console.error(err));
        }catch (err) {console.log(err)}

        navigate("/info");
  }

    return (
        <section className='container'>
            <div className='form login'>
                <div className='form-content'>
                    <header>Login</header>
                    <form onSubmit={handleSubmit}>
                        <div className='field input-field'>
                            <input type="email" name='email' placeholder='Email' className='input' onChange={handleChange} />
                        </div>
                        <div className='field input-field'>
                            <input type={isText ? "text" : "password"} name="password" placeholder='Password' className='input' onChange={handleChange} />
                            <i onClick={handleShow} class={isText ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                        </div>
                        <div className='form-link'>
                            <a href="#" className='forget-pass'>Forget Password</a>
                        </div>
                        <div className='field button-field'>
                            <button type='submit'>Login</button>
                        </div>
                    </form>
                    <div className='form-link'>
                        <span>Don't have an account? <a href='/register' className='link signup-link'>Signup</a></span>
                    </div>
                </div>

                <div className='line'></div>

                <div className='media-options'>
                    <a href='#' className='field facebook'>
                        <img src="images/facebook.png" className='facebook-img' alt="" />
                        <span>Login With Facebook</span>
                    </a>
                </div>
                <div className='media-options'>
                    <a href='#' className='field google'>
                        <img src="images/google.png" className='google-img' alt="" />
                        <span>Login With Google</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Login