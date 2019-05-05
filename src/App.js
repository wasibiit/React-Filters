import React, { Component } from "react";
import { records } from "./Users.json";
import Record from "./components/Record";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      records: []
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  render() {
    console.log(records);
    let filteredRecords = this.props.records.filter(record => {
      return (
        record.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <ul>
          {filteredRecords.map(record => {
            return <Record record={record} key={record.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
