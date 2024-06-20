import React, { useState } from "react";
import { useEffect } from "react";

const Quick_Contact = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    investment: "",
    dateofjoined: "",
    active: [],
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
      name: "",
      email: "",
      investment: "",
      dateofjoined: "",
      active: [],
    });
  };

  const validate = () => {
    for (let a in userDetails) {
      if (a !== "subjects") {
        if (userDetails[a] === "") {
          return true;
        }
      } else {
        if (userDetails[a].length === 0) {
          return true;
        }
      }
    }
    return false;
  };
  const { name, email, investment, dateofjoined, active } = userDetails;

  return (
    <div>
      <h1>Quick_Contact - Application</h1>
      <br />
      <br />

      <div className="container ">
        <div className="row ">
          <div className="col-3 ">
            <form>
              <div className="mb-3">
                <input
                  type="name"
                  className="form-control"
                  name="name"
                  value={name}
                  placeholder="Your name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="email"
                  value={email}
                  placeholder="Your Email Address"
                />
              </div>
              <div className="mb-3">
                <input
                  type="dateofjoined"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="dateofjoined"
                  value={dateofjoined}
                  placeholder="Your phone Number"
                />
              </div>
              <div className="mb-3">
                <input
                  type="investment"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="investment"
                  value={investment}
                  placeholder="Your Web Site Starts With http://"
                />
              </div>
              <div className="mb-3">
                <input
                  type="active"
                  className="form-control"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="active"
                  value={active}
                  placeholder="Type Your messege here "
                />
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
                  Submit
                </button>
              )}
            </form>
          </div>
          <div className="col-9">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Investment</th>
                  <th>Date Of Joined</th>
                  <th>Active</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((usr, i) => {
                  return (
                    <tr key={i}>
                      <td>{usr.name}</td>
                      <td>{usr.email}</td>
                      <td>{usr.investment}</td>
                      <td>{usr.dateofjoined}</td>
                      <td>{usr.active}</td>
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

export default Quick_Contact;
