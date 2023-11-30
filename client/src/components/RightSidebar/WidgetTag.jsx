import React from 'react'

const WidgetTag = () => {
    const tags=['c','css','express','firebase','html','java','javascript','mern','mongobd','mySQL','next.js','node.js','php','python','react']
  return (
    <div className='widget-tags'>
      <h4>Watched Tags</h4>
      <div className="widget-tags-div">
        {
          tags.map((tag)=>(
            <p key={tag}>{tag}</p>
          )          
        )}
      </div>
    </div>
  )
}

export default WidgetTag