import "./Contactform.css";

import React from "react";

const Contactform = () => {
  return (
    <div class="Form">
      <form>
        <h1> Get In Touch </h1>
        <label> Name: </label>
        <input type="name" placeholder="Enter your fullname" />

        <label> Contact.No: </label>
        <input type="number" placeholder="Mobile Number" />

        <label> E-Mail: </label>
        <input type="email" placeholder="xyz@gmail.com" />

        <label> Subject: </label>
        <input type="text" placeholder="Enter subject here" />

        <label> Message: </label>
        <textarea rows={6} placeholder="Type your message here" />

        <button className="btn"> Submit </button>
      </form>
    </div>
  );
};

export default Contactform;
