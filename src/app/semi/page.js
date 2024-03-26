import Link from "next/link"
import Image from "next/image"
import styles from "./page.module.css"
import HeaderPages from "../ui/components/headerPages"

function Semi() {
  return (
    <>
    <HeaderPages/>
    <div className={styles.semi} layout="otro">
      <h2>Semi Personalizado</h2>
      
      <div className={`${styles.contenido} contenedor`}>

      <div className={styles.descripcion}>
          <p>
           El entrenamiento SEMIPERSONALIZADO
           </p>
           <p>
           Descripcion
           </p>
           <p>
            Descripcion
           </p>
        </div>

            <video controls autoPlay loop >
              <source src="/video/semi.mp4" type="video/mp4" />
            </video>
     
     
    </div>

    <div className={styles.infoProfe}>
      <h3>Profes</h3>
      <div className={styles.img}>
      <Image src="/img/mini.jpg" alt="Profe SemiPersonalizado" width={185} height={170} />
      </div>
      <div className={styles.des}>
      <p>Descripcion del profe</p>
      </div>
    </div>
    </div>

    <div className={`${styles.contenidoBoton} contenedor`}>
    <button className={styles.boton}>
        <Link href="/" className={styles.link}>
          Volver al Inicio
        </Link>
        </button>
    </div>
  
    </>
  )
}

export default Semi
