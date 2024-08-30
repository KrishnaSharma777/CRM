import React, { useState } from 'react'

function ColorChange() {
const [color , setColor ]= useState();
  const handelColorChange=(event)=>{
    setColor(event.target.value)
  }

  return (
    <div className='color-picker-container'>ColorChange
        <div className='color-display' style={{backgroundColor:color}} >
            <p >selected color:{color}</p>
        </div>
        <label>selected color:</label>
        <input type='color' value={color} onChange={handelColorChange}></input>
    </div>

    
  )
}

export default ColorChange