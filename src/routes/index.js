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

  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  

];

const publicRoutes = [
  { path: "/login", component: Login }
];

export { authProtectedRoutes, publicRoutes };
