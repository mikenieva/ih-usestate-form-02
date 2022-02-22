import './App.css';
import Header from './components/Layout/Header'
import Main from './components/Main/Main';

function App() {
  // TODO RETORNO CON JSX QUE HAGAS, DEBE DE TENER UNA ÚNICA ETIQUETA QUE ENVUELVA AL CONTENIDO
  return (
    // <> -> ESTE CONCEPTO SE LE CONOCE COMO FRAGMENTO
    <> 
        <Header />
        <Main />
    </>
  );
}

export default App;
