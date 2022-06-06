import UseClima from "../hooks/UseClima"
import { useState } from "react";

const Formulario = () => {

    const [alerta, setAlerta] = useState("")
    const {busqueda, datosBusqueda, consultarClima} = UseClima()

    const {ciudad, pais} = busqueda;

    const handleSubmit = e =>{
        e.preventDefault();
        if(Object.values(busqueda).includes("")){
            setAlerta("todos los campos son obligatorios")
            return
        }else{
            setAlerta("Buscando Clima...");

        }
        consultarClima(busqueda)
    }

  return (
    <div className='contenedor contenedor1'>
        {alerta && <p>{alerta}</p>}
        <form
            onSubmit={handleSubmit}
        >
            <div className='campo'>
                <label htmlFor='ciudad'>City</label>
                <input 
                    type="text"
                    name="ciudad" 
                    id="ciudad" 
                    onChange={datosBusqueda}
                    value={ciudad}
                />
            </div>
            <div className='campo'>
                <label htmlFor='pais'>Country</label>
                <select 
                name="pais" 
                id="pais"
                onChange={datosBusqueda}
                value={pais}
                >
                <option value="">Select a country</option>
                <option value="MX">Mexico</option>
                <option value="CO">Colombia</option>
                <option value="VE">Venezuela</option>
                <option value="PE">Peru</option>
                <option value="US">State United</option>
                <option value="AR">Argentina</option>
                <option value="ES">Spain</option>
                <option value="CR">Costa Rica</option>
                <option value="CL">Chile</option>
                <option value="CU">Cuba</option>
                <option value="BR">Brasil</option>
                <option value="BO">Bolivia</option>
                <option value="EC">Ecuador</option>
                <option value="PA">Panama</option>
                <option value="UY">Uruguay</option>
                <option value="FR">France</option>
                <option value="DO">Republica Dominicana</option>
                <option value="DE">Germany</option>
                <option value="AU">Australia</option>
                <option value="CA">Canadese</option>
                </select>
            </div>
            <div className="input-div">
                <input 
                    type="submit"
                    value = "Consultar Clima"
                />
            </div>
        </form>
    </div>
  )
}

export default Formulario