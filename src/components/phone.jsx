import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { myAPI } from '..';
import './styles/phone.css'

function Phone ( {name, manufacturer = "unkwon", description = "unkwon", color = "unkwon", price = "unkwon", imageFileName, screen = "unkwon", processor = "unkwon", ram = "unkwon"} ) {
    
    const [details, updateDetails] = useState(false); //If false, it doesn't display phone details, and viceversa
    const [deletePhone,updateDeletePhone] = useState(false); //If true, it will start the delete process
    const [deleted,updateDeleted] = useState(""); //When the phone is deleted, deleted variable will change to hidden to set the css class hidden
    const [location,changeLocation] = useLocation(); //
    let showDetails = "phone-details hidden"; //This will determine the value of the classname
    let arrowDirection = "fas fa-angle-down";

    //This hook will be triggered when the component renders, and when deletePhone is changed
    useEffect(() => {
        if (deletePhone == true) {
            fetch(myAPI + "/delete=" + name,{ "method": "delete" }) //API URL
                .then( () => { updateDeleted("hidden")})
            .catch(error => console.log('error',error));
        }
    }
    ,[deletePhone])

   if (details === true){
       showDetails = "phone-details"
       arrowDirection = "fas fa-angle-up"
    } else {
        showDetails = "phone-details hidden";
        arrowDirection = "fas fa-angle-down"
    }

    return (
        <div className={`phone ${deleted}`}>
            <div className="phone-main">
                <div id="phone-picture">
                    <img src={imageFileName} alt='phone'></img>
                </div>
                <h3>{name}</h3>
                <i className={arrowDirection} onClick={ () => {updateDetails(!details)} }></i>
            </div>

            <div className="phone-edit-delete-container">
                <div onClick={() => { changeLocation(`/editPhone=${name}`) }} >
                    <i className="fas fa-pencil-alt"></i>
                    <h4>Edit</h4>
                </div>
                <div onClick={() => { updateDeletePhone(true) }} >
                    <i className="fas fa-trash-alt"></i>
                    <h4>Delete</h4>
                </div>
            </div>
            
            <div className={showDetails}> {/* phone-details || phone-details hidden*/}
                <ul>
                    <li>Manufacturer: {manufacturer}</li>
                    <li>Description: {description}</li>
                    <li>Color: {color}</li>
                    <li>Price: {price} €</li>
                    <li>Screen: {screen}</li>
                    <li>Processor: {processor}</li>
                    <li>Ram: {ram} GB</li>
                </ul>
            </div>

        </div>
    );
}

export default Phone;
