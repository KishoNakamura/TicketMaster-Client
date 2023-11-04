import Link from "next/link"
import Image from "next/image"
import SVGArrow from "@/templates/svgArrow"
import styles from "@/styles/header.module.css"

export default function MobileMenu({
  isConcertFestival,
  isTheaterCulture,
  isSport,
  isFamily,
  isSpecial,
  isMobielMenu,
  ToogleConcertFestival,
  ToogleTheaterCulture,
  ToogleSport,
  ToogleFamily,
  ToogleSpecial,
  ToogleMobileMenu,
  ListConcertFestival,
  ListTheaterCulture,
  ListSport,
  ListFamily,
  ListSpecial
}) {
  return (
    <>
      <button className={styles.btnNavTabletMobile} onClick={ToogleMobileMenu}>
        <svg className={styles.svgIconWhite} viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="M23 5.75H1v-1.5h22v1.5Zm-22 5.5h16v1.5H1v-1.5Zm12 7H1v1.5h12v-1.5Z"></path></svg>
      </button>

      <div className={`${styles.wrapperMenuTabletMobile} ${isMobielMenu ? styles.active : ''}`}>
        <div className={`${styles.menuTabletMobile} ${isMobielMenu ? styles.active : ''}`}>
          <div>
            
            <div className={styles.menuTabletMobile__header}>
              <p>Menú</p>
              <button onClick={ToogleMobileMenu}><SVGArrow /></button>
            </div>

            <ul className={styles.menuTabletMobile__nav}>
              <li>
                <button 
                  onClick={ToogleConcertFestival}
                  className={isConcertFestival ? styles.active : ''}
                >
                  Conciertos y Festivales 
                  <SVGArrow />
                </button>
                <ul className={`${styles.listTabletMobile} ${isConcertFestival ? styles.openList : ''}`}>
                  <ListConcertFestival />
                </ul>
              </li>
              <li>
                <button 
                  onClick={ToogleTheaterCulture}
                  className={isTheaterCulture ? styles.active : ''}
                >
                  Teatro y Cultura 
                  <SVGArrow />
                </button>
                <ul className={`${styles.listTabletMobile} ${isTheaterCulture ? styles.openList : ''}`}>
                  <ListTheaterCulture />
                </ul>
              </li>
              <li>
                <button 
                  onClick={ToogleSport}
                  className={isSport ? styles.active : ''}
                >
                  Deportes 
                  <SVGArrow />
                </button>
                <ul className={`${styles.listTabletMobile} ${isSport ? styles.openList : ''}`}>
                  <ListSport />
                </ul>
              </li>
              <li>
                <button 
                  onClick={ToogleFamily}
                  className={isFamily ? styles.active : ''}
                >
                  Familiares 
                  <SVGArrow />
                </button>
                <ul className={`${styles.listTabletMobile} ${isFamily ? styles.openList : ''}`}>
                  <ListFamily />
                </ul>
              </li>
              <li>
                <button 
                  onClick={ToogleSpecial}
                  className={isSpecial ? styles.active : ''}
                >
                  Especiales 
                  <SVGArrow />
                </button>
                <ul className={`${styles.listTabletMobile} ${isSpecial ? styles.openList : ''}`}>
                  <ListSpecial />
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.menuTabletMobile__footer}>
            <div>
              <Link href={'#'}>Centros Ticketmaster</Link>
              <Link href={'#'}>Ayuda</Link>
              <Link href={'#'}>
                <Image src={"/img/citibanamex_small_mx.png"} width={166} height={44} alt="Promocion de Citibanamex" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
