
import '../../WeatherForecast.css'
import '../../App.jsx'

const WeatherForecast = (weatherForecasts) => {

    return (
        <div className="weather">
            <h2>{weatherForecasts.day}</h2>
            <img src="" alt="" />
            <p><span>conditions: </span>{weatherForecasts.conditions}</p>
            <p><span>time: </span>{weatherForecasts.time}</p>
        </div>

    )


}
export default WeatherForecast;