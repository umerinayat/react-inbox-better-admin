import React from "react";

const Sidebar = () => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
        <i class="fas fa-envelope-square"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Inbox Better</div>
      </a>

      <hr className="sidebar-divider my-0" />
      
      <li className="nav-item active">
        <a className="nav-link" href="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>

    
      <hr className="sidebar-divider" />

      <div className="sidebar-heading">
        Admin
      </div>

      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#manageUsers" aria-expanded="true" aria-controls="manageUsers">
          <i className="fas fa-fw fa-users"></i>
          <span>Users</span>
        </a>
        <div id="manageUsers" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Manage Users:</h6>
            <a className="collapse-item" href="#users">All Users</a>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    )
}

export default Sidebar;
