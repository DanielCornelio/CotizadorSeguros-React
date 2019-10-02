import React, {Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {
  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;
    //agregar una base de 2000
    let resultado=2000;
    //obtener la diferencia de años y
    const diferencia = obtenerDiferenciaAnio(year);
    // por cada año restar 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;
    //americano 15 asiatico 5 europeo 30 de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;
    //plan de auto basico incrementa el valos 20% el completo 50%
    let incrementoPlan = obtenerPlan(plan);
    //dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    console.log(resultado);
  }
  render(){
    return (
      <div className="contenedor">
        <Header
          titulo="Cotizador de Seguros de Autos"
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro = {this.cotizarSeguro}
          />
        </div>
      </div>
    
    );
  }
}

export default App;
