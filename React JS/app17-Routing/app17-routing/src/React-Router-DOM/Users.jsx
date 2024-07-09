import React, { useEffect, useState } from 'react'

const Users = () => {
    const [usersdetail, setusersdetails] = useState([])
    useEffect(() => {
        getuser()
    }, [])

    const getuser = async () => {
        const response =await (await fetch("https://jsonplaceholder.typicode.com/users").then())
        const users = await response.json()
        setusersdetails(users)
    }
    return (
        <div>
            {usersdetail.map((usr, i) => <p key={i}>{usr.email}</p>)}
        </div>
    )
}

export default Users
