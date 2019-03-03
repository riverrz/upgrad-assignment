import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

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
      <div class="AddContact__container">
        <Link to="/">Go Back</Link>
        <h1>Add Contact</h1>
        <form>
          <div className="form__control">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" onChange={this.onChangeName} />
          </div>
          <div className="form__control">
            <label htmlFor="phone">Phone: </label>
            <input type="text" id="phone" onChange={this.onChangePhone} />
          </div>

          <h3>Subscriber to be added:</h3>
          <div>
            Name: <span>{this.state.name}</span>
          </div>
          <div>
            Phone: <span>{this.state.phone}</span>
          </div>
          <Link to="/" onClick={this.addContact}>
            Add
          </Link>
        </form>
      </div>
    );
  }
}

export default AddContact;
