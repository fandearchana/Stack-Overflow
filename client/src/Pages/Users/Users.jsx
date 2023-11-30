import React from 'react'
import { useLocation } from 'react-router-dom'

import LeftSidebar from '../../components/Leftsidebar/LeftSidebar'
import UsersList from './UsersList'
import './Users.css'

const Users = () => {
    const location = useLocation();
    console.log(location)
  return (
    <div className="home-container-1">
        <LeftSidebar/>
        <div className="user-container-2" style={{ marginTop:'80px'}}>
            
            <h1 style={{ fontWeight : '400', marginLeft :"20px"}}>Users</h1>            
            <UsersList/>           
        </div>
    </div>
  );
};

export default Users;