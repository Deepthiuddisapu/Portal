import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import Logo from  "../src/port.jpg";
import "./TermsAndConditions.jsx"

function Registration() {
    return (
        <div className = "reg" id = "registration">

            <p id = "alr">
                Already Registered? <Link to="/Login">login</Link> here
            </p>
            <h1 id = "heading">Create your Workfolio Profile</h1>
            
            <div className = "imgcount">
                <img id = "img-img" src = {Logo} alt = "not found" />
            
                <div className = "container">
                    <form action = "sucessfully submitted" >

                    <div className = "divfirstName">
                        <label for = "fname" className = "fname" ><strong>Full Name</strong></label>
                        <input type = "text" id = "fname" class = "fname" placeholder = "  Fill your name" required autofocus></input><br></br>
                    </div>

                    <div className = "divemail" >
                        <label for = "email" class = "email" ><strong>Email</strong></label>
                        <input type = "email" id = "email" placeholder = "   example@gmail.com"  required></input><br></br>
                    </div>

                    <div className = "divpass" >
                        <label for = "pawd" class = "password" ><strong>Password</strong></label>
                        <input type = "password" id = "pawd" placeholder = "   Example@123"  required></input><br></br>
                    </div>

                    <div className = "divtel" >
                        <label for = "mobile" className = "phoneno" ><strong>Phone no</strong></label>
                        <input type = "tel" id = "mobile" placeholder = "   Enter your number" required></input><br></br>
                    </div>

                    <div className = "divdate" >
                        <label for = "dob" className = "dob" ><strong>Date of Birth</strong></label>
                        <input type = "Date" id = "dob" required></input><br></br>
                    </div>

                    <div className="divgender">
                        <label for="gender"><strong>Gender</strong></label>
                        <select id="gender" name="gender" required>
                            <option value="Male">Male</option>
                            <option value="female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="divnationality">
                        <label for="nationality"><strong>Nationality</strong></label><br />
                        <select id="nationality" name="nationality" required>
                            <option value="Indian">Indian</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                        <br></br>
                        <p id="tac">
                    <label>
                        <input type="checkbox" name="terms" required />
                        <p id = "agree">
                            I agree to the <a href="/TermsAndConditions">Terms and Conditions</a></p> 
                        </label>
                        </p>
                
                        <button type = "submit" class = "finalbutton" >Register</button>

                    </form>
                </div>

            </div>

        </div>
    );
}

export default Registration;
