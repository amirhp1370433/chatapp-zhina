import React from 'react'

const Login = () => {
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
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button>
                sign in
            </button>
        </form>
        <p>
           you do'nt have an account ? Register
        </p>
    </div>
</div>
  )
}

export default Login