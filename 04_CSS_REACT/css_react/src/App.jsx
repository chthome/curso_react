import './App.css';

// 2 - CSS de Componente
import MyComponent from './components/MyComponent';

// 6 - css modules
import Title from './components/Title';

function App() {
  // 4 - css inline dinamico
  const n = 15;
  
  // 5 - classes dinamicas
  const redTitle = true;

  return (
      <div>
        {/* 1 - CSS global */}
        <h1>CSS no React</h1>

        {/* 2 - CSS  de Componente */}
        <MyComponent />
        <p>Pegou o CSS do componente</p>

        {/* 3 - inlune style */}
        <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Este elemento tem estilos inline</p>

        {/* 4 - inline style dinamico */}
        <h2 style={n > 10 ? { color: "purple"} : { color: "magenta"}}>
          CSS dinamico
        </h2>
        <h2 style={n > 20 ? { color: "purple"} : { color: "magenta"}}>
          CSS dinamico 2
        </h2>

        {/* 5 - classes dinamicas */}
        <h2 className={redTitle ? "red-title" : "black-title"}>
          Este título vai ter uma classe
        </h2>

        {/* 6 - css modules */}
        <Title />
        <h1 className="title">Este não recebe título do CSS modules</h1>

      </div>
  );
};

export default App;
