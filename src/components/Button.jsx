import React from 'react'
import "./Button.css"
const Button = ({symbol,handleclick,color,tcolor,fsize}) => {
  return (
    <div>
      <div className="key" onClick={()=>handleclick(symbol)} style={{backgroundColor:color, color:tcolor,fontSize:fsize}}>{symbol}</div>
    </div>
  )
}

export default Button
