import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Login.css";
import axios from "axios";

const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [errors, setErrors] = useState("");
const [isActive, setIsActive] = useState(false);
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [success, setSuccess] = useState();

const loginHandler = (e) => {
    e.preventDefault();

};

const regHandler = (e) => {
    axios.post(
            "http://localhost:8000/api/Register",
            JSON.stringify({user: password}),
            setIsActive(true),
            {
                headers: {"Content-Type" : "application/json"},
                withCredentials: true,
            }
        ).then(
            setSuccess(true)
        )

}


return (
<div className="container">
    <h1 className="homeTitle">Welcome to Picture Book</h1>
    <h5>Finally a place to post photos you find on the internet, alongside cheeky descriptions</h5>
        <div className="container2">
            <div className="loginReg">
                <div className="row border">
                    <div className="col-12">
                        <form onSubmit={loginHandler}>
                            <div className="form-group">
                                <h4>Login here</h4>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                    {errors.title ? <p>{errors.email.message}</p> : null}
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                    {errors.title ? <p>{errors.password.message}</p> : null}
                            </div>
                            <Link to="/home"><button type="submit" class="btn btn-outline-light large loginBtn">login</button></Link> 
                        </form>
                    </div>
                </div>
            </div>
                <div className="row border">
                    <div className="col-12">
                        <form onSubmit={regHandler}>
                            <div className="form-group">
                                <h4>Not a member? Register Now!</h4>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                />
                                    {errors.title ? <p>{errors.firstName.message}</p> : null}
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                />
                                    {errors.title ? <p>{errors.lastName.message}</p> : null}
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                    {errors.title ? <p>{errors.email.message}</p> : null}
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                    {errors.title ? <p>{errors.password.message}</p> : null}
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    value={confirmPassword}
                                />
                                    {errors.title ? <p>{errors.confirmPassword.message}</p> : null}
                            </div>
                            <Link to="/home"><button type="submit" class="btn btn-outline-light large registerBtn">Register</button></Link> 
                        </form>
                    </div>
                </div>
            </div>  
</div>
    );
}

export default Login;