import React, { Component } from "react";
import Contacts from "../Components/Contacts/Contacts";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Header>Phone Directory</Header>
        <Link to="/add">Add</Link>
        <Contacts
          list={this.props.contacts}
          onDelete={this.props.deleteContact}
        />
      </div>
    );
  }
}

export default Main;
