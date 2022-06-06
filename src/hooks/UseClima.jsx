import { useContext } from "react";
import ClimaContext from "../context/ClimaProvider";

const UseClima = () => {

    return useContext(ClimaContext);
}

export default UseClima