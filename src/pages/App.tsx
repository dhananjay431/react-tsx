import React, { Component } from 'react';
import Appdata from '../Appdata';
import { from } from 'rxjs';
import './App.css';
import Nav from './Nav';
export default class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5],
      resp: [],
    };
  }

  change(e: any, d: any, i: any) {
    const x = new Appdata().change(d, i);
    this.setState({ data: x });
  }
  componentDidMount() {
    from(
      fetch('https://jsonplaceholder.typicode.com/users').then(response =>
        response.json(),
      ),
    ).subscribe(_ => {
      this.setState({ resp: _ });
    });
  }
  goto(d: any) {
    document.location.pathname = '/main/emp/' + d.id;
  }

  render(): React.ReactNode {
    return (
      <div>
        <Nav></Nav>
        <h1> sdfsdf {this.props.test} </h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>phone</th>
              <th>website</th>
              <th>company</th>
            </tr>
          </thead>
          <tbody>
            {this.state.resp.map((d: any) => {
              return (
                <tr onClick={e => this.goto(d)}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.username}</td>
                  <td>{d.phone}</td>
                  <td>{d.website}</td>
                  <td>{d.company.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
