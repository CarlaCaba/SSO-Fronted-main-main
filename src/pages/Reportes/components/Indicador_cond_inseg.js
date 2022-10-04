import React from 'react';
import '../../Reportes/Reportes.css'
import estadistica from '../../Reportes/components/estadistica.png'
import logo from '../../Reportes/components/logo_login.png'

import 'bootstrap/dist/css/bootstrap.min.css';




const Indicador_cond_inseg = () => {

    return (

        <div className=''>
          <div className='encabezado'>
            <div className='logoprovincia'>
            <img src={logo} width={'100%'} height={'100%'}/>
            </div>
    
            <div className='tituloreporte'>
            <p>GOBIERNO AUTÓNOMO DESCENTRALIZADO MUNICIPAL DEL CANTÓN RIOBAMBA </p>
            <p>SUBPROCESO DE DESARROLLO INSTITUCIONAL  </p>
            <p>INDICADORES DE GESTIÓN </p>
        </div>
          </div>
          <div className='botton'>
      </div>
     
        <div className='divisor'>
          
        </div>
    
        <br></br>
        <div className='indicInseg'> <h5>Indicador de Condiciones Inseguras</h5></div>
        <br/>
        <div className='informacion'>
          

        </div>
        <br></br>
        <div className='table-resposive'>
        <div class="p-2 mb-1 bg-dark text-white text-center">
          INFORMACIÓN DEL INDICADOR 
          </div><br></br>
        <div class="p-2 mb-1 bg-dark text-white text-center">
          DATOS DEL INDICADOR 
          </div>
          <table className='table table-bordered'>
            
            <thead>
              <tr className='table-dark'>
              
                <th>ID</th>
                <th>MES</th>
                <th>NUMERADOR</th>
                <th>DENOMINADOR</th>
                <th>RESULTADOS</th>
                <th>ANALISIS DE CAUSAS</th>
                <th>ACCIONES PROPUESTAS</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Enero</td>
                <td>16</td>
                <td>16</td>
                <td>100%</td>
                <td>Planificacion</td>
                <td>Planificacion</td>

              </tr>
              <tr>
                <td>2</td>
                <td>Febrero</td>
                <td>90</td>
                <td>108</td>
                <td>83.33%</td>
                <td></td>
                <td></td>

              </tr>
             
              <tr>
                <td>3</td>
                <td>Marzo</td>
                <td>51</td>
                <td>53</td>
                <td>96,23%</td>
                <td></td>
                <td></td>

              </tr>
              <tr>
                <td>4</td>
                <td>Abril</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                

              </tr>
              <tr>
                <td>5</td>
                <td>Mayo</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                

              </tr>
              <tr>
                <td>6</td>
                <td>Junio</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                

              </tr>
              <tr>
                <td>7</td>
                <td>Julio</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                

              </tr>
              <tr>
                <td>8</td>
                <td>Agosto</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                

              </tr>
              <tr>
                <td>9</td>
                <td>Septiembre</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                

              </tr>
              <tr>
                <td>10</td>
                <td>Octubre</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                

              </tr>
              <tr>
                <td>11</td>
                <td>Noviembre</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                

              </tr>
              <tr>
                <td>12</td>
                <td>Diciembre</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>                

              </tr>

            </tbody>

          </table>
        </div>
        
        
        <div class="p-2 mb-1 bg-dark text-white text-center">
          GRAFICA 
          </div>
    
    <br></br>
    
  
          
    
          <br></br>
          
       
          
        <div className='piepagina'>
          <p>MUNICIPIO DE RIOBAMBA- ESPOCH</p>
    
        </div> 
          
     
      
      </div>   
    
    
      );
    
}

export default Indicador_cond_inseg;
  