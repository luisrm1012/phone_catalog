import React from "react";
import { Route } from "wouter";
import './app.css'

import Phones from "./views/phones";
import AddPhone from "./views/addPhone";
import EditPhone from "./views/editPhone";
import SearchPhones from "./views/searchPhones";
import './index.css'


function App() {

    return ( 
        <div className="app-content">
            {/* Route to the form to add a new Phone */}
            
            {/* Route to see the Phone Catalog*/}
            <Route
            component={Phones}
            path="/"
            ></Route>

            <Route
            component={SearchPhones}
            path="/phone=:searchedPhone"
            ></Route>

            <Route
            component={SearchPhones}
            path="/phone="
            ></Route>

            <Route
            component={AddPhone}
            path="/addPhone"
            ></Route>

            <Route
            component={EditPhone}
            path="/editPhone=:phone"
            ></Route>
            
           

        </div>
     );
}

export default App;