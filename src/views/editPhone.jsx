import React from "react";
import Nav from "../components/nav";
import EditPhoneForm from "../components/editPhoneForm ";

function EditPhone({ params }) {

    let { phone } = params

    return (
        <React.Fragment>
            <Nav></Nav>
            <EditPhoneForm phone={phone}></EditPhoneForm>
        </React.Fragment>
     );
}

export default EditPhone;