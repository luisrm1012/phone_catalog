import React from 'react';
import {myAPI} from "../index.js"
import { Link } from 'wouter';
import './styles/newPhoneForm.css'

function NewPhoneForm() {

    return (  
        <React.Fragment>
            <div className="form-container" id="form-container">
                <form className="newPhoneForm" action={ `${myAPI}/addPhone` } method="POST">
                    <div className="label-input-container">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name"  required autoFocus></input>
                    </div>
                    
                    <div className="label-input-container">
                        <label htmlFor="manufacturer">Manufacturer:</label>
                        <input type="text" name="manufacturer" ></input>
                    </div>

                    <div className="label-input-container">
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description" ></input>
                    </div>

                    <div className="label-input-container">
                        <label htmlFor="color">Color:</label>
                        <input type="text" name="color" id="color" ></input>
                    </div>

                    <div className="label-input-container">
                        <label htmlFor="price">Price:</label>
                        <input type="number" name="price" id="price" min="0"></input>
                    </div>

                    <div className="label-input-container">
                        <label htmlFor="imageFileName">Image URL:</label>
                        <input type="text" name="imageFileName" id="imageFileName"></input>
                    </div>

                    <div className="label-input-container">
                        <label htmlFor="screen">Screen:</label>
                        <input type="text" name="screen" id="screen"></input>
                    </div>

                    <div className="label-input-container">
                        <label htmlFor="processor">Processor:</label>
                        <input type="text" name="processor" id="processor" ></input>
                    </div>

                    <div className="label-input-container">
                        <label htmlFor="ram">Ram:</label>
                        <input type="number" name="ram" id="ram" min="0" ></input>
                    </div>

                    <div className="button-container">
                        <button type="submit">Add Phone</button>
                        
                        <Link to="/">
                            <button id="back-button">Go Back</button>
                        </Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default NewPhoneForm;
