import Formulario from './Formulario'
import Resultado from './Resultado'
import UseClima from '../hooks/UseClima'
import Loading from './Loading'
import AppClimaActual from './AppClimaActual'
const AppClima = () => {
    
  const {resultado, cargando} = UseClima()

  return (
    <>
      <main className="dos-columnas">
        <AppClimaActual/>
        <Formulario/>
          {cargando ? <Loading/> :
          resultado?.name && <Resultado/>}
      </main>
    </>
  )
}

export default AppClima