import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
        <div className="sidebar-brand-icon">
        <i class="fas fa-envelope-square"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Inbox Better</div>
      </Link>

      <hr className="sidebar-divider my-0" />
      
      <li className="nav-item active">
      <Link className="nav-link" to="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></Link>
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
            <Link className="collapse-item" to="/users">All Users</Link>
          </div>
        </div>
      </li>

      {/* Warm Up Domain */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#warmUpDomain" aria-expanded="true" aria-controls="warmUpDomain">
          <i class="fas fa-server"></i>
          <span>Warmp Up Domains</span>
        </a>
        <div id="warmUpDomain" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Manage Warmup Domain:</h6>
            <Link className="collapse-item" to="/warm-up/domains">Domains</Link>
            <Link className="collapse-item" to="/warm-up/domain-email-accounts">Domains Email Accounts</Link>
            <Link className="collapse-item" to="/warm-up/system-email-accounts">System Email Accounts</Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
      {/* System Settings */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#manageSettings" aria-expanded="true" aria-controls="manageSettings">
          <i className="fas fa-fw fa-cog"></i>
          <span>System Settings</span>
        </a>
        <div id="manageSettings" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Manage Settings:</h6>
            <Link className="collapse-item" to="/settings/packages">Packages</Link>
          </div>
        </div>
      </li>


      {/* <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div> */}

    </ul>
    )
}

export default Sidebar;
