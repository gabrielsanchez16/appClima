import UseClima from "../hooks/UseClima"
import { useState } from "react";
import { MdDescription } from "react-icons/md";
import {WiStrongWind,WiHumidity,WiThermometerExterior,WiThermometer,WiBarometer,WiCloudy} from 'react-icons/wi'
const Resultado = () => {

    const {resultado} = UseClima()
    const [celsius, setCelsius] = useState(true)
    const {name, main, wind, weather,clouds, sys} = resultado
    const chanceCelsius = (main?.temp - 273.15).toFixed(1);
    const changeFarenheit = (((main?.temp - 273.15 )*9) / 5 +32).toFixed(1);
    const botton = ()=>{
        if(celsius === false){
            setCelsius(true)
        }else{
            setCelsius(false)
        }
    }

    
    //grados kelvin
    const kelvin = 273.15;
  return (
    <div className="contenedor">
        <div className="sub-container">
            <h2>{name}, {sys?.country}</h2>
            <img src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`} alt="photoicono" />
            <h4>{weather[0]?.main}</h4>
            <h3>{celsius ? `${chanceCelsius} °C ` : `${changeFarenheit} °F` }</h3>
            <ul>
              <li><WiThermometer/>Temp Max: {celsius ? `${parseInt(main?.temp_max -kelvin)} °C` : `${parseInt(((main?.temp_max -273.15)*9)/5 + 32)} °F`}</li>
              <li><WiThermometerExterior/>Temp Min: {celsius ? `${parseInt(main?.temp_min -kelvin)} °C` : `${parseInt(((main?.temp_min -273.15)*9)/5 + 32)} °F`}</li>
              <li><WiBarometer/>Pressure: {parseInt(main?.pressure)} hPa</li>
              <li><WiHumidity/>Humidity: {parseInt(main?.humidity)}%</li>
              <li><WiCloudy/>Clouds: {parseInt(clouds?.all)}%</li>
              <li><WiStrongWind/>Wind Speed: {parseInt(wind?.speed)} m/s</li>
              <li><MdDescription/>Description: {weather[0]?.description}</li>
            </ul>
            <button onClick={botton}>{celsius ? "Change F°":"Change C°"}</button>
        </div>
    </div>
  )
}

export default Resultado