import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import {Link} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handlelogin = () =>{
        navigate("../")
    }

    return (
        <div>

            <div class = "first">
                <button onClick = {handlelogin} >Back to Home</button>
            </div>

            <div class = "page">
            </div>

            <div className = "login">
                <h1 id ="lg">Login</h1>
            </div>

            <div className = "divusername" >
                <label for ="username" className ="username" id = "user"><strong>UserName</strong></label>
                <input type ="text" id ="username" class ="username" placeholder ="User name" required autofocus ></input><br></br>
            </div>

            <div className = "passindiv" >
                        <label for = "thisispass" class = "password" id = "passw" ><strong>Password</strong></label>
                        <input type = "password" id = "thisispass" placeholder = "Password" required></input><br></br>
            </div>
<br></br>
            <p id = "frgt" >forgot password?</p>

            <div className = "dont" >
                <p id = "dha">
                    Don't have an account <Link to="/Registration">Register</Link> here
                </p>
            </div>

            <div className = "btn" >
                <button id = "lgn">Login</button>
            </div>

        </div>
    );
}

export default Login;