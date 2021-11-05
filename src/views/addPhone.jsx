import React from "react";
import Nav from "../components/nav";
import NewPhoneForm from "../components/newPhoneForm";

function AddPhone() {
    return (
        <React.Fragment>
            <Nav></Nav>
            <NewPhoneForm></NewPhoneForm>
        </React.Fragment>
     );
}

export default AddPhone;