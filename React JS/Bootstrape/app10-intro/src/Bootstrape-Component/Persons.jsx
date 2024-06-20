import React, { useState } from "react";

const Person = () => {
    const [userDetails, setUserDetails] = useState({
        Name: '',
        Email: '',
        Password: '',
        Gender: '',
        ActiveRole: '',

    })

    const [alluser, setalluser] = useState([])

    const handleChange = (e) => {
        const newuser = { ...userDetails }
        newuser[e.target.name] = e.target.value
        setUserDetails(newuser)

    }
    const adduser = () => {
        const newalluser = [...alluser]
        newalluser.push(userDetails)
        setalluser(newalluser)
        clearform()
    }
    const editUser = (usr) => { 
        setUserDetails(usr)
    }
    const deleteUser = (index) => {
        const newalluser=alluser.filter((_,i)=> i !== index)
        setalluser(newalluser)
     }
    // const updateUser = () => {

    //  }

    const clearform = () =>{
        setUserDetails({
            Name: '',
            Email: '',
            Password: '',
            Gender: '',
            ActiveRole: '',
        })
    }

    const { name, email, password, gender, course } = userDetails


    return (
        <div>
            <br />
            <div className="container">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Student Details Form
                        </a>
                    </div>
                </nav>
                <br />
                <div className="row">

                    <div className="col-12">
                        <form>
                            <div className="input-group">
                                <span className="input-group-text"> Name</span>
                                <input type="text"
                                    aria-label="First name"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={handleChange} />
                            </div>
                            <br />

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1"
                                    className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={(e) => { handleChange(e) }}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor=""
                                    className="form-label">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={(e) => { handleChange(e) }}
                                />
                            </div>



                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Gender{" "}
                                </label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        value={gender}
                                        onChange={(e) => { handleChange(e) }}

                                    />
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        onChange={(e) => { handleChange(e) }}


                                    />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Course</label>
                                <select className="form-select"
                                 onChange={(e) => { handleChange(e) }}
                                    name="course"
                                    value={course}
                                >
                                    <option value={''}>Course</option>
                                    <option value="BSC">BSC</option>
                                    <option value="BBA">BBA</option>
                                    <option value="B.COM">B.COM</option>
                                </select>
                            </div>









                            <button type="button" 
                            className="btn btn-primary"
                            onClick={adduser}
                            >Add student details</button>

                        </form>
                    </div>

                    <div className="col-12">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Gender</th>
                                    <th>Course</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alluser.map((usr,index) => {
                                    return( <tr key={index}>
                                        <td>{usr.name}</td>
                                        <td>{usr.email}</td>
                                        <td>{usr.password}</td>
                                        <td>{usr.gender}</td>
                                        <td>{usr.course}</td>

                                        <td><button className="btn btn-primary" onClick={editUser(usr)}>Edit</button></td>
                                        <td><button className="btn btn-danger" onClick={deleteUser(index)}>Delete</button></td>

                                    </tr>
                                    )

                                })}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Person