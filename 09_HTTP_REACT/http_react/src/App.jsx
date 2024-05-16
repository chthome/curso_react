import { useState, useEffect } from 'react';

import { useFetch } from '../hooks/useFetch';

import './App.css';

const url = "http://localhost:3000/products";

function App() {
  
  // 1 - resgatando dados
  const [products, setProducts] = useState([]);

  // 4 - Custom Hook
  const {data: items, httpConfig, loading, error} = useFetch(url);

  // 2 - envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // 5 - Refatorando POST
    httpConfig(product, "POST");

  };

  return (
    <div className='App'>
      <h1>HTTP em React</h1>

      {/* 6 - loading */}
      {loading && <p>Carregando...</p>}
      {/* 7 - tratando erros */}
      {error && <p>{error}</p>}
      {/* 1 - resgate de dados */}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} = R${product.price}
          </li>
        ))}
      </ul>

      {/* 2 - enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            <span>Preço:</span>
            <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>

          {/* <input type="submit" value="Enviar" /> */}
          {/* 7 - loading no post */}
          {loading && <input type="submit" disabled value="Aguarde..." />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
};

export default App;
