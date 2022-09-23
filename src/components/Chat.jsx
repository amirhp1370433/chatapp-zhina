import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>
          amirsade
        </span>
        <div className="chatIcons">
           <span>
            cam 
           </span>
           <span>
            add 
           </span>
           <span>
            more 
           </span>
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat