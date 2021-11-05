import React from 'react';
import {myAPI} from "../index.js"
import { Link } from 'wouter';
import './styles/newPhoneForm.css'
import usePhones from '../hooks/getPhones.jsx';

function EditPhoneForm({ phone }) {
    
    const phones = usePhones(phone) //Gets the Phone Catalog into the phones[] array

    return (  
        <React.Fragment>
            {phones.length > 0 &&
                <div className="form-container" id="form-container" >
                <form className="newPhoneForm" action={ `${myAPI}/editPhone` } method="POST">
                        <div className="label-input-container">
                            <label htmlFor="name">Name:</label>
                            <input hidden type="text" name="name" value={phones[0].name}></input>
                            <input type="text" name="newName" defaultValue={phones[0].name} required autoFocus></input>
                        </div>
                    
                        <div className="label-input-container">
                            <label htmlFor="manufacturer">Manufacturer:</label>
                            <input type="text" name="manufacturer" defaultValue={phones[0].manufacturer}></input>
                        </div>

                        <div className="label-input-container">
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" id="description" defaultValue={phones[0].description}></input>
                        </div>

                        <div className="label-input-container">
                            <label htmlFor="color">Color:</label>
                            <input type="text" name="color" id="color" defaultValue={phones[0].color}></input>
                        </div>

                        <div className="label-input-container">
                            <label htmlFor="price">Price:</label>
                            <input type="number" name="price" id="price" min="0" defaultValue={phones[0].price}></input>
                        </div>

                        <div className="label-input-container">
                            <label htmlFor="imageFileName">Image URL:</label>
                            <input type="text" name="imageFileName" id="imageFileName" defaultValue={phones[0].imageFileName}></input>
                        </div>

                        <div className="label-input-container">
                            <label htmlFor="screen">Screen:</label>
                            <input type="text" name="screen" id="screen" defaultValue={phones[0].screen}></input>
                        </div>

                        <div className="label-input-container">
                            <label htmlFor="processor">Processor:</label>
                            <input type="text" name="processor" id="processor" defaultValue={phones[0].processor}></input>
                        </div>

                        <div className="label-input-container">
                            <label htmlFor="ram">Ram:</label>
                            <input type="number" name="ram" id="ram" min="0" defaultValue={phones[0].ram}></input>
                        </div>

                        <div className="button-container">
                            <button type="submit">Edit Phone</button>
                        
                            <Link to="/">
                                <button id="back-button">Go Back</button>
                            </Link>
                        </div>
                    </form>
                </div>
            }
        </React.Fragment>
    );
}

export default EditPhoneForm ;
