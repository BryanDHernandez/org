import { useState } from "react"
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/formulario.js';
import MiOrg from './componentes/MiOrg/miOrg.js';
import Equipo from "./componentes/Equipo/equipo.js";
import Footer from "./componentes/Footer/footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:"Front End",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harlan Lohora",
    puesto:"Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo:"Programación",
    foto:"https://github.com/BryanDHernandez.png",
    nombre:"Genesys Rondon",
    puesto:"Desarrollador de Software e Instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo:"UX y Diseño",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"Jeanmarie Quijada",
    puesto:"Head de Alura e Instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Programación",
    foto:"https://github.com/christianpva.png",
    nombre:"Christian Velasco",
    puesto:"Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Innovación y Gestión",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    nombre:"José González",
    puesto:"Dev Fullstack",
    fav: false
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    },
  ])

  //Condicionante Ternario: condicion ? seMuestra : noSeMuestra
  //Forma alternativa simplificada -> condicion && seMuestra 

  const cambiarMostrar = () => {
    actualizarMostrar (!mostrarFormulario)
  }

  //Registar Colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador: ", colaborador)
    //Spreadoperator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar el color del equipo

  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equipoActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos (equipoActualizados)
  }

  //Crear Equipos

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  //Dar me Gusta a un colaborador

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map ((colaborador) => {
      if (colaborador.id === id ) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

//Fotos de Colaboradores

// https://github.com/harlandlohora.png

// https://github.com/genesysaluralatam.png

// https://github.com/JeanmarieAluraLatam.png

// https://github.com/christianpva.png

// https://github.com/JoseDarioGonzalezCha.png

  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo= {crearEquipo}
      />}

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {equipos.map ((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador= {eliminarColaborador}
        actualizarColor= {actualizarColor}
        like={like}
        />)}

      <Footer/>
    </div>
  )
}

export default App;
