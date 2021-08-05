import React, {useState} from "react";
import './ContactoScreen.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const ContactoScreen = () => {


    const [open, setOpen] = useState(false)

    const formSent = (e) => {
        e.preventDefault();
        setOpen(true);
    } 
    return (
            <div className="contactContainer">
                <h3>Comunícate con nosotros</h3>
                {!open ? (
                <form className="formulario">
                <p>
                    <label>Nombres y apellidos</label>
                    <input type="text" name="nombre"></input>
                </p>
                <p>
                    <label>Correo electrónico</label>
                    <input type="text" name="email"></input>
                </p>
                <p>
                    <label>Asunto</label>
                    <input type="text" name="text"></input>
                </p>
                <p>
                    <label>Mensaje</label>
                    <textarea name="textarea" rows="10" cols="50" placeholder="Déjanos saber en qué te podemos ayudar"></textarea>
                </p>
                <p className="full">
                    <button type="submit" className="boton-enviar" onClick={formSent}>Ingresar</button>
                </p>
            </form>
                ) : <div class="card">
                        <div class="card-body">
                        ¡Gracias por contactarnos! Pronto nos comunicaremos contigo
                        </div>
                    </div> 
                }


                
            </div>
    )  
}
