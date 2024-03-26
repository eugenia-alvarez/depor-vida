import HeaderPages from "../ui/components/headerPages"
import Link from "next/link"
import styles from "./page.module.css"

function Funcional() {
  return (
    <>
    <HeaderPages/>
      Desde Funcional

      <div className={styles.contenido}>
      <button className={styles.boton}>
        <Link href="/" className={styles.link}>
          Volver al Inicio
        </Link>
        </button>

    </div>
    </>
  )
}

export default Funcional
