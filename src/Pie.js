import React, {Component} from "react";

const Redes = ["/img/face.jpg", "/img/instagram.jpg", "/img/twitter.jpg"]

const listar = Redes.map((x, indice) => 
    <img key={indice} className="imgrs" scr={x} alt="Redes sociales"/> 
)

class Pie extends Component{
    render(){
        return(
            <div>
                <footer className="redes">
                {listar}
                </footer>
            </div>
        )
    }
}

export default Pie  