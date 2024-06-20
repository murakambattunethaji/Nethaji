import React, { useEffect, useState } from "react";

const Nethaji = () => {
    const [userDetails, setUserDetails] = useState({
        Name: '',
        Email: '',
        Password: '',
        Gender: '',
        Course: '',

    })

    const [alluser, setalluser] = useState([])
    const [index, setIndex] = useState(null)

    useEffect(() => {
        const newuser = JSON.parse(localStorage.getItem("users"))
        newuser && setalluser(newuser)
    }, [])

    const handleChange = (e) => {
        const newuser = { ...userDetails }
        newuser[e.target.name] = e.target.value
        setUserDetails(newuser)

    }
    const adduser = () => {
        const newalluser = [...alluser]
        newalluser.push(userDetails)
        setalluser(newalluser)
        localStorage.setItem("users", JSON.stringify(newalluser))
        clearform()
    }
    const editUser = (usr, i) => {
        setUserDetails(usr)
        setIndex(i)
    }
    const deleteUser = (index) => {
        const newalluser = alluser.filter((_, i) => i !== index)
        setalluser(newalluser)
        localStorage.setItem("users", JSON.stringify(newalluser))
        clearform()
    }
    const updateUser = () => {
        const newuser = [...alluser]
        newuser[index] = userDetails
        setalluser(newuser)
        setIndex(null)
        clearform()
    }

    const clearform = () => {
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
                            Nethaji Form
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
                                    onChange={(e)=>{
                                        handleChange(e)
                                        }} />
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
                                        checked={gender==="male"}
                                        value="male"
                                        onChange={handleChange}

                                    />
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={gender==="female"}
                                        onChange={ handleChange}


                                    />
                                    <label className="form-check-label"
                                        for="flexRadioDefault2">
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



                           {index !== null ?(
                               <button type="button"
                               className="btn btn-primary"
                               onClick={updateUser}
                               
                               >
                                updateUser
                               </button>
                           ):(
                                 <button
                                 type="button"
                                 className="btn btn-primary"
                                 onClick={adduser}
                                 
                                 >
                                    add user
                                 </button>
                           )}





                            {/* <button type="button"
                                className="btn btn-primary"
                                onClick={adduser}
                            >Add student details</button> */}

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
                                {alluser.map((usr, i) => {
                                    return (<tr key={i}>
                                        <td>{usr.name}</td>
                                        <td>{usr.email}</td>
                                        <td>{usr.password}</td>
                                        <td>{usr.gender}</td>
                                        <td>{usr.course}</td>

                                        <td><button className="btn btn-primary"
                                         onClick={()=>{
                                            editUser(usr,i)}}>Edit</button></td>

                                        <td><button className="btn btn-danger"
                                         onClick={()=>
                                           deleteUser(i)
                                         }>Delete</button></td>

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

export default Nethaji