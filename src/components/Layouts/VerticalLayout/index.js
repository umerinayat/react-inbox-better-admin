import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Layout Related Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({children, location, ...rest}) => {
    return (
        <React.Fragment>
            <div id="wrapper">
              <Sidebar />
              <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                  <Header />
                  <div className="container-fluid">{children}</div>
                </div>
                <Footer />
              </div>
            </div>
        </React.Fragment>
      )
}

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

export default connect(null, null)(withRouter(Layout))
