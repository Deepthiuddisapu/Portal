import React from "react";
import Home from "./Home";
import Login from "./Login";
import TermsAndConditions from "./TermsAndConditions";
import Registration from "./Registration";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="TermsAndConditions" element={<TermsAndConditions />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;