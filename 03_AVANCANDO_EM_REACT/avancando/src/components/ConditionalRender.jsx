import React from 'react';
;
const ConditionalRender = () => {
    const x = true;
    const name = "João";

    return (
        <div>
            {/* 7 - Render Condicional */}
            <h1>Isso será exibido?</h1>
            {x && <p>se x for true, sim!</p>}
            {/* 8 - else */}
            <h3>Render ternário</h3>
            {name === "João" ? (
                <div>
                    <p>Olá João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}
        </div>
    );
};

export default ConditionalRender;