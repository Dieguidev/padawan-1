import React from "react";

import Motos from "./Imagenes";

const imgs = Motos.map((x) => 
    
    <img  className="imgseccion" alt = {x} src={x}/>

)

function Cuerpo(){
    return(
        <section className="divseccion">
            {imgs}
        </section>
    )
}

export default Cuerpo