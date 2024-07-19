import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getuserfromserver } from './UsersSlice'

const Userscomponent = () => {
    const dispatch = useDispatch()
    const userdetails = useSelector((state)=>state.usersstate.users)
    console.log(userdetails)
    const handlegetusers = () => {
        dispatch(getuserfromserver())
    }
    return (
        <div>
            <button onClick={handlegetusers}>get users</button>
        </div>
    )
}

export default Userscomponent
