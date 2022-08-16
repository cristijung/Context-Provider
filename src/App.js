import React, { useState } from 'react';
import Contexto from './dados/Contexto';
import Topo from './componentes/Topo';
import Contador from './componentes/Contador';
import './styles/estilo.css';

function App() {
 const [total, setTotal] = useState(0);

  return (
    <Contexto.Provider value={[total, setTotal]}>
    <>
    <Topo />
    <div className='content'>
      <h3>Aplicação de Context API + Provider</h3>      
      <p>
        Nesta aplicação usamos a criação de um contexto. Este contexto é muito importante pois estará 
        associado ao provider que disponibilizará o acesso dos estados em mais de um componente ou até mesmo de elementos.
      </p>
        <h3 className='content'>
          Exemplo de acesso ao estado compartilhado diretamente no elemento Html H3 
          declarado no arquivo inicial da aplicação: { total }
        </h3>      
      <p>Logo abaixo a renderização via componente "Contador"</p>    
      <div className='content'>   
        <Contador /> 
      </div>    
    </div>
    </>
    </Contexto.Provider>
  );
}

export default App;
