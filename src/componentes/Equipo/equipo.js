import "./equipo.css"
import Colaborador from "../Colaborador/colaborador.js"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {

    //Destructuracion: Se utiliza para no repetir la propiedad ".arreglo.propiedad" y sea menos redundante
    //props.datos.titulo --> titulo
    //         v
    const {titulo, colorPrimario, id} = props.datos

    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const colorFondo = {backgroundColor: hexToRgba(colorPrimario, 0.4)}

    const estiloTitulo = {borderColor:colorPrimario}

    return <> {colaboradores.length > 0 &&
        <section className="equipo" style={colorFondo}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(e) => {
                    actualizarColor(e.target.value,id)
                }}
            />

            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {colaboradores.map ((colaborador,index) => <Colaborador 
                    datos={colaborador}
                    key={index}
                    colorFondo={colorFondo}
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                />)}
            </div>
        </section>} 
    </>
    
}

export default Equipo