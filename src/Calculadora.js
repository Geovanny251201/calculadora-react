import React, { useState } from 'react';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FiDelete } from 'react-icons/fi';

function Calculadora() {
  const [displayValue, setDisplayValue] = useState('');
  const [inputHistory, setInputHistory] = useState('');
  const [result, setResult] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleInput = (input) => {
    const newDisplayValue =
      displayValue.slice(0, cursorPosition) + input + displayValue.slice(cursorPosition);
    setDisplayValue(newDisplayValue);
    setInputHistory(inputHistory + input);
    setCursorPosition(cursorPosition + 1);
  };

  const handleDeleteClick = () => {
    if (cursorPosition > 0) {
      const newDisplayValue =
        displayValue.slice(0, cursorPosition - 1) + displayValue.slice(cursorPosition);
      setDisplayValue(newDisplayValue);
      setInputHistory(inputHistory.slice(0, cursorPosition - 1) + inputHistory.slice(cursorPosition));
      setCursorPosition(cursorPosition - 1);
    }
  };

  const handleEqualClick = () => {
    try {
      const result = eval(inputHistory);
      setResult(result.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('');
    setInputHistory('');
    setResult('');
  };

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center filaMedio'>
          <div className='col-12 justify-content-center d-flex'>
            <div className='calculator fondoCalculadora'>
              <div className='row justify-content-center mt-5'>
                <div className='col-12  justify-content-center d-flex'>
                  <div className='row'>
                    <div className=' contenedor-inputs d-flex flex-column'>
                      <input
                        autoFocus
                        className=' mt-4 salida'
                        value={displayValue}
                        onChange={(e) => setDisplayValue(e.target.value)}
                        style={{ border: 'none', outline: 'none', background: 'transparent', caretColor: 'white' }}
                      />
                      <input
                        className=' mt-2 salida-resultado'
                        value={result}
                        onChange={(e) => setResult(e.target.value)}
                        style={{ border: 'none', outline: 'none', background: 'transparent', caretColor: 'white' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row d-flex justify-content-end text-align-center'>
                <div className='col-12 d-flex justify-content-end'>
                  <button style={{ width: '50px', height: '50px' }} className='btn btn-danger me-3' onClick={handleDeleteClick}>
                    <FiDelete />
                  </button>
                </div>
              </div>
              <div className='row justify-content-center mt-3'>
                <div className='col-12  justify-content-center d-flex'></div>
              </div>
              <div className='buttons'>
                <button className='btnNumeros btnStyle' onClick={() => handleInput('1')}>
                  1
                </button>
                <button className='btnNumeros btnStyle' onClick={() => handleInput('2')}>
                  2
                </button>
                <button className='btnNumeros btnStyle' onClick={() => handleInput('3')}>
                  3
                </button>
                <button className='btnNumeros btnOperations' onClick={() => handleInput('+')}>
                  +
                </button>
                <button className='btnNumeros btnStyle' onClick={() => handleInput('4')}>
                  4
                </button>
                <button className='btnNumeros btnStyle' onClick={() => handleInput('5')}>
                  5
                </button>
                <button className='btnNumeros btnStyle' onClick={() => handleInput('6')}>
                  6
                </button>
                <button className='btnNumeros btnOperations' onClick={() => handleInput('-')}>
                  -
                </button>
                <button className='btnNumeros btnStyle' onClick={() => handleInput('7')}>
                  7
                </button>
                <button className='btnNumeros btnStyle' onClick={() => handleInput('8')}>
                  8
                </button>
                <button className='btnNumeros btnStyle' onClick={() => handleInput('9')}>
                  9
                </button>
                <button className='btnNumeros btnOperations' onClick={() => handleInput('*')}>
                  *
                </button>
                <button className='btnNumeros btnClear bg-red' onClick={() => handleClearClick()}>
                  C
                </button>
                <button className='btnNumeros btnStyle' onClick={() => handleInput('0')}>
                  0
                </button>
                <button className='btnNumeros btnIgual' onClick={() => handleEqualClick()}>
                  =
                </button>
                <button className='btnNumeros btnOperations' onClick={() => handleInput('/')}>
                  /
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculadora;
