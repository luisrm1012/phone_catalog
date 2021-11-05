import React from "react";

import Nav from "../components/nav";
import PhoneList   from "../components/phoneList";

function SearchPhones({ params = "" }) {
    
    let { searchedPhone } = params;

    return (

        <React.Fragment>
            <Nav></Nav>
            {searchedPhone != undefined && //If searchedPhone isnot "" (empty) 
                <PhoneList name={searchedPhone}></PhoneList>
            }
        </React.Fragment>

  );

}

export default SearchPhones;