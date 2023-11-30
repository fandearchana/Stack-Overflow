import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeclassname='active'>
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div>
                    <p>Public</p>
                </div>
                <NavLink style={{paddingTop:'20px'}} to='/Question'  className='side-nav-links'>
                <img  src={Globe} alt='globe' width='18px'/>
                <p style={{paddingLeft:'2px'}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' style={{marginLeft:'20px',paddingTop:'20px'}} className='side-nav-links' activeclassname='active'>
                <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' style={{marginLeft:'20px',paddingTop:'20px'}} className='side-nav-links'activeclassname='active'>
                <p>Users</p>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default LeftSidebar