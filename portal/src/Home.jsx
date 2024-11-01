import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
    const navigate = useNavigate();

    const handlelogin = () =>{
        navigate("/Login");
    }

    const handleregister = () =>{
        navigate("/Registration");
    }

    const handleAboutus = () =>{
        navigate("/Aboutus");
    }

    const handleContactus = () =>{
        navigate("/Contactus");
    }

    const handleterms = () =>{
        navigate("/TermsAndConditions");
    }

    return (

    <div>

        <div class = "imgonly">
            {/* <img src = {Logo} alt = "logo"/> */}
            <img src = "https://cdn.prod.website-files.com/65efe5c22fe5c01bbd337a5f/65efef4c8c9490f23afeb120_60a0dbb1754e6b34267a8157_Icon%20File.svg" alt = "imagenotfound" ></img>
            <h2 id="workfolio">Workfolio</h2> 
        </div>

        <div class="btnlog">
            <button id = "hlog" onClick = {handlelogin} >Sign in</button>
        </div>
        
        <div class="btnreg">
            <button id = "hreg" onClick = {handleregister} >Sign Up</button>
        </div>

        <div class = "quotecontent">
            <h1 id = "quote">Grow, adapt, and evolve in your career</h1>
        </div>

        <div class= "rightcontent">
            <p id = "right">Unlock your full potential and take charge of your career.
                            Advance in your current role or explore new opportunities.
                            Develop valuable skills to stay ahead in the industry.
                            Network with professionals and build meaningful connections.
                            Achieve your career goals with our expert guidance.Explore new career paths and find your passion.
                            Identify transferable skills and highlight your strengths.
                            Update your resume and online profiles.
                            Practice interview skills and confidence.
                            Land your dream job with our job search strategies.</p>
        </div>

        <div class="getstarted">
            <button id = "get" onClick = {handlelogin} ><strong>Get Started</strong></button>
        </div>
        
        <div className="footer">
    <div className="copyright">
        <p>&copy;2024 workfolio. All Rights Reserved</p>
        
        <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer" id = "twitter">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M23.953 4.57c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
        </a>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" id="fb">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#3b5998">
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675v-21.35C24 .6 23.4 0 22.675 0zM12 2.063c2.693 0 3.014 0 4.092.058 1.084.058 1.748.23 2.152.464.493.236.755.553.755 1.055 0 .786-.005 1.547-.005 2.338H12v2.947h3.002c-.006 1.312-.008 2.625-.008 3.938H12v8.055H9.006V10.403H7.1V7.456h1.906V5.4c0-1.882.928-4.118 4.01-4.118z"></path>
        </svg>
        </a>

         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" id = "linked">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M22.225 0h-20.451C.997 0 0 .997 0 2.225v19.551C0 23.003.997 24 2.225 24h20.451C23.003 24 24 23.003 24 22.225v-19.55C24 .997 23.003 0 22.225 0zM7.057 20.452H3.577V9.001h3.48v11.451zm-1.74-13.1c-1.114 0-2.015-.911-2.015-2.03 0-1.13.901-2.03 2.015-2.03 1.114 0 2.015.9 2.015 2.03 0 1.119-.901 2.03-2.015 2.03zm16.115 13.1h-3.48v-5.724c0-1.36-.025-3.111-1.895-3.111-1.895 0-2.187 1.482-2.187 3.015v5.82h-3.48V9.001h3.34v1.553h.048c.465-.884 1.6-1.811 3.298-1.811 3.526 0 4.173 2.315 4.173 5.312v6.398z"></path>
            </svg>
        </a>
    </div>

            <div className = "aboutus">
                <button onClick = {handleAboutus}  id = "btnabout" >About us</button>
            </div>

            <div className = "contactus">
                <button onClick = {handleContactus} id = "btncontact" >Contact us</button>
            </div>

            <div className = "terms" >
                <button onClick = {handleterms} id = "btnterms" > Terms </button>
            </div>

</div>



        </div>
    );
}

export default Home;