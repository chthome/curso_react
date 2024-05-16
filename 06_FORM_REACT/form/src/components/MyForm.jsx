import { useState } from 'react';

import './MyForm.css';

const MyForm = ({userName, userEmail}) => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        e.preventDefault();

        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio), role;

        // validação
        //envio

        // 7 - limpar o form
        resetForm();
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

  return (
    <div>
        {/* 1 - criação de form */}
        {/* 5 - envio de formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Digite o seu nome...' 
                    onChange={handleName}
                    //6 - controled input
                    value={name || ""}
                />
            </div>
            
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite o seu e-mail..." 
                    // 4 - simplificando a manipulação, quando for instrução simples e nao precisar de um tratamento antes de setar a alteração.
                    onChange={(e) => setEmail(e.target.value)}
                    //6 - controled input
                    value={email || ""}
                />
            </label>
            <label>
                <span>Bio:</span>
                <textarea 
                    name="bio" 
                    placeholder='Descrição do usuário...'
                    onChange={(e) => setBio(e.target.value)}
                    value={bio || ""}
                >

                </textarea>
            </label>

            {/* 9 select */}
            <label>
                <span>Função no Sistema:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role || ""}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
            <input type="button" value="Limpar" onClick={resetForm} />
        </form>
    </div>
  );
};

export default MyForm;