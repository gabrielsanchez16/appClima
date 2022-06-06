import AppClima from "./components/AppClima"
import {ClimaProvider} from './context/ClimaProvider'


function App() {
 

  return (
    <ClimaProvider>
      <header>
        <h1>App Clima</h1>
      </header>
      <AppClima/>
    </ClimaProvider>
    
  )
}

export default App
