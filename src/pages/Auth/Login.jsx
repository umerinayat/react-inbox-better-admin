import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../store/actions/auth';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleLoginFormChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleUserLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // dispatch Login action
      await dispatch(login(loginForm, history));
    } catch (e) {
      if (e.response.status == 422) {
        const errors = e.response.data.errors;
        setErrors(errors);
      } else {
        setError(e);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
          <div className="col-lg-6">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h2 text-gray-900 mb-4">
                  <strong>Inbox Better</strong>
                </h1>
              </div>
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Admin Login</h1>
              </div>
              <form className="user" onSubmit={handleUserLogin}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    onChange={handleLoginFormChange}
                    className="form-control form-control-user"
                    placeholder="Email *"
                    required
                  />
                  {errors.hasOwnProperty('email')
                    ? errors.email.map((e) => (
                        <span className="text-danger mt-1 ml-1"> {e} </span>
                      ))
                    : ''}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    onChange={handleLoginFormChange}
                    className="form-control form-control-user"
                    placeholder="Password *"
                    required
                  />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn-primary btn-user btn-block"
                >
                  Login
                </button>
              </form>
              <hr />
              <div className="text-center">
                <a className="small" href="forgot-password.html">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
