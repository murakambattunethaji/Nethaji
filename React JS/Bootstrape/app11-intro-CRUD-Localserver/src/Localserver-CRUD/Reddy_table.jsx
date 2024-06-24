import React from "react";

const Reddytable = ({ allUsers, editUser, deleteUser }) => {
    return (
        <div className="col-12">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>password</th>

                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((usr, i) => {
                        return <tr key={i}>
                            <td>{usr.name}</td>
                            <td>{usr.email}</td>
                            <td>{usr.password}</td>



                            <td>
                                <button className="btn btn-warning" onClick={() => { editUser(usr) }}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { deleteUser(usr) }}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Reddytable
