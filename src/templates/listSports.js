import Link from "next/link"
import styles from "@/styles/header.module.css"

export default function Sports() {
  return (
    <>
      <li><Link href={'#'}>Todos los Deportes</Link></li>
      <li><Link href={'#'}>Automovilismo</Link></li>
      <li><Link href={'#'}>Rodeo</Link></li>
      <li><Link href={'#'}>Tenis</Link></li>
      <li><Link href={'#'}>Más deportes</Link></li>
      <li><Link href={'#'}>Toros</Link></li>
      <li><Link href={'#'}>Handball</Link></li>
      <li><Link href={'#'}>Box/Lucha Libre</Link></li>
      <li><Link href={'#'}>Equestre</Link></li>
      <li><Link href={'#'}>Deportes Extremos</Link></li>
      <li><Link href={'#'}>Artes Marciales Mixtas</Link></li>
      <li><Link href={'#'}>Béisbol</Link></li>
      <li><Link href={'#'}>Fútbol</Link></li>
      <li><Link href={'#'}>Americano</Link></li>
      <li>
        <Link href={'#'}>
          <span>Ver eventos destacados de Deportes</span>
          <span>
            <svg 
              className={styles.svgListIconArrow} 
              viewBox="0 0 24 24" 
              width="1.5em" 
              height="1.5em" 
              aria-hidden="true" 
              focusable="false"
            >
              <path d="m.94 12 9.53 9.53 1.06-1.06-7.6-7.6H23v-1.5H3.7l7.83-7.84-1.06-1.06L.94 12Z"></path>
            </svg>
          </span>
        </Link>
      </li>
    </>
  )
}
