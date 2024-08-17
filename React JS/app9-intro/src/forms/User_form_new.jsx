import { Component } from "react";


export class User_form_new extends Component {

    state = {
        userdetails: {
            fname: "",
            lname: "",
            email: "",
        },
        allusers: [],
        showupdatebtn:true,
    }

    handlechange = (e) => {
        const inputname = e.target.name
        const newstate = { ...this.state }
        const newstateobj={...this.state.userdetails}
        newstateobj[inputname]=e.target.value
        newstate.userdetails=newstateobj
        this.setState(newstate)
    }

    adduser = () => {
        const newstate = { ...this.state }
        newstate.allusers.push({ ...this.state.userdetails })
        this.setState(newstate)
        this.clearform()
    }

    clearform=()=>{
        const newstate = {...this.state}
        newstate.userdetails = {
            fname: "",
            lname: "",
            email: "",
        }
        this.setState(newstate)
    }

    deleteuser=(i)=>{
        const newstate = {...this.state}
        newstate.allusers.splice(i,1)
        this.setState(newstate)
    }

    edituser=(obj)=>{
        const newstate = {...this.state}
        newstate.userdetails = obj
        newstate.showupdatebtn=false
        this.setState(newstate)
    }

    updateuser=()=>{
        
    }

    render() {
        return <div>

            <h1>Welcome to React js</h1>
            <form>
                <label htmlFor="">fname : </label>
                <input type="text" name="fname" value={this.state.userdetails.fname} onChange={this.handlechange} />
                <br />
                <label htmlFor="">lname : </label>
                <input type="text" name="lname" value={this.state.userdetails.lname} onChange={this.handlechange} />
                <br />
                <label htmlFor="">email : </label>
                <input type="text" name="email" value={this.state.userdetails.email} onChange={this.handlechange} />
                <br /> <br />
                
                {this.state.showupdatebtn ?(
                    <button type="button" onClick={this.adduser}>add user</button>
                ):(
                    <button type="button" onClick={this.edituser}>update user</button>
                )}
            </form>


            <table border={1}>

                <thead>
                    <td>fname</td>
                    <td>lname</td>
                    <td>email</td>
                    <td>edit user</td>
                    <td>delete user</td>
                </thead>

                <tbody>
                    {this.state.allusers.map((obj,i) => {
                        return (
                            <tr>
                                <td>{obj.fname}</td>
                                <td>{obj.lname}</td>
                                <td>{obj.email}</td>
                                <td><button type="button" onClick={()=>{this.edituser(obj)}}>edit btn</button></td>
                                <td><button type="button" onClick={()=>{this.deleteuser(i)}}>delete btn</button></td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

        </div>


    }
}