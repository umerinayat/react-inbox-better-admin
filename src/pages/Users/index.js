import React, { useEffect, useState } from 'react';
import UserService from '../../api-services/userService';

import './Users.scss';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      // dispatch Login action
      const response = await UserService.getAllUsers();
      setUsers(response.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  function renderUsersList(user, i) {
    return (
      <tr key={user.id}>
        <td>
          <button class="btn btn-danger btn-circle btn-sm">
            <i class="fas fa-ban"></i>
          </button>
          <button class="btn btn-success ml-2 btn-circle btn-sm">
            <i class="fas fa-pencil-alt"></i>
          </button>
          <button class="btn btn-info ml-2 btn-circle btn-sm">
            <i class="fas fa-eye"></i>
          </button>
        </td>
        <td>
          {user.name}{' '}
          {user.is_admin ? (
            <span class="badge badge-dark ml-2">Super Admin</span>
          ) : (
            ''
          )}{' '}
        </td>
        <td>{user.email}</td>
        <td>{user.isSuspended ? 'YES' : 'NO'} </td>
      </tr>
    );
  }

  return (
    <React.Fragment>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <div class="row">
            <div class="col-sm-6">
              <h4 class="m-0 font-weight-bold text-primary">Users</h4>
            </div>
            <div class="col-sm-6 text-right">
              <button class="btn btn-primary btn-icon-split btn-sm">
                <span class="icon text-white-50">
                  <i class="fas fa-user"></i>
                </span>
                <span class="text">Add New User</span>
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered table-hover"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th className="table-actions">Actions</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>IsSuspended</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th className="table-actions">Actions</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>IsSuspended</th>
                </tr>
              </tfoot>
              <tbody>
                {/* Users List */}
                {users.map(renderUsersList)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Users;
