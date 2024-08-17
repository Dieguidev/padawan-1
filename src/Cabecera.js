import React, {Component} from "react";

const Carrusel = ["/img/banner1.jpg", "/img/banner2.jpg", "/img/banner3.jpg", "/img/banner4.jpg", "/img/banner5.jpg",]

class Cabecera extends Component{
    constructor(props){
        super(props)
        this.state = {
            c:0
        }
    }

    render() {
        setTimeout(() => this.setState({
            c:Math.floor(Math.random() * Carrusel.length)
        }), 1000)

        return(
            <div>
                <h1 className="h1cab"> Motos KTM</h1>
                <img className="imgcab" src={Carrusel[this.state.c]} alt= "Motos" />
            </div>
        )
    }
}

export default Cabecera
