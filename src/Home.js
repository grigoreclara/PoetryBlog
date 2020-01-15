import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

class Home extends Component {
  render() {
    return (
      <Box class="cutie">
        <h2>Blog de poezie</h2>
        <p>
          Bine ati venit pe blogul nostru de poezie. Aici puteti gasi un poem
          sau o poezie pentru orice stare. Va rugam sa alegeti starea care va
          reprezinta cel mai bine ca sa va putem arata poeziile potrivite pentru
          dumneavoastra.
        </p>
        <Box class="section">
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Fericit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Trist
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Ambitios
          </Button>
        </Box>
        <Box class="section">
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Dezamagit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Descurajat
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Coplesit
          </Button>
        </Box>
        <Box class="section">
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Melancolic
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Indurerat
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Chinuit
          </Button>
        </Box>
        <Box class="section">
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Abatut
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Obosit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Necajit
          </Button>
        </Box>
        <Box class="section">
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Posac
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Jalnic
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Intunecat
          </Button>
        </Box>
        <Box class="section">
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Disperat
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Epuizat
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Grav
          </Button>
        </Box>
        <Box class="section">
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Bosumflat
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Indolit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Obidit
          </Button>
        </Box>
        <Box class="section">
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Amarat
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Prost dispus
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Daramat
          </Button>
        </Box>
        <Box class="section">
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Cu o inima franta
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Ganduri negre
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="teRog"
            onClick={() => (window.location.href = "#/ToatePoeziile")}
          >
            Morocanos
          </Button>
        </Box>
      </Box>
    );
  }
}

export default Home;
