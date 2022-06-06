import Formulario from './Formulario'
import Resultado from './Resultado'
import UseClima from '../hooks/UseClima'
import Loading from './Loading'
import AppClimaActual from './AppClimaActual'
const AppClima = () => {
    
  const {resultado, cargando, noResultado} = UseClima()

  return (
    <>
      <main>
        <AppClimaActual/>
        <Formulario/>
          {cargando ? <Loading/> :
          resultado?.name ? <Resultado/> :
          noResultado ? <p>{noResultado}</p>
        : <p>El clima se va a mostrar aqui</p> }
      </main>
    </>
  )
}

export default AppClima