import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import './Login.css'

function Login() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username)
    }

    const [username, setUsername] = useState('');
    return (
    <div className="login-container">
        <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />

            <input type="text" placeholder="Digite seu usuário no Github" value={username}
            onChange={e => setUsername(e.target.value)} />
                <button type="submit">Enviar</button>
        </form>
    </div>
    )
}

export default Login;