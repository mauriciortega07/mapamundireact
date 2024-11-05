import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormState = {
    email: string;
    password: string;
}

const Login = () => {
    const [form, setForm] = useState<FormState>({
        email: "",
        password: ""
    })
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {email, password} = form;

        const Users = JSON.parse(localStorage.getItem("users") || '[]');

        const validUsers = Users.find(user => user.email === email   && user.password === password);

        if (!validUsers) {
            alert("No existe un usuario con estas credenciales");
        } else {
            alert("Bienvenido");
            localStorage.setItem('login_succes', JSON.stringify(validUsers))
            navigate("/Inicio");
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(
            (prev) => ({
                ...prev, [name]: value
            })
        )
    }

return (
    <>
        <form className="formLogIn" onSubmit={handleSubmit}>
            <h3 className="formLogIn__title">Inicia Session</h3>
            <label className="formLogIn__titleMail">Correo Electronico</label>
            <input
                className="formLogIn__inputMail"
                type="email"
                placeholder="Ingresa tu correo"
                name="email"
                value={form.email}
                onChange={(e) => handleInputChange(e)}
                required
            />
            <label className="formLogIn__titlePass">Contraseña</label>
            <input
                className="formLogIn__inputPass"
                type="password"
                name="password"
                value={form.password}
                onChange={(e) => handleInputChange(e)}
                required
            />
            <button className="formLogIn__buttonSend" type="submit">Enviar</button>
        </form>
    </>
)

}

export default Login;