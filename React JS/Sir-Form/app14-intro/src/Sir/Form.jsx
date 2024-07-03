import React from 'react'

const Form = () => {
    return (
        <div>
            <br />
            <form>
                <h1 className='formns'>Wellness Center Membership <br /> Registration Form</h1>
                <br />
                <div className="row">
                    <div className="col">
                        <label htmlFor="" className="form-label">First Name</label>
                        <input type="text" className="form-control" aria-label="First name" />
                    </div>
                    <div className="col">
                        <label htmlFor="">Last Name</label>
                        <input type="text" className="form-control" aria-label="Last name" />
                    </div>
                </div>
                <br />
                <div>
                    <label htmlFor="" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" aria-describedby="emailHelp" />
                </div>
                <br />

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button className='buttons' type="button" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
