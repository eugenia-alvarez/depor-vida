import Image from "next/image"
import styles from "../../styles/horarios.module.css"

function Horarios() {
  return (
    <div id="horarios" className={styles.fondo}>
    
    <Image className={styles.imagen} src="/img/hs3.png" alt="Horarios" width={1000} height={1000}/>

   
    </div>
  )
}

export default Horarios
