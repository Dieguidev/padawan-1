import React from "react";

//Crear un arreglo de objetos que contienen el nombre y la url para cada elemenot
const Elementos = [
    {texto: "Inicio", url: '/'},
    {texto: "Ventas", url: '/Ventas'},
    {texto: "Repuestos", url: '/Repuestos'},
    {texto: "Taller", url: '/Taller'},
    {texto: "Accesorios", url: '/Accesorios'},
    {texto: "Contactenos", url: 'https://www.google.com.pe'}

]


// Crear un componente funcional para un Elemento
function MenuItem({descripcion,enlace}){
    return(
        <a href={enlace} className="item">{descripcion}</a>
    )
}

// Crear el componente principal para el Menu 
function Menu(){
    return(
        <nav className="bloque">
            {Elementos.map((elemento, indice) =>(
                <MenuItem key={indice} descripcion={elemento.texto} enlace={elemento.url}/>
            ))}
        </nav>
    )
}

export default Menu