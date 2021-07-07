import React, { useEffect, useState } from 'react';
import { IIconProps } from '@fluentui/react';
import { DefaultButton, ActionButton } from '@fluentui/react/lib/Button';
import { Panel, PanelType } from '@fluentui/react/lib/Panel';
import { ProgressIndicator } from '@fluentui/react/lib/ProgressIndicator';
import { TooltipHost, ITooltipHostStyles } from '@fluentui/react/lib/Tooltip';
import { useBoolean, useId } from '@fluentui/react-hooks';

import UserService from '../../api-services/userService';

import './Users.scss';

const addFriendIcon = { iconName: 'AddFriend' };

const calloutProps = { gapSpace: 0 };
// The TooltipHost root uses display: inline by default.
// If that's causing sizing issues or tooltip positioning issues, try overriding to inline-block.
const hostStyles = { root: { display: 'inline-block' } };

const Users = () => {
  const [users, setUsers] = useState([]);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    is_admin: false,
    is_suspended: false
  });
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);

  const tooltipId = useId('tooltip');

  useEffect(async () => {
    try {
      // dispatch Login action
      const response = await UserService.getAllUsers();
      setUsers(response.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      debugger;
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
          {user.name}
          {user.is_admin ? (
            <span class="badge badge-dark ml-2">Super Admin</span>
          ) : (
            ''
          )}
        </td>
        <td>{user.email}</td>
        <td>{user.isSuspended ? 'YES' : 'NO'} </td>
      </tr>
    );
  }

  const handleUserFormChange = (event) => {
      event.preventDefault();
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      setUserForm({ ...userForm, [name]: value });
  }

  const handleAddNewUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // create new user call
      const response = await UserService.addNewUser(userForm);
      debugger
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
    <React.Fragment>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <div class="row">
            <div class="col-sm-6">
              <h4 class="m-0 font-weight-bold text-primary">Users</h4>
            </div>
            <div class="col-sm-6 text-right">
              <TooltipHost
                content="Add New User into System"
                // This id is used on the tooltip itself, not the host
                // (so an element with this id only exists when the tooltip is shown)
                id={tooltipId}
                calloutProps={calloutProps}
                styles={hostStyles}
              >
                <ActionButton
                  onClick={openPanel}
                  iconProps={addFriendIcon}
                  allowDisabledFocus
                  disabled={false}
                  checked={false}
                >
                  Add New User
                </ActionButton>
              </TooltipHost>
            </div>
          </div>
        </div>
        <div class="card-body">
          <ProgressIndicator progressHidden={loading} barHeight={2} />
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

      <Panel
        headerText="Add New User"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        type={PanelType.extraLarge}
        closeButtonAriaLabel="Close"
      >
        <form onSubmit={handleAddNewUser}>
          <div className="row p-3">
            <div className="col-sm-7">
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="name">Full Name *</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Full Name.."
                    name="name"
                    required
                    onChange={handleUserFormChange}
                  />
                </div>
              </div>
              {/* Email & Password */}
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="email">Email *</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={handleUserFormChange}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="password">Password *</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={handleUserFormChange}
                  />
                </div>
              </div>
              <div className="form-row mt-3">
                <div class="form-group col-sm-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="is_admin"
                      checked={userForm.is_admin}
                      onChange={handleUserFormChange}
                    />
                    <label class="form-check-label" for="gridCheck">
                      Is Super Admin?
                    </label>
                  </div>
                </div>
                <div class="form-group col-sm-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="is_suspended"
                      checked={userForm.is_suspended}
                      onChange={handleUserFormChange}
                    />
                    <label class="form-check-label" for="gridCheck">
                      Is Suspended?
                    </label>
                  </div>
                </div>
              </div>
              
                <div className="form-group mt-4">
                  <button type="submit" className="btn btn-sm btn-primary w-25">
                      Add 
                  </button>
                </div>
                
            </div>
            {/* Image Avatar */}
            {/* <div className="col-sm-5 text-center">
              <div>
                  <label for="avatar">Profile Avatar</label>
              </div> 
              <img src="https://i.pravatar.cc/150" class="rounded-circle mt-4" alt="user-avatar" width="150" height="150" /> 
            </div> */}
          </div>
        </form>
      </Panel>
    </React.Fragment>
  );
};

export default Users;
