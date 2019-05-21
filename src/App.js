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
      searchByName: "",
      searchByAge: "",
        records:records,
        filteredRecords:records,
      renderThis: records.map(record => {
      return <Record record={record} key={record.id} />;
      })
    };
  }
    componentDidMount() {
        this.filterAllRecords();
    }

    updateSearchByName(event) {
    this.setState({ searchByName: event.target.value.substr(0, 20) }, this.filterAllRecords);
  }

  updateSearchByAge(event) {
      this.setState({ searchByAge: event.target.value },this.filterAllRecords);
  }
  filterRecordsByAge(records){
    return records.filter(record => {
        return (
            record.age
                .indexOf(this.state.searchByAge.toString()) !== -1
        );

    });
  }
  filterRecordsByName(records){
    return records.filter(record => {
      return (
          record.userName
              .toLowerCase()
              .indexOf(this.state.searchByName.toLowerCase()) !== -1
      );
    });
  }
    filterAllRecords() {
      console.log(this.state.searchByName );
      console.log(this.state.searchByAge );
        if (this.state.searchByName != "") {
            let filteredRecords = this.filterRecordsByName(this.state.records);
          let renderThis = filteredRecords.map(record => {
              return <Record record={record} key={record.id} />;
          });
            if (this.state.searchByAge != "") {
                 filteredRecords = this.filterRecordsByAge(filteredRecords);
                 renderThis = filteredRecords.map(record => {
                    return <Record record={record} key={record.id} />;
                });
            }
          this.setState({ renderThis: renderThis,filteredRecords: filteredRecords });

      }
        else {
            if (this.state.searchByAge != "") {
                const filteredRecords = this.filterRecordsByAge(this.state.records);
                const renderThis = filteredRecords.map(record => {
                    return <Record record={record} key={record.id}/>;
                });
                this.setState({renderThis: renderThis, filteredRecords: filteredRecords});
            }
            else
            {
                const renderThis = this.state.records.map(record => {
                    return <Record record={record} key={record.id}/>;
                });
                this.setState({renderThis: renderThis, filteredRecords: this.state.records});
            }
        }
  }
  render() {
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
        <CardColumns>{this.state.renderThis}</CardColumns>
      </div>
    );
  }
}

export default App;
