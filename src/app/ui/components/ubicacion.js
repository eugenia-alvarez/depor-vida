import styles from "../../styles/ubicacion.module.css"

function Ubicacion() {
  return (
    <>
     <div id="ubicacion" className={ `${styles.ubicacion} contenedor `} >
        <h3>Visitanos!!</h3>

      <div className={styles.mapa}>
      <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.5515842956206!2d-68.51786112497653!3d-31.536473702065898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96816bb47ca2ca19%3A0x1e942010d4a6d17e!2sDeporVida%20-%20Centro%20de%20Entrenamiento!5e0!3m2!1ses!2spt!4v1702560529218!5m2!1ses!2spt"
         width="100%" 
         height="300"
         style={{border:0}} 
         title="Mapa de Ubicación"
         allowFullScreen 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>   
      </div>
  
     </div>

    </>
  )
}

export default Ubicacion
