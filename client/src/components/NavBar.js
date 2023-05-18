import React from "react";
import PropTypes from "prop-types";
export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <b> {props.title} </b>
        </a>
       

      </div>
    </nav>
  );
}

NavBar.propTypes = { title: PropTypes.string };

NavBar.defaultProps = { title: "Enter Title" };
