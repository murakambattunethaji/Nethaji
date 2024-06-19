import { Component } from "react";



export class User_Class_Component extends Component {

    

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">name : </label>
                    <input type="text" name="names" /> <br />
                    <label htmlFor="">email : </label>
                    <input type="email" name="email" /> <br />
                    <label htmlFor="">number : </label>
                    <input type="number" name="number" /> <br />

                </form>

                <table border={1}>

                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>number</th>
                            <th>edit btn</th>
                            <th>delete btn</th>
                        </tr>
                    </thead>

                    <tbody>

                    </tbody>


                </table>


            </div>
        )
    }
}