import { Component, ReactNode } from 'react';

export default class Tool extends Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log(props);
    this.state = {};
  }
  rand = () => Math.floor(Math.random() * 100);
  change(e: any, data: any) {
    data.name = new Date().getTime().toString();
    data.id = this.rand();
    this.setState({ data: data });
    debugger;
    this.props.ttl();
    console.log('update =>', data);
  }
  render(): ReactNode {
    return (
      <tr>
        <td>{this.props.card.id}</td>
        <td>{this.props.card.name}</td>
        <td>{this.props.card.username}</td>
        <td>{this.props.card.email}</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={e => this.change(e, this.props.card)}
          >
            Danger
          </button>
        </td>
      </tr>
    );
  }
}
