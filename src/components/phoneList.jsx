import React, { useState } from 'react';
import Phone from './phone';
import usePhones from '../hooks/getPhones.jsx';
import { HashLoader } from 'react-spinners';
import './styles/phone.css'
import { useEffect } from 'react/cjs/react.development';


function PhoneList({ name = "" }) {
    const css = `
    display: block;
    margin-top: 30rem;
    margin-bottom: 1.5rem;

    @media (max-height: 800px) {

        margin-top: 10rem;
    }
    `;
    const [loading,updateLoading] = useState(true); //If true means it is loading, if false it already loaded

    useEffect( () => {
          setTimeout(() => updateLoading(false), 1400);
        },[]);
    
    const phones = usePhones(name) //Gets the Phone Catalog into the phones[] array

    return (
    <React.Fragment>
            {loading == true ? (
                <React.Fragment>
                    <HashLoader loading size={100} css={ css }></HashLoader>
                    <h5 id="loading">Loading...</h5>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {
                        //if phones.length > 0 do phones.map ...
                        (phones.length > 0) ? (
                            phones.map( object =>
                                //Create Phone component
                                <Phone
                                    key={object.name}     
                                    name={object.name} 
                                    manufacturer={object.manufacturer} 
                                    description={object.description} 
                                    color={object.color} 
                                    price={object.price} 
                                    imageFileName={object.imageFileName} 
                                    screen={object.screen} 
                                    processor={object.processor} 
                                    ram={object.ram}
                                ></Phone>
                            )
                        ) : <React.Fragment></React.Fragment> //else return react.fragment
                    }
    </React.Fragment>
            )
        }
    </React.Fragment>
    );
}

export default PhoneList;