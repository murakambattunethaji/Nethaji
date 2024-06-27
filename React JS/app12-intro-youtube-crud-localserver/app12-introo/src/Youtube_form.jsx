import React from 'react'

const Youtube_form = ({handlechange,user,createUser}) => {
    return (
        <div>
            <br />
            <form>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <input

                        type="text"
                        name='name'
                        className="form-control"
                        value={user.name}
                        onChange={handlechange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input

                        type="email"
                        className="form-control"
                        name='email'
                        value={user.email}
                        onChange={handlechange}

                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input

                        type="password"
                        name='password'
                        className="form-control"
                        value={user.password}
                        onChange={handlechange}


                    />
                </div>



                <button type="button" className="btn btn-primary" onClick={createUser}>Add user</button>

            </form>

        </div>
    )
}

export default Youtube_form
