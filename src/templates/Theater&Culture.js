import Link from "next/link"

export default function TheaterCulture() {
  return (
    <ul>
      <li><Link href={'#'}>Todos los Eventos Teatro y Culturales</Link></li>
      <li><Link href={'#'}>Ballet/Danza</Link></li>
      <li><Link href={'#'}>Obras de Teatro</Link></li>
      <li><Link href={'#'}>Comedia</Link></li>
      <li><Link href={'#'}>Más Teatro y Culturales</Link></li>
      <li><Link href={'#'}>Musicales</Link></li>
      <li><Link href={'#'}>Belleza/Moda</Link></li>
      <li><Link href={'#'}>Drama</Link></li>
      <li><Link href={'#'}>Ensamble/Música Clásica</Link></li>
      <li><Link href={'#'}>Espectáculo</Link></li>
      <li><Link href={'#'}>Exhibiciones</Link></li>
      <li><Link href={'#'}>Festivales Culturales</Link></li>
      <li><Link href={'#'}>Orquestas/Opera</Link></li>
      <li><Link href={'#'}>Performance</Link></li>
      <li><Link href={'#'}>Voces/Coros</Link></li>
      <li>
        <Link href={'#'}>Ver eventos destacados de Teatro y Cultura
          <span>
            <svg className="svg-icon-arrow" viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="m.94 12 9.53 9.53 1.06-1.06-7.6-7.6H23v-1.5H3.7l7.83-7.84-1.06-1.06L.94 12Z"></path></svg>
          </span>
        </Link>
      </li>
    </ul>
  )
}
