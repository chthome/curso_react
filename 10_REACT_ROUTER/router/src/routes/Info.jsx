import { useParams, Link } from "react-router-dom";

const Info = () => {
    
    const { id } = useParams(); 

    return (
        <div>
            <h1>Mais informações sobre o produto id: {id}</h1>
            <Link to={`/products/${id}`}> Voltar</Link>
        </div>
    );
};

export default Info;