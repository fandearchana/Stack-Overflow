import React from 'react'
import { useState } from 'react'
import Icon from '../../assets/icon.png'
import './Auth.css'
import { useDispatch } from 'react-redux' // to dispatch inputs to backend
import { useNavigate } from 'react-router-dom' //to navigate after login or signup
import { signup , login } from '../../actions/auth.js'

const Auth = () => {
    const[isSignup, SetIsSignup] = useState(false)
    const handleSwitch=()=>{
        SetIsSignup(!isSignup)
     }
    const[name , setName] = useState('')
    const dispatch = useDispatch();
    const[email, setEmail] = useState('')
    const navigate = useNavigate()
    const [password , setPassword] = useState('')

    //after submiting form inputs should be send to backend
    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log({ name , email, password})
        if(!email && !password){
            alert('Enter email and password')
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signup({name ,email, password}, navigate)) //for signup 
        } else {
           dispatch(login({email, password}, navigate)) //for login
        }        
    }

  return (
    <div className='auth-container'>
        <div>
        {!isSignup?<><img src={Icon} alt='stackoverflow icon' className='auth-icon' width='50px' height='50px'/></> : 
            <div className='signup-aside'>
                <h1>Join the Stack Overflow community</h1>
                <p>Get unstuck — ask a question</p>
                <p>Unlock new privileges like voting and commenting</p>
                <p>Save your favorite questions, answers, watch tags, and more</p>
                <p>Earn reputation and badges</p>
                <p style={{color:'#666767',fontSize:'13px'}}>Collaborate and share knowledge with a private group for FREE.<br/>
                <span style={{color:'#007ac6'}}>Get Stack Overflow for Teams free for up to 50 users.</span></p>
            </div>}
        </div>
        <div>
            <form className='auth-form' onSubmit={handleSubmit}>
                {isSignup && 
                <label htmlFor='displayName'><h4>Display name</h4>
                    <input className='auth-input' onChange = {(e) => {setName(e.target.value)}} type='text' id='displayName' name='displayName'></input>
                </label>}
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input className='auth-input' onChange = {(e) => {setEmail(e.target.value)}} type='email' name='email' id='email'></input>
                </label>
                <label htmlFor='password'>
                    <div style={{display:'flex', justifyContent:'space-between'}}><h4>Password</h4>
                        {!isSignup && <p className='auth-forgotpassword'>Forgot Password?</p>}
                    </div>
                    <input className='auth-input' onChange = {(e) => {setPassword(e.target.value)}} type='password' name='password' id='password'></input>
                </label> 
                    {  isSignup && 
                        <>
                        <p style={{color:'#666767', fontSize:'13px'}}>Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number.</p>
                        <div>
                            <label htmlFor='checkbox' style={{display:'flex', justifyContent:'space-between', marginTop:'20px'}} > 
                            <input  type='checkbox' className='auth-check' name='checkbox' id='checkbox'></input> 
                            <p style={{fontSize:'13px', alignSelf: 'start', textAlign:'left'}} id='checkbox' >Opt-in to receive occasional product <br/> updates, user research invitations, company<br/> announcements, and digests.</p>
                            </label>
                        </div>    
                        </>
                    }               
                <br/>
                <button type='submit' className='auth-btn' style={{backgroundColor:'#007ac6', color:'white'}}>
                    {isSignup? 'Sign up':'Log in'}
                </button>
                {isSignup && <p style={{color:'#666767',fontSize:'13px',textAlign:'left'}}>By clicking “Sign up”, you agree to our <span  style={{color:'#007ac6'}}> terms of <br/>service</span> and acknowledge that you have read and <br/> understand our <span style={{color:'#007ac6'}}>privacy policy</span>  and ,<span style={{color:'#007ac6'}}>code of<br/> conduct.</span> </p>}
            </form>
            <p className='auth-footer'>
                {isSignup?'Already have an account?':`Don't have an account?`}
                <button type='button' onClick={handleSwitch}>
                    {isSignup?'Log in':'Sign up'}
                </button>
           </p>          
        </div>
    </div>
  )
}

export default Auth
