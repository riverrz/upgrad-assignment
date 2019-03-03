import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

import "./AddContact.css";

class AddContact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: ""
    };
  }
  onChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };
  onChangePhone = event => {
    this.setState({
      phone: event.target.value
    });
  };
  addContact = () => {
    this.props.addContact({ name: this.state.name, phone: this.state.phone });
  };
  render() {
    return (
      <Fragment>
        <Header>Add a contact</Header>
        <div className="AddContact__container">
          <Link to="/" className="form__link">Go Back</Link>
          <form className="AddContact__form">
            <div className="form__control">
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" onChange={this.onChangeName} />
            </div>
            <div className="form__control">
              <label htmlFor="phone">Phone: </label>
              <input type="text" id="phone" onChange={this.onChangePhone} />
            </div>
            <hr/>
            <h3>Subscriber to be added:</h3>
            <div className="form__display">
              Name: <span>{this.state.name}</span>
            </div>
            <div className="form__display">
              Phone: <span>{this.state.phone}</span>
            </div>
            <Link to="/" onClick={this.addContact} className="form__add">
              Add
            </Link>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default AddContact;
