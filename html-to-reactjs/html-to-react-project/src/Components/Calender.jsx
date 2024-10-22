import { Component } from "react";


export class Calender extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>Calender</h1>
                <div class="hero">
                    <div class="calender">
                        <div class="left">
                            <p id="date">01</p>
                            <p id="day">Sunday</p>
                        </div>
                        <div class="right">
                            <p id="month">January</p>
                            <p id="year">2024</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 