import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {

  const location = useLocation();
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) => {
        
        
        if(location.pathname === '/login' && isLoggedIn)
        {
          return (<Redirect
            to={{ pathname: '/dashboard', state: { from: props.location } }}
          />);
        }

        if (isAuthProtected && !isLoggedIn) {

          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
        
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

AppRoute.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  // layout: PropTypes.any,
};

export default AppRoute;
