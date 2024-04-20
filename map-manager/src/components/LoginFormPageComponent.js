import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request, setAuthHeader } from '../helpers/axios_helper.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/homepage.css';

function LoginFormPageComponent() { 
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [signUpMode, setSignUpMode] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleFormToggle = () => {
        setSignUpMode(!signUpMode);
        setError(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signUpMode ? register() : login();
    };

    const login = () => {
        request("POST", "/login", formData)
            .then(response => {
                setAuthHeader(response.data.token);
                setError(null);
                navigate('/home'); // Navigate after successful login
            })
            .catch(error => {
                setAuthHeader(null);
                setError("Invalid username or password");
            });
    };

    const register = () => {
        if (!formData.username || !formData.email || !formData.password) {
            setError("Please fill in all fields");
            return;
        }
        request("POST", "/register", formData)
            .then(response => {
                setAuthHeader(response.data.token);
                setError(null);
                navigate('/home');
            })
            .catch(error => {
                setAuthHeader(null);
                setError("Registration failed");
            });
    };


    return (
        <div className="body-register">
            <div className="App">
                <header className="App-header">
                    <div className={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
                        <div className="signin-signup">
                            <form className={`sign-in-form ${signUpMode ? 'hidden' : ''}`} onSubmit={handleSubmit}>
                                <h2 className="title">Sign in</h2>
                                <div className="error">{error}</div>
                                <div className="input-field">
                                <FontAwesomeIcon icon={faUser} className="icon-user" />
                                    <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                                </div>
                                <div className="input-field">
                                <FontAwesomeIcon icon={faLock} className="icon-lock"  />
                                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn">Sign in</button>
                                <p className="account-text">Don't have an account? <button type="button" onClick={handleFormToggle}>Sign up</button></p>
                            </form>
                            <form className={`sign-up-form ${signUpMode ? 'hidden' : ''}`} onSubmit={handleSubmit}>
                                <h2 className="title">Sign up</h2>
                                <div className="error">{error}</div>
                                <div className="input-field">
                                <FontAwesomeIcon icon={faUser} className="icon-user" />
                                    <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                                </div>
                                <div className="input-field">
                                <FontAwesomeIcon icon={faEnvelope} className="icon-envolpe" />
                                    <input type="text" name="email" placeholder="Email" onChange={handleChange} />
                                </div>
                                <div className="input-field">
                                <FontAwesomeIcon icon={faLock} className="icon-lock"  />
                                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn">Sign up</button>
                                <p className="account-text">Already have an account? <button type="button" onClick={handleFormToggle}>Sign in</button></p>
                            </form>
                        </div>
                        <div className="panels-container">
                            <div className="panel left-panel">
                                <div className="content">
                                    <h3>Already a Member?</h3>
                                    <p>Our interests, your people, your space. Sign in to continue the adventure.</p>
                                    <button className="btn" onClick={handleFormToggle}>Sign in</button>
                                </div>
                                <img src="signin.svg" alt="" className="image" />
                            </div>
                            <div className="panel right-panel">
                                <div className="content">
                                    <h3>Are you new to the Community App ?</h3>
                                    <p>Begin your journey in a world of communities - where every hobby finds its home.</p>
                                    <button className="btn" onClick={handleFormToggle}>Sign up</button>
                                </div>
                                <img src="signup.svg" alt="" className="image" />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            </div>
        );
    }

export default LoginFormPageComponent;
