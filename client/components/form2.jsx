/**F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number. */

import React from 'react';
import Form3 from './form3.jsx';

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: "",
      line2: "",
      city: "",
      state: "",
      zipcode: "",
      phoneNumber: "",
      form2Completed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "Line1") {
      this.state.line1 = event.target.value;
    }
    if (event.target.name === "Line2") {
      this.state.line2 = event.target.value;
    }
    if (event.target.name === "City") {
      this.state.city = event.target.value;
    }
    if (event.target.name === "State") {
      this.state.state = event.target.value;
    }
    if (event.target.name === "Zipcode") {
      this.state.zipcode = event.target.value;
    }
    if (event.target.name === "PhoneNumber") {
      this.state.phoneNumber = event.target.value;
    }
  }

  handleClick() {
    if (this.state.line1 && this.state.line2 && this.state.city && this.state.state && this.state.zipcode && this.state.phoneNumber) {
      this.setState({form2Completed: true});
    }
  }

  render() {
    if (!this.state.form2Completed){
    return <div>
      <form onChange={this.handleChange}>
        Line1: <input type="text" name="Line1"/><br/>
        Line2: <input type="text" name="Line2"/><br/>
        City: <input type="text" name="City"/><br/>
        State: <input type="text" name="State"/><br/>
        Zip Code: <input type="text" name="Zipcode"/><br/>
        Phone Number: <input type="text" name="PhoneNumber"/><br/>
      </form>
      <input onClick={this.handleClick} type="submit" value="Submit"/>
    </div>;
    } else {return <Form3/>}
  }
};

export default Form2;
