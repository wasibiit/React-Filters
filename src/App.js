import React, { Component } from "react";
import { records } from "./Users.json";
import Record from "./components/Record";
import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";
import CardColumns from "react-bootstrap/CardColumns";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class App extends Component {
  constructor(props) {
    super(props);
    let renderThis;
    this.state = {
      searchByName: "",
      searchByAge: ""
    };
  }

  updateSearchByName(event) {
    this.setState({ searchByName: event.target.value.substr(0, 20) });
  }

  updateSearchByAge(event) {
    this.setState({ searchByAge: event.target.value });
  }

  render() {
    // console.log(records);
    let filteredRecordsByName = records.filter(record => {
      return (
        record.userName
          .toLowerCase()
          .indexOf(this.state.searchByName.toLowerCase()) !== -1
      );
    });
    let filterRecordsByAge = filteredRecordsByName.filter(record => {
      return filteredRecordsByName.age === this.state.searchByAge;
    });

    if (this.state.filteredRecordsByAge === null) {
      this.renderThis = filterRecordsByAge.map(record => {
        return <Record record={record} key={record.id} />;
      });
    } else {
      this.renderThis = filteredRecordsByName.map(record => {
        return <Record record={record} key={record.id} />;
      });
    }

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              className="App-logo"
              src={logo}
              width="60"
              height="60"
            />
            {" React-Filters"}
          </Navbar.Brand>
        </Navbar>
        <InputGroup className="input">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Username"
            onChange={this.updateSearchByName.bind(this)}
            value={this.state.searchByName}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="input">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Age</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Enter Age"
            aria-label="Age"
            onChange={this.updateSearchByAge.bind(this)}
            value={this.state.searchByAge}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <br />
        <br />
        <CardColumns>{this.renderThis}</CardColumns>
      </div>
    );
  }
}

export default App;
