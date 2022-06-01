import React from 'react';
import './App.css';

// function Helloword(props){
//   return(
//     <div id="hola">
//     <h3>{props.subtitulo}</h3>
//     {props.mitexto}</div>
//   )
// }

class Helloworld extends React.Component {
  render(){
    return(
      <div id="hola">
      <h3>{this.props.subtitulo}</h3>
          {this.props.mitexto}</div>
    ) 
  }
    
}

//const App = () => <div>Este es mi primer componente con una funcion flecha <Helloword/></div>

function App() {

  return (
    <div>
      Este es mi primer componente: <Helloworld mitexto="Hola joselias" subtitulo="Mi nombre es:"/> <Helloworld mitexto="Esta es mi primera SPA" subtitulo="Que estoy desarrollando"/> <Helloworld mitexto="aplicaciones de una sola pagina" subtitulo="SPA:"/>
    </div>
  );
}

export default App;
