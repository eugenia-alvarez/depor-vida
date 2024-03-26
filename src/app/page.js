import Image from "next/image";
import styles from "./page.module.css"
import Actividades from "./ui/components/actividades";
import Horarios from "./ui/components/horarios";
import Contacto from "./ui/components/contacto";
import Ubicacion from "./ui/components/ubicacion";
import Redes from "./ui/components/redes";
import Header from "./ui/components/header";


export default function Home() {
  return (
    <>
    <Header/>
    <div className={styles.contenedor}>
      <Image className={styles.imagen} src="/img/image0.jpeg" alt="Fondo Inicio" width={1000} height={800}/>
    </div>

    
    <Actividades/>
    <Horarios/>
    <Contacto/>
    <Ubicacion/>
    <Redes/>
  
    </>
 
  );
}

