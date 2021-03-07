import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=10&nat=us`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let items = data.results.map((person) => {
          return (
            <table>
              <tr></tr>
              <tr>
                <td>&nbsp;<img src={person.picture.medium}/></td>
                <td>&nbsp;{person.name.first} {person.name.last},</td>
                <td>&nbsp;{person.email},</td>
                <td>&nbsp;{person.dob.age},</td>
                <td>&nbsp;{person.phone}</td>
              </tr>
            </table>
          );
        });
        this.setState({ items: items });
        console.log(this.state.items);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>&nbsp;Employee Directory</h1>
        </header>
        
        <table>
          <thead>
            <tr>
              <td><th scope="col">&nbsp;Picture&nbsp;&nbsp;|&nbsp;</th></td>
              <td><th scope="col">&nbsp;Name&nbsp;&nbsp;|&nbsp;</th></td>
              
              <th scope="col">&nbsp;Email&nbsp;&nbsp;|&nbsp;</th>
              <th scope="col">&nbsp;Age&nbsp;&nbsp;|&nbsp;</th>
              <th scope="col">&nbsp;Phone</th>
            </tr>
            <tr></tr>
          </thead>
        </table>

        {this.state.items}
      </div>
    );
  }
}

export default App;