import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render(): ReactNode {
    return (
      <nav className="nav">
        <Link className="nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="/main/app">
          app
        </Link>
        <Link className="nav-link active" to="/main/empdtls">
          empdtls
        </Link>
        <Link className="nav-link active" to="/tools">
          tools
        </Link>
      </nav>
    );
  }
}
