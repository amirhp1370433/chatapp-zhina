import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something ... ' />
      <div className="send">
        <label htmlFor="file" style={{cursor:"pointer"}}>
          img
        </label>
        <input type="file" id='file' style={{display:'none'}}/>
      </div>
     </div>
  )
}

export default Input