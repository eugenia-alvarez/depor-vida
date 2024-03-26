import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/contacto.module.css"

function Contacto() {
  return (
    <>
    <div id="contacto" className={ `${styles.contacto} contenedor `} >
      <p><span>Contactanos </span> a traves de <span>WhatsApp </span> y <span>pedí tu 
       clase de prueba!!</span>
      </p>

      <div className={styles.contactoContenido}>
      <button className={styles.button}> 
      <Link href="https://api.whatsapp.com/send?phone=2644004384&text=Hola! Quiero solicitar mi clase de prueba!" target="_blank">  
        <div className={styles.content}>
        <Image className={styles.img} src="/img/whatsapp.png" alt="imagen wtsp" width={25} height={15}/>
              <span>Continuar con WhatsApp</span>
       </div>
       </Link>
     </button>
     </div>
    </div>

    </>
  )
}

export default Contacto
