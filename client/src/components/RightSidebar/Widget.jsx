import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen.svg'
import stackOverflow from '../../assets/stack-overflow.svg'

const Widget = () => {
  return (
    <div className='widget'>
        {/* code for Overflow blog */}
        <h4>The Overflow blog</h4>       
        <div className="right-sidebar-div-1">            
            <div className="right-sidebar-div-2">
                <img src={pen} alt='pen' width='18'/>
                <p>AI is only as good as the data: Q&A with Satish Jayanthi of Coalesce</p>
            </div>              
            <div className="right-sidebar-div-2">
                <img src={pen} alt='pen' width='18'/>
                <p>Tomasz Tunguz: From Java engineer to investor in eight unicorns</p>
            </div>
        </div>         

            {/* Code for featured meta start here */}
            <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">    
            <div className="right-sidebar-div-2">
                <img src={comment} alt='comment' width='18'/>
                <p>Practical effects of the October 2023 layoff</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={comment} alt='comment' width='18'/>
                <p>Update: New Colors Launched</p>
            </div>           
            <div className="right-sidebar-div-2">
                <img src={stackOverflow} alt='stackOverflown' width='18'/>
                <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
            </div>
        </div>
            {/* Code Hot Meta post start here */}
            <h4>Hot Meta Posts</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <p>38</p>
                <p>Why was this spam fleg declined, yet the question marked spam?</p>
            </div>
            <div className="right-sidebar-div-2">
                 <p>20</p>
                <p>What is the best course of action when a user has enough rep to...</p>
            </div>           
            <div className="right-sidebar-div-2">
                <p>14</p>
                <p>is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
  )
}

export default Widget
//C:\Users\Archana\ReactProject\StackOverflowClone\client\src\assets\pen.svg