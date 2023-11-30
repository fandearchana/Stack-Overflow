import React from 'react'
import { useLocation} from 'react-router-dom'
import './HomeMainbar.css' 
// import Questions from '../../Pages/Questions/Questions'
import QuestionList from './QuestionList'
import { useNavigate } from 'react-router-dom'
import {useSelector } from 'react-redux'


const HomeMainbar = () => {   
  // const questionList=[{
  //   id:'1',
  //   upVotes:3,
  //   downVotes:2,
  //   votes: 2,
  //   noOfAnswer: 2,
  //   questionTitle:"what is a function",
  //   questionBody:"It meant to be",
  //   questionTags:["java","nodejs","reactjs"],
  //   userPosted:"mano",
  //   askedOn:"jan1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:'Kumar',
  //     answerdOn:'jan 2',
  //     userId:2,
  //   }]

  // },
  // {
  //   id:'2',
  //   votes: 4,
  //   noOfAnswer: 2,
  //   questionTitle:"what is a function",
  //   questionBody:"It meant to be",
  //   questionTags:["java","nodejs"],
  //   userPosted:"harry",
  //   askedOn:"jan1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:'harry',
  //     answerdOn:'jan 2',
  //     userId:3, }]
  // },
  // {
  //   id:'3',
  //   votes: 6,
  //   noOfAnswer: 3,
  //   questionTitle:"what is a function",
  //   questionBody:"It meant to be",
  //   questionTags:["java","nodejs","reactjs","mongodb"],
  //   userPosted:"mano",
  //   askedOn:"jan1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:'jack',
  //     answerdOn:'jan 2',
  //     userId:4, }]
  // }]
  const location = useLocation()  
  console.log(location)
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()
  const questionList = useSelector(state => state.questionsReducer)
     
  const checkAuth=()=>{
    if(User === null){
      alert("login or signUp to ask question")
      navigate ('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname==='/'?
          <h1>Top Questions</h1>:<h1>All Questions</h1>          
        }
        <button to='/Ask question' onClick={checkAuth} className='ask-btn'>Ask question</button>
      </div>
      <div>
        {
          questionList.data === null?<h1>Loading...</h1>:
          <>
          <p>{questionList.data.length} Questions</p>
          <QuestionList questionList = {questionList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar