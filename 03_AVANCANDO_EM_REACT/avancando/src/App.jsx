import './App.css';

// 2 - Imagem em assets
import night from './assets/night.jpg'

// 3 - conhecendo o hook useState dentro do componente Data
import Data from './components/Data';

// 4 - Renderizando lista
import ListRender from './components/ListRender';

// 7 - Render Condicional
import ConditionalRender from './components/ConditionalRender';

// 8 - Props
import ShowUserName from './components/ShowUserName';

// 9 - Desestruturando props
import CarDetails from './components/CarDetails';

// 11 - renderizacao de lista
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

// 12 - Fragments
import Fragment from './components/Fragment';

// 13 - Container
import Container from './components/Container';

// 14 - Função através de prop
import ExecuteFunction from './components/ExecuteFunction';

// 15 - state lift
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {

  // 14 - Função através de prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div className='App' style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        
        {/* 1 - Imagem em public */}
        <img src="/img.jpg" alt="alguma imagem" />

        {/* 2 - Imagem em assts */}
        <img src={night} alt="outra imagem" />

        {/* 3 - useState */}
        <Data />

        {/* 4 - Renderizando List */}
        <ListRender />

        {/* 7 - Render Condicional */}
        <ConditionalRender />

        {/* 8 - Props */}
        <ShowUserName name="Matheus"/>

        {/* 9 - Desestruturando props */}
        <CarDetails brand="VW" km={999} color="Vermelho"/>

        {/* 10 - reaproveitamento de componentes */}
        <CarDetails brand="Fiat" km={122999} color="Branco"/>
        <CarDetails brand="Audi" km={56999} color="Azul"/>

        {/* 11 - Renderização de lista com componente */}
        <h3>Renderização de lista com componente</h3>
        {cars.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand}
            km={car.km}
            color={car.color}
          />
        ))};

        {/* 12 - Fragments */}
        <Fragment />

        {/* 13 - Container */}
        <Container>
          <p>Alguma coisa</p>
        </Container>

        {/* 14 - Função através de prop */}
        <ExecuteFunction myFunction={showMessage} />

        {/* 15 - state lift */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />

      </div>
    </>
  );
};

export default App;
