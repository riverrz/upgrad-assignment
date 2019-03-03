import React, { Component } from "react";
import Contacts from "../Components/Contacts/Contacts";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">Phone Directory</header>
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
