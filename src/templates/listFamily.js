import Link from "next/link"
import styles from "@/styles/header.module.css"

export default function Family() {
  return (
    <>
      <li><Link href={'#'}>Todos los Eventos</Link></li>
      <li><Link href={'#'}>On Ice</Link></li>
      <li><Link href={'#'}>Circos/Espectáculo Infantil</Link></li>
      <li><Link href={'#'}>Ferias/Festivals</Link></li>
      <li><Link href={'#'}>Más familiares</Link></li>
      <li><Link href={'#'}>Magia</Link></li>
      <li><Link href={'#'}>Acuarios/Parques Acuáticos</Link></li>
      <li><Link href={'#'}>Campamentos/Tours</Link></li>
      <li><Link href={'#'}>Espacios Infantiles</Link></li>
      <li><Link href={'#'}>Absurdo/Búsqueda/ Farsa</Link></li>
      <li><Link href={'#'}>Parques de diversiones</Link></li>
      <li>
        <Link href={'#'}>
          <span>Ver eventos destacados de Familiares</span>
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
