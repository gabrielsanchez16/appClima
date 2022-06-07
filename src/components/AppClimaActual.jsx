import { useState, useEffect } from "react";
import axios from "axios";
import { MdDescription } from "react-icons/md";
import {WiStrongWind,WiHumidity,WiThermometerExterior,WiThermometer,WiBarometer,WiCloudy} from 'react-icons/wi'

const AppClimaActual = () => {

    
    
    const [latLon, setLatLon] = useState()
    const [weat, setWeat] = useState()
    const [celsius, setCelsius] = useState(true)

  //grados kelvin
    const kelvin = 273.15;

    useEffect(() => {
    
        const success = pos =>{
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            setLatLon({lat, lon})
        }
    
        navigator.geolocation.getCurrentPosition(success);
    }, [])
    
    useEffect(() => {
        if(latLon != undefined){
            const appKey = import.meta.env.VITE_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${appKey}`
    
            axios.get(url)
            .then(res=> setWeat(res.data))
    
            .catch(err => console.log(err))

            
        }
        console.log(weat)
    }, [latLon])

    const chanceCelsius = (weat?.main.temp - 273.15).toFixed(1);
    const changeFarenheit = (((weat?.main.temp - 273.15 )*9) / 5 +32).toFixed(1);
    const botton = ()=>{
        if(celsius === false){
            setCelsius(true)
        }else{
            setCelsius(false)
        }
    }

return (
    <div className=" contenedor">
         <div className="sub-container">
            <h2>{weat?.name}, {weat?.sys.country}</h2>
            <img src={weat &&`http://openweathermap.org/img/wn/${weat.weather[0].icon}@2x.png`} alt="photoicono" />
            <h4>{weat?.weather[0].main}</h4>
            <h3>{celsius ? `${chanceCelsius} °C ` : `${changeFarenheit} °F` } </h3>
            <ul>
                <li><WiThermometer/>Temp Max: {celsius ? `${parseInt(weat?.main.temp_max -kelvin)} °C` : `${parseInt(((weat?.main.temp_max -273.15)*9)/5 + 32)} °F`}</li>
                <li><WiThermometerExterior/>Temp Min: {celsius ? `${parseInt(weat?.main.temp_min -kelvin)} °C` : `${parseInt(((weat?.main.temp_min -273.15)*9)/5 + 32)} °F`}</li>
                <li><WiBarometer/>Pressure: {parseInt(weat?.main.pressure)} hPa</li>
                <li><WiHumidity/>Humidity: {parseInt(weat?.main.humidity)}%</li>
                <li><WiCloudy/>Clouds: {parseInt(weat?.clouds?.all)}%</li>
                <li><WiStrongWind/>Wind Speed: {parseInt(weat?.wind?.speed)} m/s</li>
                <li><MdDescription/>Description: {weat?.weather[0].description}</li>
            </ul>
            <button className="button-change" onClick={botton}>{celsius ? "Change F°":"Change C°"}</button>
        </div>
    </div>
)
}

export default AppClimaActual