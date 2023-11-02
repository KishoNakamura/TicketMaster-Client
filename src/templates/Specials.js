import Link from "next/link"

export default function Specials() {
  return (
    <ul>
      <li><Link href={'#'}>En todos los Especiales</Link></li>
      <li><Link href={'#'}>Certificados de regalo</Link></li>
      <li><Link href={'#'}>Sorteos</Link></li>
      <li><Link href={'#'}>Restaurantes</Link></li>
      <li><Link href={'#'}>Audiovisual/Cine</Link></li>
      <li><Link href={'#'}>Estacionamiento</Link></li>
      <li><Link href={'#'}>Seminarios/Conferencias</Link></li>
      <li><Link href={'#'}>Expo/Convencion</Link></li>
      <li><Link href={'#'}>Más especiales</Link></li>
      <li><Link href={'#'}>Merchandise</Link></li>
      <li><Link href={'#'}>Donaciones</Link></li>
      <li><Link href={'#'}>Hotel</Link></li>
      <li><Link href={'#'}>Campamentos</Link></li>
      <li><Link href={'#'}>Paquete Comida/Cena</Link></li>
      <li><Link href={'#'}>Cupones</Link></li>
      <li><Link href={'#'}>Audio Tours</Link></li>
      <li><Link href={'#'}>Especiales</Link></li>
      <li><Link href={'#'}>Guias</Link></li>
      <li>
        <Link href={'#'}>Ver eventos destacados de Especiales
          <span>
            <svg className="svg-icon-arrow" viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="m.94 12 9.53 9.53 1.06-1.06-7.6-7.6H23v-1.5H3.7l7.83-7.84-1.06-1.06L.94 12Z"></path></svg>
          </span>
        </Link>
      </li>
    </ul>
  )
}
