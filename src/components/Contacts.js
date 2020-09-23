import React from "react";
const { default: ContactForm } = require("./ContactForm")

const Contacts = () => {
    return ( 
        <>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Contact Resgister</h1>
            </div>
        </div>   
        <div className="row">
            <div className="col-md-5">
                <ContactForm />
            </div>
            <div className="col-md-7">
                <div>List of Contacts</div>
            </div>        
        </div>
        </>
     );
}
 
export default Contacts;