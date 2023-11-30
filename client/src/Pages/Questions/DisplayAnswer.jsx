import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'

import Avatar from '../../components/Avatar/Avatar'
import { deleteAnswer } from '../../actions/question.js'

const DisplayAnswer = ({question, handleShare}) => {
 
    const { id } = useParams()
    const User = useSelector((state) => (state.currentUserReducer)) 
    const dispatch= useDispatch();
// const navigate= useNavigate();

const handleDelete = (answerId , noOfAnswers) => {
    dispatch(deleteAnswer(id ,answerId , noOfAnswers - 1))
}

  return (
    <div >
        {
            question.answer.map((ans)=>(
                <div className="display-ans" key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="question-action-uesr">
                            <div>
                                <button type='button' className='display-ans-btn' onClick = { handleShare }>Share</button>
                                {
                                            User?.result?._id === ans?.userId && (
                                            <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers )}>Delete</button> 
                                            )
                                         }       
                            </div>
                            <div>
                                <p>answered {moment(ans.answerdOn).fromNow()}</p>
                                <Link to={`/Users/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                    <Avatar backgroundColor='green' px='8px' py='5px' borderRadius="3px">
                                      {ans.userAnswerd.charAt(0).toUpperCase()} 
                                    </Avatar>
                                    <div>
                                       {ans.userAnswerd}
                                    </div>
                                </Link>
                            </div>                        
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer