import { useState, useEffect } from "react";
import axios from "axios";
import { MdDescription } from "react-icons/md";
import {WiStrongWind,WiHumidity,WiThermometerExterior,WiThermometer,WiBarometer,WiCloudy} from 'react-icons/wi'

const AppClimaActual = () => {

    
    
    const [latLon, setLatLon] = useState()
    const [weat, setWeat] = useState()

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
    }, [latLon])
console.log(weat);

return (
    <div className=" contenedor">
         <div className="sub-container">
            <h2>{weat?.name}</h2>
            <img src={`http://openweathermap.org/img/wn/${weat?.weather[0].icon}@2x.png`} alt="photoicono" />
            <h3>{parseInt(weat?.main.temp - kelvin)} <span>&#x2103;</span></h3>
            <ul>
                <li><WiThermometer/>Temp Max: {parseInt(weat?.main.temp_max -kelvin)}<span>&#x2103;</span></li>
                <li><WiThermometerExterior/>Temp Min: {parseInt(weat?.main.temp_min - kelvin)}<span>&#x2103;</span></li>
                <li><WiBarometer/>Pressure: {parseInt(weat?.main.pressure)} hPa</li>
                <li><WiHumidity/>Humidity: {parseInt(weat?.main.humidity)}%</li>
                <li><WiCloudy/>Clouds: {parseInt(weat?.clouds?.all)}%</li>
                <li><WiStrongWind/>Wind Speed: {parseInt(weat?.wind?.speed)} m/s</li>
                <li><MdDescription/>Description: {weat?.weather[0].description}</li>
            </ul>
        </div>
    </div>
)
}

export default AppClimaActual