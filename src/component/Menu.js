import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import NavLink from "react-router-dom/es/NavLink";
import Link from "react-router-dom/es/Link";

class Menu extends PureComponent {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

Menu.propTypes = {};

export default Menu;