import { Component, ReactNode } from 'react';
import $ from 'jquery';
export default class Login extends Component<any, any> {
  style1: any = { height: '500px;' };
  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        user: 'dhananjay',
        pass: 'dhananjay',
      },
    };
  }
  login_add = (data: any) =>
    new Promise((rev, rej) => {
      $('body').append("<span class='loader'></span>");
      setTimeout(() => {
        if (data.user === 'dhananjay' && data.pass === 'dhananjay') {
          rev('success');
        } else {
          rej('error');
        }
      }, 2000);
    });

  login(data: any) {
    this.login_add(data).then(
      resp => {
        $('.loader').last().remove();
        document.location.pathname = 'main/app';
      },
      err => {
        $('.loader').last().remove();
      },
    );
  }

  change(ev: any, d: any, key: any) {
    d[key] = ev.target.value;
    this.setState({ data: d });
  }
  render(): ReactNode {
    return (
      <div className="container" style={this.style1}>
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="User or Email"
                value={this.state.data.user}
                onChange={e => this.change(e, this.state.data, 'user')}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">Example textarea</label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder=""
                value={this.state.data.pass}
                onChange={e => this.change(e, this.state.data, 'pass')}
              />
            </div>
          </div>
          <div className="col-12 text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => this.login(this.state.data)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
