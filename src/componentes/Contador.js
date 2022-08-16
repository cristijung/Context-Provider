import React, { useContext } from "react";
import '../styles/estilo.css';
import Contexto from '../dados/Contexto';

function Contador() {
  const [total, setTotal] = useContext(Contexto);

  return (
    <>           
      <h2>{total}</h2>
      <button type="button" onClick={() => setTotal(total + 1)} className="btn-counter">
        Contador
      </button>      
    </>
  );
}
export default Contador;
