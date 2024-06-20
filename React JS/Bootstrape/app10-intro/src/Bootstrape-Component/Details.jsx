import React, { useState } from "react";
import { useEffect } from "react";

const Details = () => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        role: "",
        gender: "",
        subjects: [],
    }); 
    const [allUsers, setAllUsers] = useState([]);
    const [index, setIndex] = useState(null);
        
    useEffect(() => {
        const newUsers = JSON.parse(localStorage.getItem("users"));
        newUsers && setAllUsers(newUsers);
    }, []);

    const handleChange = (e) => {
        const newUser = { ...userDetails };
        newUser[e.target.name] = e.target.value;
        setUserDetails(newUser);
    };

    const addUser = () => {
        const newAllUsers = [...allUsers];
        newAllUsers.push(userDetails);
        setAllUsers(newAllUsers);
        localStorage.setItem("users", JSON.stringify(newAllUsers));
        clearForm();
    };

    const editUser = (usr, i) => {
        setUserDetails(usr);
        setIndex(i);
    };

    const deleteUser = (index) => {
        const newAllUsers = allUsers.filter((_, i) => i !== index);
        setAllUsers(newAllUsers);
        localStorage.setItem("users", JSON.stringify(newAllUsers));
        clearForm();
    };

    const updateUser = () => {
        const newUsers = [...allUsers];
        newUsers[index] = userDetails;
        setAllUsers(newUsers);
        setIndex(null);
        clearForm();
    };

    const clearForm = () => {
        setUserDetails({
            email: "",
            password: "",
            role: "",
            gender: "",
            subjects: [],
        });
    };
    // const handleCheckboxChange = (e) => {
    //     console.log(e.target.checked);
    //     const newUserDetails = { ...userDetails };
    //     if (e.target.checked) {
    //         newUserDetails.subjects.push(e.target.value);
    //     } else {
    //         newUserDetails.subjects = newUserDetails.subjects.filter((val) => {
    //             return val !== e.target.value;
    //         });
    //     }
    //     setUserDetails(newUserDetails);
    // };


    // const validate = () => {
    //     for (let a in userDetails) {
    //         if (a !== "subjects") {
    //             if (userDetails[a] === "") {
    //                 return true;
    //             }
    //         } else {
    //             if (userDetails[a].length === 0) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // };
    
    const { email, password, role, gender, subjects } = userDetails;

    return (
        <div>
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Bootstrap
                    </a>
                </div>
            </nav>
            <div className="container ">
                <div className="row ">
                    <div className="col-3 ">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    name="password"
                                    value={password}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Role{" "}
                                </label>
                                <select
                                    className="form-select"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    name="role"
                                    value={role}
                                >
                                    <option value={""}>Role</option>
                                    <option value="Front End Developer">
                                        Front End Developer
                                    </option>
                                    <option value="Back End Developer">Back End Developer</option>
                                    <option value="Tester">Tester</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Gender{" "}
                                </label>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="gender"
                                        checked={gender === "Male"}
                                        value="Male"
                                        onChange={handleChange}
                                    />
                                    <label class="form-check-label">Male</label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={gender === "Female"}
                                        onChange={handleChange}
                                    />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Subjects{" "}
                                </label>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value="HTML"
                                        name="subjects"
                                        onChange={handleCheckboxChange}
                                        checked={subjects.indexOf("HTML") > -1}
                                    />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        HTML
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value="CSS"
                                        name="subjects"
                                        onChange={handleCheckboxChange}
                                        checked={subjects.indexOf("CSS") > -1}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        CSS
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value="Javascript"
                                        name="subjects"
                                        onChange={handleCheckboxChange}
                                        checked={subjects.indexOf("Javascript") > -1}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Javascript
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value="ReactJS"
                                        name="subjects"
                                        onChange={handleCheckboxChange}
                                        checked={subjects.indexOf("ReactJS") > -1}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        ReactJS
                                    </label>
                                </div>
                            </div>
                            {index !== null ? (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={updateUser}
                                >
                                    Update User
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={addUser}
                                    disabled={validate()}
                                >
                                    Add User
                                </button>
                            )}
                        </form>
                    </div>
                    <div className="col-9">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Role</th>
                                    <th>Gender</th>
                                    <th>Subjects</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.map((usr, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{usr.email}</td>
                                            <td>{usr.password}</td>
                                            <td>{usr.role}</td>
                                            <td>{usr.gender}</td>
                                            <td>{usr.subjects}</td>
                                            <td>
                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => {
                                                        editUser(usr, i);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteUser(i)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
