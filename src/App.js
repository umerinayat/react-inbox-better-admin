import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";

// layout
import VerticalLayout from "./components/Layouts/VerticalLayout";
import NoAuth from "./components/Layouts/NoAuth";


// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes";
import AppRoute from "./routes/route";

import './App.css';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              layout={NoAuth}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              layout={VerticalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}

// const mapStateToProps = state => {
//   return {
//     layout: state.Layout,
//   }
// }

// App.propTypes = {
//   layout: PropTypes.object,
// }

export default connect(null, null)(App)
