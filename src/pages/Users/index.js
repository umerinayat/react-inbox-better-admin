import React, { useEffect, useState } from 'react';
import { IIconProps } from '@fluentui/react';
import { DefaultButton, ActionButton } from '@fluentui/react/lib/Button';
import { Panel } from '@fluentui/react/lib/Panel';
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
          headerText="Sample panel"
          isOpen={isOpen}
          onDismiss={dismissPanel}
          // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
          closeButtonAriaLabel="Close"
        >
          <p>Content goes here.</p>
        </Panel>
    </React.Fragment>
  );
};

export default Users;
