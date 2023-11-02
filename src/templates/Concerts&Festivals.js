import Link from "next/link"

export default function ConcertsFestivals() {
  return (
    <ul>
      <li><Link href={'#'}>Todos los Conciertos</Link></li>
      <li><Link href={'#'}>Cabaret</Link></li>
      <li><Link href={'#'}>Infantil</Link></li>
      <li><Link href={'#'}>Comedia</Link></li>
      <li><Link href={'#'}>Electrónica</Link></li>
      <li><Link href={'#'}>Festivales</Link></li>
      <li><Link href={'#'}>Flamenco/Tango</Link></li>
      <li><Link href={'#'}>Folclor/Popular</Link></li>
      <li><Link href={'#'}>Jazz/Instrumental</Link></li>
      <li><Link href={'#'}>Más conciertos</Link></li>
      <li><Link href={'#'}>Oldies/Trova</Link></li>
      <li><Link href={'#'}>Pop/Romántica</Link></li>
      <li><Link href={'#'}>Reggae</Link></li>
      <li><Link href={'#'}>Rock/Metal</Link></li>
      <li><Link href={'#'}>Urbanos</Link></li>
      <li><Link href={'#'}>Internacional</Link></li>
      <li>
        <Link href={'#'}>Ver eventos destacados de Conciertos y Festivales
          <span>
            <svg className="svg-icon-arrow" viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="m.94 12 9.53 9.53 1.06-1.06-7.6-7.6H23v-1.5H3.7l7.83-7.84-1.06-1.06L.94 12Z"></path></svg>
          </span>
        </Link>
      </li>
    </ul>
  )
}
