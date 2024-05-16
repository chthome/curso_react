import './App.css'

//2 - Importando o componente
import FirstComponent from './components/FirstComponent';

//4 - Template Expression
import TemplateExpression from './components/TemplateExpression';

//5 - Hierarquia de componentes
import MyComponent from './components/MyComponent';

//6 - Eventos
import Events from './components/Events';

function App() {
  //3 - comentarios
  return (
    <div className='App'>
      {/* 3 - Comentario JSX */}

      <h1>Fundamentos do Reac</h1>
   
      <FirstComponent />

      <TemplateExpression />

      <MyComponent />

      <Events />
        
    </div>
  )
}

export default App
