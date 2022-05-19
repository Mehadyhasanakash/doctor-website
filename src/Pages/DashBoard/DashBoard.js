import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    {/* <!-- Page content here --> */}
    <h2>Dashboard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/deshboard'>Sidebar Item 1</Link></li>
      <li><Link to='/deshboard/review'>Sidebar Item 2</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;