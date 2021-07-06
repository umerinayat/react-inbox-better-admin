import React from "react";
import { Redirect } from "react-router-dom";

// Public
import Login from '../pages/Auth/Login';

// Protected
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';



const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard},

  { path: "/users", component: Users},

  { path: "/warm-up/domains", component: () => <h3> Domains </h3>},
  { path: "/warm-up/domain-email-accounts", component: () => <h3> Domain Emails Accounts </h3>},
  { path: "/warm-up/system-email-accounts", component: () => <h3> System Email Accounts </h3>},

  { path: "/settings/packages", component: () => <h2> packages </h2>},

  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  
];

const publicRoutes = [
  { path: "/login", component: Login }
];

export { authProtectedRoutes, publicRoutes };
