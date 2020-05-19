import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainLoan.css";

const initial = {
  name: "",
  email: "",
  number: "",
  address: "",
  nameError: "",
  emailError: "",
  numberError: "",
  addressError: "",
};
class App extends Component {
  state = initial;
  handlechange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let numberError = "";
    let addressError = "";

    if (!this.state.name) {
      nameError = "Name Cannot Be Blank";
    }
    if (!this.state.email.includes("@")) {
      emailError = "invalid Email";
    }
    if (!this.state.number) {
      numberError = "Number Cannot Be Blank";
    }
    if (!this.state.address) {
      addressError = "Address Cannot Be Blank";
    }
    if (emailError || nameError || numberError || addressError) {
      this.setState({ emailError, nameError, numberError, addressError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initial);
    }
  };

  render() {
    return (
      <Container fluid className="head">
        <Row className="col">
            <div className="sec">
              <h1>Get Your Loan Report & Score Now</h1>
              <h3>With Loan analysis and monthly updates</h3>
              <hr></hr>
              <Dropdown className="drop">
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  className="drop2"
                >
                  <span className="employ">Employment Type</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <span className="employ">Salaried</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <span className="employ">Self Employed</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <span className="employ">Unemployed</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <br></br>
              <input
                type="text"
                name="name"
                className="det"
                placeholder="Enter Your Name"
                value={this.state.name}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.nameError}</div>
              <input
                type="text"
                name="email"
                className="det"
                placeholder="Enter Your Email"
                value={this.state.email}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.emailError}</div>
              <b className="optionhead">Gender :</b>
              <span className="genderbtn">
                <input
                  type="radio"
                  name="gender"
                  id="gender1"
                  checked="true"
                  className="gender"
                ></input>
                <label className="option" for="gender1">
                  <span>Male</span>
                </label>
              </span>
              <span className="genderbtn2">
                <input type="radio" name="gender" className="gender"></input>
                <span className="option">Female</span>
              </span>
              <br></br>
              <input
                type="text"
                name="number"
                className="det"
                placeholder="Enter Your Number"
                value={this.state.number}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.numberError}</div>
              <input
                type="text"
                name="address"
                className="det"
                placeholder="Enter Your Address"
                value={this.state.address}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.addressError}</div>
              <input
                type="text"
                placeholder="Create Password"
                className="det"
              ></input>
              <br></br>
              <input
                type="text"
                className="det"
                placeholder="Confirm Password"
              ></input>
              <br></br>
              <Link to="/loan">
                <Button
                  type="submit"
                  className="Button"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Link>
            </div>
        </Row>
      </Container>
    );
  }
}

export default App;
