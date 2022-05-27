import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./footer.scss"

const Footer = (e) => {

    return (
        <footer>
            <div className="container">
                <div className="foterElements">
                    <div className="col-lg-3 col-6">
                        {/* <h6> hej1</h6> */}
                        <Link to="/">Dashboard</Link>
                        <Link to="/profiles">Students</Link>
                    </div>

                    <div className="col-lg-3 col-6 ">
                        <h1>
                            <Link to="/">
                                <i className="fas fa-code"></i> UnitedStudents
                            </Link>
                        </h1>
                        {/* <h6>hej17</h6>
                        <br />
                        <Link to="/company">hej8</Link>
                        <Link to="/team">hej8</Link>
                        <Link to="/communities">hej8</Link>
                        <Link to="/jobs">hej8</Link>
                        <Link to="/blog">hej8</Link> */}
                    </div>
                        <h6>Contact Me</h6>
                    {/* <div className="col-3">
                    </div> */}
                    {/* <div className="col-lg-3 col-sm-12">
                    <div className="footer-email-app-wrapper ">
                        <div className="footer-icon email">E-mail us</div>
                    </div>
                    <div className="footer-social-icons-wrapper">
                        <div className="fb"></div>
                        <div className="twitter"></div>
                        <div className="insta"></div>
                        <div className="youtube"></div>
                    </div>
                    </div> */}
                </div>
                <p className="copyrightStyle"> &copy; This platform was developed and designet by Arton Ramadani</p>
            </div>
        </footer>
    );
};



export default (Footer);

