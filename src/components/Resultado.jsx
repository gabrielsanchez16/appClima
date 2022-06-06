import UseClima from "../hooks/UseClima"
import { MdDescription } from "react-icons/md";
import {WiStrongWind,WiHumidity,WiThermometerExterior,WiThermometer,WiBarometer,WiCloudy} from 'react-icons/wi'
const Resultado = () => {

    const {resultado} = UseClima()
    const {name, main, wind, weather,clouds} = resultado
    
    
    //grados kelvin
    const kelvin = 273.15;
  return (
    <div className="contenedor">
        <div className="sub-container">
            <h2>{name}</h2>
            <img src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`} alt="photoicono" />
            <h3>{parseInt(main?.temp - kelvin)} <span>&#x2103;</span></h3>
            <ul>
                <li><WiThermometer/>Temp Max: {parseInt(main?.temp_max -kelvin)}<span>&#x2103;</span></li>
                <li><WiThermometerExterior/>Temp Min: {parseInt(main?.temp_min - kelvin)}<span>&#x2103;</span></li>
                <li><WiBarometer/>Pressure: {parseInt(main?.pressure)} hPa</li>
                <li><WiHumidity/>Humidity: {parseInt(main?.humidity)}%</li>
                <li><WiCloudy/>Clouds: {parseInt(clouds?.all)}%</li>
                <li><WiStrongWind/>Wind Speed: {parseInt(wind?.speed)} m/s</li>
                <li><MdDescription/>Description: {weather[0]?.description}</li>
            </ul>
        </div>
    </div>
  )
}

export default Resultado