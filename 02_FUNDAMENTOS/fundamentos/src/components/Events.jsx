import React from 'react'

const Events = () => {

    const handleClick = () => {
        console.log("Executou");
    };

    // 8 - Função de Renderização
    const  renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando Isso</h1>;
        } else {
            return <h1>Renderizando outra coisa</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => console.log("Testando um evento.")}>Clique aqui...</button>
            </div>
            
            {/* 7 - Evento com função*/}
            <div>
                <button onClick={handleClick}>Clique aqui também</button>
            </div>

            {/* 8 - função de renderização*/}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;