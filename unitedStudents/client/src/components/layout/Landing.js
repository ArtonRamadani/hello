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
        <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-6">
            <h6> hej1</h6>
            <br />
            {/* <a href="">{props?.langData?.find(el => el.key == 'footerLinksSectOneOne').content}</a> */}
            <Link to="/howitworks">hej12</Link>
            <Link to="/for-doctors">hej13</Link>
            <Link to="/for-doctors" >hej14</Link>
            <Link to='/aboutus'>hej15</Link>

            {/* <a href="/press">{props?.langData?.find(el => el.key == 'footerLinksSectOneThree').content}</a>
            <a href="/careers">{props?.langData?.find(el => el.key == 'footerLinksSectOneFour').content}</a>
            <a href="/blog">{props?.langData?.find(el => el.key == 'footerLinksSectOneFive').content}</a> */}


            <a href="./termsandconditions" className="terms-conditions">hej16</a>
          </div>

          <div className="col-lg-3 col-6 ">
            <h6>hej17</h6>
            <br />
            <Link to="/company">hej8</Link>
            <Link to="/team">hej8</Link>
            <Link to="/communities">hej8</Link>
            <Link to="/jobs">hej8</Link>
            <Link to="/blog">hej8</Link>
          </div>
          <div className="col-lg-3 footer-languages">
            <h6>hej10</h6>
            <br />
            {/* <a href="#">{props?.langData?.find(el => el.key == 'footerLinksSectThreeOne').content}</a>
            <a href="#">{props?.langData?.find(el => el.key == 'footerLinksSectThreeTwo').content}</a>
            <a href="#">{props?.langData?.find(el => el.key == 'footerLinksSectThreeThree').content}</a>
            <a href="#">{props?.langData?.find(el => el.key == 'footerLinksSectThreeFour').content}</a> */}

            <div class="" >
              {/* {activeLangs?.map((langs, index) => {
                return (
                  <a href="#" key={index} onClick={() => setActiveLanguage(langs?.id)}>{langs?.code}</a>
                  // <span href="#" className={`dropdown-item flag flag-${langs?.id}`} onClick={() => setActiveLanguage(langs?.id)}> {langs?.code}</span>
                )
              })} */}
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 footer-contact">
            <h6>hej19</h6>
            <br /><br />

            <div className="footer-email-app-wrapper ">
              <div className="footer-icon email">E-mail us</div>
              <div className="footer-icon app">App</div>
            </div>

            <div className="footer-social-icons-wrapper">
              <div className="fb"></div>
              <div className="twitter"></div>
              <div className="insta"></div>
              <div className="youtube"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        {/* <div className="footer">
          <div class="footer__logo-box">
            <img
              src={ubtLogo}
              alt="Full logo"
              class="footer__logo"
            />
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Company
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Contact us
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Careers
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Privacy
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2">
              <p className="footer__copyright">
                Built by{" "}
                <a
                  href="https://www.ubt-uni.net/sq/ballina/"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Univeristy for Business and Technology
                </a>{" "}
                students for Lab Course 2 course. Copyright &copy; by UBT
                Students.
              </p>
            </div>
          </div>
        </div> */}
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
