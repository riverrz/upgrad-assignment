import React, { Component } from "react";
import "./App.css";
import Contacts from "./Components/Contacts/Contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [{ id: 0, name: "Shivam", phone: "9891866484" }]
    };
  }
  addContact = contact => {
    const { name, phone } = contact;
    const newContacts = [...this.state.contacts];
    newContacts.push({ name, phone, id: newContacts.length + 1 });
    this.setState({
      contacts: newContacts
    });
  };
  deleteContact = id => {
    console.log(id);
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    return (
      <div className="App">
        <header className="header">Phone Directory</header>
        <Contacts list={this.state.contacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
