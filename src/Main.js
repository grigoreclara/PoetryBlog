import React, { Component } from "react";
import { Route, NavLink, HashRouter, useHistory } from "react-router-dom";
import Home from "./Home";
import ToatePoeziile from "./ToatePoeziile";
import Contact from "./Contact";
import DespreNoi from "./DespreNoi";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import TextField from "@material-ui/core/TextField";
import ReactDOM from "react-dom";
import { render } from "react-dom";

class Main extends Component {
  routeChange = () => {
    window.location.href = "/";
  };

  constructor(props) {
    super(props);
    this.state = {
      LogIn: true,
      Register: false,
      Main: false,
      nume: "",
      prenume: "",
      email: "",
      username: "",
      password: "",
      users:
        JSON.parse(window.localStorage.getItem("Users")) != null
          ? JSON.parse(window.localStorage.getItem("Users"))
          : [],
      logInUsername: "",
      logInPassword: ""
    };
  }

  _handleNume = e => {
    this.setState({
      nume: e.target.value
    });
  };
  _handlePrenume = f => {
    this.setState({
      prenume: f.target.value
    });
  };
  _handleEmail = g => {
    this.setState({
      email: g.target.value
    });
  };
  _handleUsername = h => {
    this.setState({
      username: h.target.value
    });
  };
  _handlePassword = i => {
    this.setState({
      password: i.target.value
    });
  };
  _handleLogInUsername = j => {
    this.setState({
      logInUsername: j.target.value
    });
  };
  _handleLogInPassword = k => {
    this.setState({
      logInPassword: k.target.value
    });
  };
  render() {
    return (
      <Box>
        {this.state.Main ? (
          console.log(" ")
        ) : (
          <Box>
            <h1>Bine ai venit pe Blogul poeziei tale!</h1>
          </Box>
        )}
        {this.state.LogIn ? (
          <div>
            <TextField
              id="filled-basic"
              label="Username"
              variant="filled"
              className="Username"
              onChange={this._handleLogInUsername}
            />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              className="Password"
              onChange={this._handleLogInPassword}
            />
            <Button
              variant="contained"
              color="primary"
              className="LogIn"
              onClick={() => {
                var users = JSON.parse(window.localStorage.getItem("Users"));
                for (var user of users) {
                  if (this.state.logInUsername === user.username) {
                    if (this.state.logInPassword === user.password) {
                      this.setState({
                        LogIn: false,
                        Register: false,
                        Main: true
                      });
                    }
                  }
                }
              }}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="Register"
              onClick={() => this.setState({ LogIn: false, Register: true })}
            >
              Register
            </Button>
          </div>
        ) : (
          console.log(" ")
        )}
        {this.state.Register ? (
          <div>
            <TextField
              id="filled-basic"
              label="Nume"
              variant="filled"
              className="Nume"
              onChange={this._handleNume}
            />
            <TextField
              id="filled-basic"
              label="Prenume"
              variant="filled"
              className="Prenume"
              onChange={this._handlePrenume}
            />
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              className="Email"
              onChange={this._handleEmail}
            />
            <TextField
              id="filled-basic"
              label="Username"
              variant="filled"
              className="UsernameRegister"
              onChange={this._handleUsername}
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              className="passwordRegister"
              onChange={this._handlePassword}
            />
            <Button
              variant="contained"
              color="primary"
              className="RegisterRegister"
              onClick={() => {
                var user = {
                  nume: this.state.nume,
                  prenume: this.state.prenume,
                  email: this.state.email,
                  username: this.state.username,
                  password: this.state.password
                };
                try {
                  this.setState({ users: this.state.users.push(user) });
                } catch {
                  console.log("Something went wrong!");
                }
                window.localStorage.setItem(
                  "Users",
                  JSON.stringify(this.state.users)
                );
                this.setState({ LogIn: true, Register: false });
              }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="LogInRegister"
              onClick={() => this.setState({ LogIn: true, Register: false })}
            >
              Back to Log In
            </Button>
          </div>
        ) : (
          console.log(" ")
        )}
        {this.state.Main ? (
          <HashRouter>
            <Box>
              <Box className="title">
                <h1 className="test">Blogul poeziei tale</h1>
              </Box>
              <Box className="menu">
                <MenuList className="nav" color="primary">
                  <MenuItem
                    onClick={() => {
                      window.location.href = "/#/";
                    }}
                  >
                    Acasa
                  </MenuItem>
                  <MenuItem
                    onClick={() => (window.location.href = "#/ToatePoeziile")}
                  >
                    Toate Poeziile
                  </MenuItem>
                  <MenuItem
                    onClick={() => (window.location.href = "#/DespreNoi")}
                  >
                    Despre noi
                  </MenuItem>
                  <MenuItem
                    onClick={() => (window.location.href = "#/Contact")}
                  >
                    Contact
                  </MenuItem>
                </MenuList>
              </Box>
              <Box className="content">
                <Route exact path="/" component={Home} />
                <Route path="/ToatePoeziile" component={ToatePoeziile} />
                <Route path="/DespreNoi" component={DespreNoi} />
                <Route path="/Contact" component={Contact} />
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => (window.location.href = "/")}
                className="LogOut"
              >
                Log Out
              </Button>
            </Box>
          </HashRouter>
        ) : (
          console.log(" ")
        )}
      </Box>
    );
  }
}

export default Main;


