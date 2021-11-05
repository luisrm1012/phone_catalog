import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import './styles/nav.css'

function Nav() {

    const [phoneToFind,updatePhoneToFind] = useState(""); //stores the value im typing in the form input

    const [location,changeLocation] = useLocation();
    
    const handleChange = (e) => { //This function will update the value of the input as we type
        updatePhoneToFind(e.target.value);
    }

    const handleSubmit = (e) => { //This funtcion will determine what the button of the form will do
        e.preventDefault()
        changeLocation(`/phone=${phoneToFind}`)
    }

    return (  
        <React.Fragment>
            <nav>
            <Link to="/">
                <h1>Phone Catalog</h1>
            </Link>
            <div id="search-container">
                <form onSubmit={handleSubmit}>
                    <input id="search-input" type="text"  onChange={handleChange} name="phone" placeholder="search phone by name..." ></input>
                    <button id="search-button">Search</button>
                </form>
            </div>
            <Link to="/addPhone">
                <button>+ Add Phone</button>
            </Link>
            </nav>
        </React.Fragment>
    );
}

export default Nav;