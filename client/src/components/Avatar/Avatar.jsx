import React from 'react'

const Avatar = ({children,backgroundColor, padding, color, borderRadius,textAlign, fontSize, cursor, px,py}) => {
  const style={
    backgroundColor,
    padding:`${py} ${px}`,
    color:color||"black",
    borderRadius,
    fontSize:"20px",
    textAlign:"center",
    textDecoration:"none", 
    
  }
  return (
    <div style={style}>{children}</div>
  )
}

export default Avatar