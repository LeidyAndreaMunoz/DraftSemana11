import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { Link } from "react-router-dom";
import './LoginScreen.css'

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );
    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Leidy Andrea'
            }
        });

        history.replace( lastPath );
        
    }
    const toRegister = (e) => {
        e.preventDefault();
        history.replace('/register');
        console.log('Hiciste click');
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required(),
            password: Yup.string().required(),
        }),
        onSubmit: (initialValues) => {
            console.log(initialValues);
        }
    })
     
    return (
            <div className="loginContainer">
                <h3>Inicia Sesión</h3>
                <form className="formulario">
                    <p>
                        <label>Usuario</label>
                        <input type="text" name="nombre"></input>
                    </p>
                    <p>
                        <label>Contraseña</label>
                        <input type="password" name="Contraseña"></input>
                    </p>
                    <p className="full">
                        <button type="submit" className="boton-enviar" onClick={ handleLogin }>Ingresar</button>
                    </p>
                    <p className="full">
                        <button type="submit" className="boton-enviar" onClick={ toRegister }>Regístrate</button>
                    </p>
                </form>
            </div>
    )  
}
