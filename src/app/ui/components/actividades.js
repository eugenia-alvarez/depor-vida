import Link from "next/link"
import styles from "../../styles/actividades.module.css"

function Actividades() {
  return (

    <div className={`${styles.actividades} contenedor`}>
      <h2>Actividades</h2>
  {/**<p>Hace Click y conocé un poco más sobre nuestras clases!!</p> */}  
      
      <div className={styles.actividad}>

     {/*<Link className={styles.link} href="#">*/ }  
     <button className={styles.button}> 
        <div className={styles.content}>
         Semi Personalizado
       </div>
     </button>
    {/*</Link>*/}
   {/*<Link className={styles.link} href="#">*/ }  
     <button className={styles.button}> 
        <div className={styles.content}>
            Funcional
         </div>
     </button>
     {/*</Link>*/}

    {/*<Link className={styles.link} href="#">*/ }  
     <button className={styles.button}> 
        <div className={styles.content}>
          Kick Boxin
          Boxeo
       </div>
     </button>
{/*</Link>*/}
    </div>
    </div>
 
  )
}

export default Actividades
