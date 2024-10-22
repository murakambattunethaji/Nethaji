import { Component } from "react";

export class Digitalclock extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>Digital Clock</h1>
                <div class="hello">
                    <div class="container">
                        <div class="clock">
                            <span id="hrs">00</span>
                            <span>:</span>
                            <span id="min">00</span>
                            <span>:</span>
                            <span id="sec">00</span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}