


const { Component } = require("react");

class WeatherApp extends Component {
    state = {
        temperature:"12",
        humidity:"13",
    };
    render() {
        return <div>
 
          <h1>Weather App</h1>
            <p>{this.state.temperature}</p>
            <p>{this.state.humidity}</p>
        </div>
    }
}
export default WeatherApp