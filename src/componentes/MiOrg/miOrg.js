import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {
    //Estado - Hooks
    //useState --> Usar la funcion "useState()"
    //Se utiliza el nombre de la constante como primer parametro y en segundo la funcion que actualiza dicha funcion --> const [nombreVariable, funionActializa] = useState()
    //console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar",!mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="tituloOrg">Mi Organización</h3>
        <img src="./img/add.png" alt="Agregar Logo" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg