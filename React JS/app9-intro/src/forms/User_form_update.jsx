import { Component } from "react";


export class User_form_update extends Component {

    state = {
        userdetail: {
            fname: "",
            lname: "",
            email: "",
        },

        allusers: [],
        showupdatebtn: true,
    }

    handlechange = (e) => {
        const inputname = e.target.name
        const newstate = { ...this.state }
        newstate.userdetail[inputname] = e.target.value
        this.setState(newstate)

    }

    adduser = () => {
        const newstate = { ...this.state }
        newstate.allusers.push({ ...this.state.userdetail })
        this.setState(newstate)
        this.clearform()
    }

    clearform = () => {
        const newstate = { ...this.state }
        newstate.userdetail = {
            fname: "",
            lname: "",
            email: ""
        }
        this.setState(newstate)
    }

    deleteuser = (i) => {
        const newstate = { ...this.state }
        newstate.allusers.splice(i, 1)
        this.setState(newstate)
    }

    edituser = (obj) => {
        const newstate = { ...this.state }
        newstate.userdetail = obj
        newstate.showupdatebtn=true
        this.setState(newstate)
    }

    updateuser=()=>{

    }

    render() {
        return <div>
            <h1>welcome to react js</h1>

            <form>
                <label htmlFor="">fname : </label>
                <input type="text" name="fname" value={this.state.userdetail.fname} onChange={this.handlechange} />
                <br />
                <label htmlFor="">lname : </label>
                <input type="text" name="lname" value={this.state.userdetail.lname} onChange={this.handlechange} />
                <br />
                <label htmlFor="">email : </label>
                <input type="text" name="email" value={this.state.userdetail.email} onChange={this.handlechange} />
                <br /> <br />

                {this.state.showupdatebtn ? (
                    <button type="button" onClick={this.adduser}>add user</button>
                ) : (<button type="button" onClick={this.edituser   } >update user</button>)
                }



            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>edit user</td>
                        <td>Delete user</td>

                    </tr>
                </thead>

                <tbody>
                    {this.state.allusers.map((obj, i) => {
                        return <tr>
                            <td>{obj.fname}</td>
                            <td>{obj.lname}</td>
                            <td>{obj.email}</td>
                            <td><button type="button" onClick={() => { this.edituser(obj) }} >Edit user</button></td>
                            <td><button type="button" onClick={() => { this.deleteuser(i) }}>Delete</button></td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}