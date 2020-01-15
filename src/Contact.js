import React, { Component } from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import Box from "@material-ui/core/Box";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Vreti sa ne contactati?</h1>
        <h2>Ne puteti suna, lasa un email sau vizita la adresa de mai jos.</h2>
        <Box className="phone">
          <PhoneIcon style={{ fontSize: 40 }} />
          <p>0723389065</p>
        </Box>
        <Box className="email">
          <EmailIcon style={{ fontSize: 40 }} />
          <p>clara.alexxia@yahoo.com</p>
        </Box>
        <Box className="home">
          <HomeIcon style={{ fontSize: 40 }} />
          <p>Facultate de Matematica si Informatica</p>
        </Box>
      </div>
    );
  }
}

export default Contact;
