import 'babel-polyfill';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data : [
        {
          id : 1,
          name : 'huy',
          age : 20
        },
        {
          id : 2,
          name : 'tung',
          age : 20
        },
        {
          id : 3,
          name : 'tuan',
          age : 20
        },
        {
          id : 4,
          name : 'trung',
          age : 20
        },
        {
          id : 5,
          name : 'hung',
          age : 20
        }
      ]
    };
  }

  render() {
    return (
         <div>
            <table border="1">
                {this.state.data.map((r, i) => {return <tr key={i}><td>{r['id']}</td><td>{r['name']}</td><td>{r['age']}</td></tr>})}
            </table>
        </div>
        )
    }
  }

  export default App;
