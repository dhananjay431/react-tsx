import { Component, ReactNode } from 'react';
import Tool from './Tool';
import Nav from '../Nav';
export default class Tools extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      ttl: 0,
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
      });
  }
  rand = () => Math.floor(Math.random() * 100);
  show(data: any) {
    data = data.map((d: any) => {
      d.name = this.rand();
      return d;
    });

    this.setState({ data: data });
    this.showTotal();
  }
  showTotal() {
    const ttl = this.state.data.reduce((a: any, b: any) => {
      a += Number(b.id);
      return a;
    }, 0);
    this.setState({ ttl: ttl });
  }
  render(): ReactNode {
    return (
      <div>
        <Nav></Nav>
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <table className="w-100">
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                  <th>Action</th>
                </tr>
                <>
                  {this.state.data.map((d: any) => {
                    return <Tool card={d} ttl={this.showTotal}></Tool>;
                  })}
                </>
                <tr>
                  <th> {this.state.ttl}</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                  <th>Action</th>
                </tr>
              </table>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={e => this.show(this.state.data)}
          >
            getData
          </button>
        </div>
      </div>
    );
  }
}
