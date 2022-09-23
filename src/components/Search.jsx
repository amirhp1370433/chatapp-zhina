import React from 'react'

const Search = () => {
  return (
    //search platform
    <div className='search'>
      <div className="searchForm">
        <input type="text"  placeholder='find a user'/>
      </div>
        <h3>
          users
        </h3>
        <div className="userChat">
          <div className="userChatInfo">
            <span>
              searched user 
            </span>
          </div>
      </div>
    </div>
  )
}

export default Search