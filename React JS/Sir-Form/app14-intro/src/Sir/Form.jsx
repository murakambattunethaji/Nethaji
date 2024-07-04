import React from 'react'

const Form = (handlechange,user) => {
    return (
        <div>
            <br />
            <form>
                <h1 className='formns'>Wellness Center Membership <br /> Registration Form</h1>
                <br />
                <div className="row">
                    <div className="col">
                        <label htmlFor="" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={ user.fname}
                            name='fname'
                            onChange={ handlechange}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="">Last Name</label>
                        <input type="text"
                            className="form-control"
                            value={user.lname }
                            name='lname'
                            onChange={ handlechange}
                        />
                    </div>
                </div>
                <br />
                <div>
                    <label htmlFor="" className="form-label">Date of Birth</label>
                    <input type="date"
                        className="form-control"
                        value={user.dob }
                        name='dob'
                        onChange={ handlechange}
                    />
                </div>
                <br />

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                        className="form-control"
                        value={user.email }
                        name='email'
                        onChange={handlechange }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        value={user.password }
                        name='password'
                        onChange={handlechange }
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox"
                        className="form-check-input"
                        value={user.checked }
                        name='checked'
                        onChange={handlechange }
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button className='buttons' type="button" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
