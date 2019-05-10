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
    this.state = {
      searchByName: ""
    };
  }

  updatesearchByName(event) {
    this.setState({ searchByName: event.target.value.substr(0, 20) });
  }

  render() {
    console.log(records);
    let filteredRecords = records.filter(record => {
      return (
        record.userName
          .toLowerCase()
          .indexOf(this.state.searchByName.toLowerCase()) !== -1
      );
    });
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
            onChange={this.updatesearchByName.bind(this)}
            value={this.state.searchByName}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <br />
        <br />
        <CardColumns>
          {filteredRecords.map(record => {
            return <Record record={record} key={record.id} />;
          })}
        </CardColumns>
      </div>
    );
  }
}

export default App;
