import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

//---------------TYPEADO DE ESTADO-----------
type FormState = {
    name: string;
    lastname: string;
    email: string;
    password: string | number;
}

//---------------COMPONENTE FUNCIONAL-----------

const SignIn = () => {
    const [form, setForm] = useState<FormState>({
        name: "",
        lastname: "",
        email: "",
        password: "",

    })

    const[error, setError] = useState<String | null>(null);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(
            (prev) => ({
                ...prev, [name] : value
            })
        );
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {name, lastname, email, password} = form;

        const Users = JSON.parse(localStorage.getItem("users") || '[]');
        const isUsersRegistered = Users.find(user => user.email === email);

        if(isUsersRegistered){
            alert("Usuario ya existente");
        } else {
            Users.push({
                name: name,
                lastname: lastname,
                email: email,
                password: password
            });
            localStorage.setItem("users", JSON.stringify(Users));
            alert("Exito");
            navigate("/Inicio");
        }

    }

    return (
        <>
            <form className="formSignIn" onSubmit={handleSubmit}>
                <h3 className="formSignIn__title">Registrate</h3>
                <label className="formSignIn__titleName">Nombre:</label>
                <input
                    className="formSignIn__inputName"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    name="name"
                    value={form.name}
                    onChange={(e) => handleInputChange(e)}
                    required></input>
                <label className="formSignIn__titleName">Apellidos:</label>
                <input
                    className="formSignIn__inputLastName"
                    type="text"
                    placeholder="Ingresa tus apellidos"
                    name="lastname"
                    value={form.lastname}
                    onChange={(e) => handleInputChange(e)}
                    required ></input>
                <label className="formSignIn__titleMail">Correo:</label>
                <input 
                    className="formSignIn_InputMail"
                    type="email" 
                    placeholder="Ingresa tu correo"
                    name="email"
                    value={form.email}
                    onChange={(e) => handleInputChange(e)} 
                    required></input>
                <label className="formSignIn_titlePass">Contraseña:</label>
                <input 
                    className="formSignIn_InputPass"
                    type="password" 
                    name="password"
                    value={form.password}
                    onChange={(e)=>handleInputChange(e)}
                    required></input>
                <div>
                    <button className="formLogIn__buttonSend" type="submit">Enviar</button>
                </div>

            </form>

        </>
    )
}


export default SignIn;