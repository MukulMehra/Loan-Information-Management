import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import "./MainLoan.css";
const initial = {
  family: "",
  cast: "",
  religion: "",
  familyError: "",
  castError: "",
  religionError: "",
};
class Details extends Component {
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
    let familyError = "";
    let castError = "";
    let religionError = "";

    if (!this.state.family) {
      familyError = "Field Cannot Be Blank";
    }
    if (!this.state.cast) {
      castError = "Field Cannot Be Blank";
    }
    if (!this.state.religion) {
      religionError = "Field Cannot Be Blank";
    }
    if (familyError || castError || religionError) {
      this.setState({ familyError, castError, religionError });
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
        <Row>
          <Col md={12}>
            <div className="sec2">
              <h1>Get Your Loan Report & Score Now</h1>
              <h3>With Loan analysis and monthly updates</h3>
              <hr></hr>
              <input
                name="family"
                type="text"
                className="det"
                placeholder="Total Member In family"
                value={this.state.family}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.familyError}</div>
              <input
                name="cast"
                type="text"
                className="det"
                placeholder="Enter Your Cast"
                maxLength="10"
                value={this.state.cast}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.castError}</div>
              <input
                name="religion"
                type="text"
                className="det"
                placeholder="Enter Your Religion"
                maxLength="12"
                value={this.state.religion}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.religionError}</div>
              <Button
                type="submit"
                className="Button"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Details;
