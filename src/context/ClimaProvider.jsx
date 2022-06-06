import { useState, createContext , useEffect} from "react"
import axios from 'axios'

const ClimaContext = createContext()


const ClimaProvider = ({children}) => {


    const [busqueda, setBusqueda] = useState({
        ciudad:"",
        pais:""
    })

    const [resultado ,setResultado] = useState({})
    const [cargando ,setCargando] = useState(false)
    const [noResultado, setNoReseultado] = useState(false)





    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

const consultarClima = async datos => {
    setCargando(true)
    setNoReseultado(false)
    try {
        const {ciudad, pais} = datos;
        
        const appId = import.meta.env.VITE_API_KEY;

        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

        const { data } = await axios(url)
        const {lon, lat } = data[0];
        

        const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
        
        const {data:clima} = await axios(urlClima)
        setResultado(clima)
        

    } catch (error) {
        setNoReseultado("No se encontro la ciudad")
        console.log(error);
    } finally{
        setCargando(false);
    }
}


return (
    <ClimaContext.Provider
        value={{
            busqueda,
            datosBusqueda,
            consultarClima,
            resultado,
            cargando,
            noResultado
            
        }}
    >
        {children}
    </ClimaContext.Provider>
  )
}


export {
    ClimaProvider
} 

export default ClimaContext