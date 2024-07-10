import React from 'react'

const Login = () => {
  return (
    <div>
      <br />
      <h1>welcome to log in page</h1>
      <br />
      <div className="mb-3 row">
        <label htmlFor="" class="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email" class="form-control" id="inputEmail" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>

      <button type='button' className='btn btn-warning' >submit</button>
    </div>
  )
}

export default Login
