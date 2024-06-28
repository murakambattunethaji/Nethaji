import React from 'react'

const Youtube_table = ({alluser,edituser,deleteUser}) => {
    return (
        <div>
            <br /> <br />

            <table className="table table-success table-striped">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Edit User</th>
                        <th>Delete user</th>
                    </tr>
                </thead>

                <tbody>
                   {alluser.map((usr,i)=>{
                    return <tr key={i}>
                        <td>{usr.name}</td>
                        <td>{usr.email}</td>
                        <td>{usr.password}</td>
                        <td><button className='btn btn-primary' onClick={()=>{edituser(usr)}}>edit</button></td>
                        <td><button className='btn btn-danger' onClick={()=>{deleteUser(usr)}}>delete</button></td>
                    </tr>
                   })}
                </tbody>

            </table>
        </div>
    )
}

export default Youtube_table
