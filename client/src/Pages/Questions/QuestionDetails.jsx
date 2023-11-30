import   React , {useState} from 'react'
import './Question.css'
import { Link,useParams,useNavigate, useLocation} from 'react-router-dom'
import moment from 'moment'
import {useDispatch, useSelector} from 'react-redux'
import copy from 'copy-to-clipboard'

import upVote from '../../assets/upVote.svg'
import downVote from '../../assets/downVote.svg'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion} from '../../actions/question.js'


const QuestionDetails = () => {  
     const { id } = useParams()
     const questionList = useSelector((state) => state.questionsReducer)
    console.log(questionList)
    const [Answer ,setAnswer] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector((state) => (state.currentUserReducer))      
    const location = useLocation();
    console.log(location)
    const url= 'http://localhost:3000'    
     
    
    const handlePostAns=(e, answerLength) => {
        e.preventDefault();
        if(User === null){
            alert('Login or signup to answer a question')
            navigate('/Auth')
        }else{
            console.log( User.result.name)
            if(Answer ===''){
                alert('Enter an Answer befor submitting')
            }else{
                dispatch( postAnswer({ id , noOfAnswer: answerLength + 1, answerBody: Answer, userAnswerd : User.result.name, userId: User.result._id}))
                setAnswer('')
            }
        }
    }

    const handleShare = () =>{
        copy(url + location.pathname)
        alert('copied url:' + url + location.pathname)
    } 

    const handleDelete = () =>{
        dispatch( deleteQuestion( id, navigate ))
    }

    const handleUpVote = () =>{       
        dispatch( voteQuestion(id ,'upVote', User.result._id))
    }

    const handleDownVote = () =>{       
        dispatch( voteQuestion(id ,'downVote', User.result._id))
    }
    // const questionList=[{
    //     id:'1',
    //     upVotes:3,
    //     downVotes:2,        
    //     noOfAnswer: 2,
    //     questionTitle:"what is a function",
    //     questionBody:"It meant to be",
    //     questionTags:["java","nodejs","reactjs"],
    //     userPosted:"mano",
    //     askedOn:"jan1",
    //     answer:[{
    //       answerBody:"Answer",
    //       userAnswered:'Kumar',
    //       answerdOn:'jan 2',
    //       userId:2
    //     }]
    
    //   },
    //   {
    //     id:'2',
    //     upVotes:3,
    //     downVotes:2,        
    //     noOfAnswer: 2,
    //     questionTitle:"what is a function",
    //     questionBody:"It meant to be",
    //     questionTags:["java","nodejs"],
    //     userPosted:"harry",
    //     askedOn:"jan1",
    //     answer:[{
    //       answerBody:"Answer",
    //       userAnswered:'harry',
    //       answerdOn:'jan 2',
    //       userId:3 }]
    //   },
    //   {
    //     id:'3',
    //     upVotes:3,
    //     downVotes:2,        
    //     noOfAnswer: 3,
    //     questionTitle:"what is a function",
    //     questionBody:"It meant to be",
    //     questionTags:["java","nodejs","reactjs","mongodb"],
    //     userPosted:"mano",
    //     askedOn:"jan1",
    //     answer:[{
    //       answerBody:"Answer",
    //       userAnswered:'jack',
    //       answerdOn:'jan 2',
    //       userId:4 }]
    //   }]
    // const questionList = null
    
  return (   
    <div className='question-detail-page'>
     {
        questionList.data === null ? 
        <h1>Loading..</h1> :
        <>
        {
            questionList.data.filter(question => question._id === id).map(question =>(
                <div key={question._id}>
                    <section className='question-details-container'>
                        <h1>{question.questionTitle}</h1>
                        <div className="question-details-container-2">
                            <div className="question-votes">
                                <img src={upVote} alt='upvote' width='18' className='votes-icon' onClick={handleUpVote}/>
                                <p>{question.upVote.length - question.downVote.length}</p>
                                <img src={downVote} alt='downvote' width='18' className='votes-icon' onClick={handleDownVote}/>
                            </div>
                            <div style={{width:'100%'}}>                                
                                <p className='question-body'>{question.questionBody}</p>
                                <div className="question-details-tags">
                                     {
                                         question.questionTags.map((tag)=>(
                                             <p key={tag}>{tag}</p>
                                         ))
                                     }
                                 </div>
                                <div className="question-action-uesr">
                                    <div>
                                         <button type='button' onClick = {handleShare} >Share</button>
                                         {
                                            User?.result?._id === question?.userId &&
                                            <button type='button' onClick={handleDelete}>Delete</button>
                                         }                                         
                                    </div>                               
                                    <div>
                                         <p>asked {moment(question.askedOn).fromNow()}</p>
                                         <Link to = {`/Users/${question.userId}`} className ='user-link' style= {{color:'#0086d8'}}>
                                             <Avatar backgroundColor = 'orange' px ='8px' py ='5px' borderRadius = "10%">
                                                 {question.userPosted.charAt(0).toUpperCase()}
                                             </Avatar>
                                             <div>
                                                 {question.userPosted}
                                             </div>
                                         </Link>
                                    </div>
                                </div> 
                            </div>
                        </div> 
                    </section>
                    {
                         question.noOfAnswer !== 0 && (
                            <section>
                                    <h3>{question.answer.length} answer</h3>
                                    <DisplayAnswer key = { question._id } question = { question }  handleShare ={ handleShare }/>
                            </section>
                            )
                    }
                    <section className='post-ans-container'>
                             <h3>Your answer </h3>
                             <form onSubmit = {(e) => {handlePostAns(e, question.answer.length)}}>
                                 <textarea id=' ' cols ='30' rows ='10' onChange = {e => setAnswer(e.target.value)} ></textarea>
                                 <input type ='submit' className ='post-ans-btn' value ='Post your answer'/>
                             </form>
                             <p>
                                 Browse other Question tagged
                                 {
                                     question.questionTags.map((tag) => (
                                         <Link to = '/Tags' key = { tag } className ='ans-tag'>{ tag }</Link>
                                     ))
                                 } or  
                                 <Link to ='/AskQuestion' style = {{ textDecoration: 'none', color: '#009dff'}}> Ask your question</Link>                            
                             </p>
                    </section>
                        
                </div>
            ))
        }
        </>           
    }
  </div>       
 )  
}
   

export default QuestionDetails