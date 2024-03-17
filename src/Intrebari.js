import React, { useState } from "react";
import prima from "./prima.PNG";
import doua from "./2.PNG";
import treia from "./3.PNG";

function Intrebari() {

    const handleSubmit = (event) => {
      event.preventDefault(); 
      window.open("https://app.sli.do/event/3vytNQzBTwHWprrc31UjLr/live/questions"); 
    }
    
  return (
    <div className='intrebari' >
        <header className="App-header">
          <h1>Pune si tu o intrebare ☟ </h1>
          <form onSubmit={handleSubmit}>
            <button type="submit" className="submitBtn"> Du-mă la Intrebări → </button>
          </form>
        </header>

        <div className="instructiuni">
          <h2>↓Instructiune de utilizare↓</h2>
          <h3>1. ↓ Apasa pentru a introduce intrebarea. ↓</h3>
          <img src={prima} alt="unu" />
          <h3>2. ↓ Scrie intrebarea si apasa Send! ↓</h3>
          <img src={doua} alt="doi" />
          <h3>3. ↓ Optional: Daca iti place intrebarea:) ↓</h3>
          <img src={treia} alt="trei" />
        </div>
      </div>
  );
}

export default Intrebari;


