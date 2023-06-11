import logo from './logo.svg';
import './App.css';
import Calculadora from './Calculadora'
import fondo from './svg/fondo.svg'
import './css/styles.css'



function App() {
  return (
    <div  style={{
      backgroundImage: `url(${fondo})` }} className='fondo'>
      <Calculadora/>
    </div>
   
  );
}

export default App;
