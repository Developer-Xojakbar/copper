/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';

const Form = () => {
    const [{ fullName, email }, setForm] = useState({}); 
    
    const handleFormChange = (value , newState) => {
        setForm(prevState => ({ ...prevState, [newState]: value }));
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        console.log(fullName, email);
    }

    return (
        <div className="container form-container">
            <div className="form">
                <div className="form__context">
                    <h1 className="form__context-h">Finally... a CRM<br/>for G Suite.</h1>
                    <p className="form__context-subtitle">Manage all your contacts, deals, emails, files, and more in one place.</p>
                    <form className="form__context__sign" onSubmit={handleSubmitClick}>
                        <a className="form__context__sign-google" href="#">
                            <img className="form__context__sign-google-icon" src={require("../images/google icon.svg")} alt="google" />
                            <span className="form__context__sign-google-text">Continue with Google</span>
                        </a>
                        <p className="form__context__sign-subtext">or use your email to sign up:</p>
                        <div className="form__context__sign-inputs">
                            <label className="form__context__sign-inputs-label" htmlFor="user[full_name]">Full Name</label>
                            <input
                                className="form__context__sign-inputs-input"
                                onChange={(e) => handleFormChange(e.target.value , "fullName")}
                                type="text"
                                size="30"
                                placeholder="Jane Doe"
                                id="user[full_name]"
                                required
                            />
                        </div>
                        <div className="form__context__sign-inputs">
                            <label className="form__context__sign-inputs-label" htmlFor="user[email]">Work Email</label>
                            <input
                                className="form__context__sign-inputs-input"
                                onChange={(e) => handleFormChange(e.target.value , "email")}
                                type="email"
                                size="30"
                                placeholder="janedoe@example.com"
                                id="user[email]"
                                required
                            />
                        </div>
                        <button className="form__context__sign-submit">Try Free</button>
                    </form>
                    <p className="form__context__disclaimer">By signing up, I agree to Copper’s <a className="form__context__disclaimer-privacy" href="#">privacy policy</a> &amp; <a className="form__context__disclaimer-terms" href="#">terms of service.</a></p>
                </div>
                <div className="form__image">
                    <img src={require("../images/Home_variant_B_HERO.png")} alt="hero_woman" />
                </div>
            </div>
        </div>
    );
};

export default Form;