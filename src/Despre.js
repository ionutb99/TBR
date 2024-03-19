import React from 'react';
import tineri from "./Fundal.jpeg";

function Despre() {
  return (
    <div className='App'>
      <h2 id='titlu'>Tineret Betel Rebrișoara</h2>
      <h4 id='verset'>„V-am scris, tinerilor, fiindcă sunteţi tari, şi Cuvântul lui Dumnezeu rămâne în voi, şi aţi biruit pe cel rău.” 1 Ioan 2:14.</h4>
      <img src={tineri} alt="tineri" />
    </div>
  );
}

export default Despre;
