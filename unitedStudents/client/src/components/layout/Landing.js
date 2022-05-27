import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {style} from "./style.scss"
import ubtLogo from "../../img/ubt-logo.png";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large landing-h1">United Students</h1>
          <p className="lead">
            Meet students, who share the same passion as you do!
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary btn-animation">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light btn-animation">
              Login
            </Link>
          </div>
        </div>
       
        
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
