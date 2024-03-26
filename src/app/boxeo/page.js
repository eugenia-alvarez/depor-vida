import Link from "next/link"
import HeaderPages from "../ui/components/headerPages"
import styles from "./page.module.css"

function Boxeo() {
  return (
    <>
      <HeaderPages/>
      Desde Boxeo

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

export default Boxeo
