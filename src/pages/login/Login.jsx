import React from 'react';
import { useRef, useState } from 'react';
import './login.css';
import {useHistory} from "react-router-dom";

export default function Login({setUser}) {
    const userName = useRef("");
    const password = useRef("");
    const [error, setError] = useState("");
    const history = useHistory();
    
    const handleSubmit = (e) =>{
        
        e.preventDefault();
        if(userName.current.value === "admin" && password.current.value === "admin$6&"){
            setUser({userName: userName, password: password});
            history.push("/");
        }else{
            setError("invalid username or password!");
        }
    }

    return (
        <div className="login" onSubmit={handleSubmit}>
            <div className="login-wrapper">
                <h2>Weather Forecast App</h2>
                <hr/>
                {error && <div className="err">{error}</div>}
                <form >
                    <label htmlFor="user-name">User Name</label>
                    <input type="text" id="user-name" ref={userName}  onChange={()=> setError(null)} placeholder="Enter Your Name" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={password} onChange={()=> setError(null)} placeholder="Enter Your Password" />
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </div>
    )
}
