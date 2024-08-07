import React from 'react'
import "./Screen.css"
const Screen = ({result,text}) => {
  return (
    <div className='screen'>
      <div className='calc'>
        {text.join('')}
      </div>
      <div className="res">
        {result}
      </div>
    </div>
  )
}

export default Screen
