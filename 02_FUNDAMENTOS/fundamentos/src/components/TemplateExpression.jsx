//4 - Template Expression (rafce)

const TemplateExpression = () => {

    const name = "Carlos Henrique";
    const data = {
        age: 46,
        job: "programador",
    };
  
    return (
        <div>
            <p>A soma é {2 + 2} </p>
            <h3>Bem vindo {name}</h3>
            <p>Sua idade é {data.age} anos e você é um {data.job}</p>
        </div>
    )
}

export default TemplateExpression