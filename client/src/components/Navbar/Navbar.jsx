import React, { useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import {useSelector ,useDispatch} from 'react-redux'
import {jwtDecode}  from "jwt-decode";

import logo from '../../assets/logo.png'
import  Search from '../../assets/search.svg'
import './Navbar.css'
import Avatar from '../Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser.js'

const Navbar = () => {
    const dispatch = useDispatch()  
    const navigate = useNavigate()
    var User = useSelector((state) => (state.currentUserReducer));

    const handleLogOut  =() =>{
      dispatch ({ type: 'LOGOUT'});
      navigate('/');
      dispatch(setCurrentUser(null));
    };
    
    useEffect(()=>{         
          const token = User?.token;
          if ( token ) {
            const decodedToken = jwtDecode( token )
            if (decodedToken.exp * 1000 < new Date().getTime())
            {
              handleLogOut();
            }
          }
          dispatch (setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        }, [User?.token, dispatch])

  return (
    <nav className='Main-nav-div'>
       <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
        <img src={logo} alt='logo' width='150'/>
        </Link>
        <Link to='/' className='nav-item nav-content'>About</Link>
        <Link to='/' className='nav-item nav-content'>Products</Link>
        <Link to='/' className='nav-item nav-content'>For Teams</Link>
        <form className='nav-form'>
            <img className='search-icon' src={Search} alt='' width='18'/>
            <input type='text' className='search-input' placeholder='Search...'></input>
        </form>        
            {
                User === null?
                <Link to='/Auth' className='nav-item nav-Link'>Log in </Link>:
                <>
                <Avatar backgroundColor='#009dff' px="9px" py="2px"  borderRadius="50%" color='white'>
                  <Link to = {`/Users/${User?.result?._id}`} style={{color:"white",  textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                <button className='nav-item nav-Link' style={{marginLeft:"6px"}} onClick={ handleLogOut }>Log out</button>
                </>
            }       
      </div>
    </nav>
    
  )
}

export default Navbar