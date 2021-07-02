import React, { useEffect, useState } from 'react';

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: 'example@test.com',
    password: 'password',
  });

  const handleLoginFormChange = (event) => {
    const {name, value} = event.target;
    setLoginForm({...loginForm, [name]: value})
  }

  const handleUserLogin = (event) => {
    event.preventDefault();
    
    // dispatch Login action
  }

  return (
    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
          <div className="col-lg-6">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h2 text-gray-900 mb-4"><strong>Inbox Better</strong></h1>
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
