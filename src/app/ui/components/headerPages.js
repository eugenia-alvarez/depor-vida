"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "../../styles/headerPages.module.css"

function HeaderPages() {
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
              <Link href="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
        
      
          </ul>

    
        </div>
      </nav>
      </header>
    );
  }

export default HeaderPages
