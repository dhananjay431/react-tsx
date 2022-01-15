import React, { Component } from 'react';

export default class Empdtls extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: 234,
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/' + this.props.id)
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
      });
  }

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state.data)}</h1>
      </div>
    );
  }
}
