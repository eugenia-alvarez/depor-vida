"use client"
import { useState } from "react"
import Link from "next/link"


import styles from "../../styles/header.module.css"

function Header() {
    const [isOpen, setIsOpen] = useState(false);

   
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
      setIsOpen(false);
    };
  
    return (
      <header>
      <nav className={styles.navbar}>

        <div className={styles.navbarContainer}>

    
    <Link className={styles.logo}  href="/">
            DeporVida
          </Link>

          <div className={`${styles.menuIcon} ${isOpen ? styles.close : ''}`} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>

          <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>

            <li className={styles.navItem}>
              <a href="#horarios" onClick={closeMenu}>
                Horarios
              </a>
            </li>
        
            <li className={styles.navItem}>
              <a href="#contacto" onClick={closeMenu}>
                Contacto
              </a>
            </li>

            <li className={styles.navItem}>
              <a href="#ubicacion" onClick={closeMenu}>
               Ubicación
              </a>
            </li>
          </ul>

          
        </div>
      </nav>
      </header>
    );
  }

export default Header
