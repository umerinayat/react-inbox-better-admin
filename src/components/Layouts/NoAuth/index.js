import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Layout = ({ children, location, ...rest }) => {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default connect(null, null)(withRouter(Layout));
