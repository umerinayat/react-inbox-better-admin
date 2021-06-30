import React from "react";
import { Redirect } from "react-router-dom";

// Public
import Login from '../pages/Auth/Login';

// Protected
import Dashboard from '../pages/Dashboard';


const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard},

  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }

];

const publicRoutes = [
  { path: "/login", component: Login }
];

export { authProtectedRoutes, publicRoutes };
