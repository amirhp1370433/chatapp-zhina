import React from 'react'
const Register = () => {    
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            {/* logo and form header */}
            <span className='logo'>
                cryptube
                <span className='title'>
                    register form
                </span>
            </span>
            {/* register form */}
            <form action="">
                <input type="text" placeholder='username' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <label htmlFor="file">add an avatar </label>
                <input type="file" id='file' />
                <button>
                    sign up
                </button>
            </form>
            <p>
                do you have an account ? Login 
            </p>
        </div>
    </div>
  )
}

export default Register