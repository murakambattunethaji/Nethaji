import { Component } from "react";


export class User_form_new extends Component {

    state = {
        userdetails: {
            fname: "",
            lname: "",
            email: "",
        },
        allusers: [],
    }

    handlechange = (e) => {
        const inputname = e.target.name
        const newstate = { ...this.state }
        newstate.userdetails[inputname]=e.target.value
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

    render() {
        return <div>

            <h1>welcome to react js</h1>
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
                <button type="button" onClick={this.adduser}>add user</button>
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
                    {this.state.allusers.map((obj) => {
                        return (
                            <tr>
                                <td>{obj.fname}</td>
                                <td>{obj.lname}</td>
                                <td>{obj.email}</td>
                                <td><button type="button" onClick={()=>{}}>edit btn</button></td>
                                <td><button type="button" onClick={()=>{}}>delete btn</button></td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

        </div>


    }
}