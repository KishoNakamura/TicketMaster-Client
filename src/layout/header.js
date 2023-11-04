import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import BtnUser from "@/templates/btnUser"
import MobileMenu from "@/templates/mobileMenu"
import DesktopMenu from "@/templates/desktopMenu"
import ListConcertFestival from "@/templates/listConcerts&Festivals"
import ListTheaterCulture from "@/templates/listTheater&Culture"
import ListSport from "@/templates/listSports"
import ListFamily from "@/templates/listFamily"
import ListSpecial from "@/templates/listSpecials"
import styles from "@/styles/header.module.css"

export default function Header() {

  const [isInputFocus, setIsInputFocus] = useState(false)
  const [isConcertFestival, setIsConcertFestival] = useState(false)
  const [isTheaterCulture, setIsTheaterCulture] = useState(false)
  const [isSport, setIsSport] = useState(false)
  const [isFamily, setIsFamily] = useState(false)
  const [isSpecial, setIsSpecial] = useState(false)
  const [isMobielMenu, setMobileMenu] = useState(false)

  const ToogleConcertFestival = () => {
    isConcertFestival ? setIsConcertFestival(false) : setIsConcertFestival(true)
    setIsTheaterCulture(false)
    setIsSport(false)
    setIsFamily(false)
    setIsSpecial(false)
  }

  const ToogleTheaterCulture = () => {
    isTheaterCulture ? setIsTheaterCulture(false) : setIsTheaterCulture(true)
    setIsConcertFestival(false)
    setIsSport(false)
    setIsFamily(false)
    setIsSpecial(false)
  }

  const ToogleSport = () => {
    isSport ? setIsSport(false) : setIsSport(true)
    setIsConcertFestival(false)
    setIsTheaterCulture(false)
    setIsFamily(false)
    setIsSpecial(false)
  }

  const ToogleFamily = () => {
    isFamily ? setIsFamily(false) : setIsFamily(true)
    setIsSport(false)
    setIsTheaterCulture(false)
    setIsConcertFestival(false)
    setIsSpecial(false)
  }

  const ToogleSpecial = () => {
    isSpecial ? setIsSpecial(false) : setIsSpecial(true)
    setIsConcertFestival(false)
    setIsTheaterCulture(false)
    setIsSport(false)
    setIsFamily(false)
  }

  const ToogleMobileMenu = () => {
    isMobielMenu ? setMobileMenu(false) : setMobileMenu(true)
    setIsConcertFestival(false)
    setIsTheaterCulture(false)
    setIsSport(false)
    setIsFamily(false)
    setIsSpecial(false)
  }

  return (
    <header>
      {/* START - SECONDARY HEADER */}
      <div className={`${styles.secondaryHeader}`}>
        <div className={styles.container}>

          {/* First Div */}
          <div className={styles.firstDiv}>
            <button>
              <Image src="/img/BanderaMéxico.png" width={166} height={44} alt="Bandera de Mexico" />
              <span>MX</span>
            </button>
            <button>
              <svg title="Idioma:" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false" className={styles.svgIconWhite}><path d="M23 3H1v13.8h16.72L23 21.4V3ZM2.5 15.3V4.5h19v13.6l-3.22-2.8H2.5ZM17 8.75H7v-1.5h10v1.5Zm0 3.5H7v-1.5h10v1.5Z"></path></svg>
              <span>ES</span>
            </button>
            <button>
              <svg title="Región:" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false" className={styles.svgIconWhite}><path d="m3.17 12.12 5.82 2.5.4.4 2.5 5.81 8.7-17.43-17.42 8.72ZM1 11.49 21.97 1 23 2.03 12.51 23l-1.39-.04L8.1 15.9l-7.06-3.02-.04-1.4Z"></path></svg>
              <span>Todo México</span>
            </button>
          </div>

          <div>
            {/* Second Div */}
            <div className={styles.secondDiv}>
              <Link href={'#'}>Centros Ticketmaster</Link>
              <Link href={'#'}>Ayuda</Link>
            </div>

            {/* Third Div */}
            <div className={styles.thirdDiv}>
              <Link href={'#'}>
                <Image src={"/img/citibanamex_small_mx.png"} width={166} height={44} alt="Promocion de Citibanamex" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* END - SECONDARY HEADER */}

      {/* START - MAIN HEADER */}
      <div className={`${styles.mainHeader}`}>
        <div className={styles.container}>

          {/* Wrapper Navegation & Logo */}
          <div className={styles.wrapperNavegationLogo}>

            {/* Nacegation & Logo */}
            <div className={styles.navegationLogo}>
              <MobileMenu
                isConcertFestival={isConcertFestival}
                isTheaterCulture={isTheaterCulture}
                isSport={isSport}
                isFamily={isFamily}
                isSpecial={isSpecial}
                isMobielMenu={isMobielMenu}

                ToogleConcertFestival={ToogleConcertFestival}
                ToogleTheaterCulture={ToogleTheaterCulture}
                ToogleSport={ToogleSport}
                ToogleFamily={ToogleFamily}
                ToogleSpecial={ToogleSpecial}
                ToogleMobileMenu={ToogleMobileMenu}

                ListConcertFestival={ListConcertFestival}
                ListTheaterCulture={ListTheaterCulture}
                ListSport={ListSport}
                ListFamily={ListFamily}
                ListSpecial={ListSpecial}
              />
              <p className={styles.logo}>ticketmaster</p>
            </div>

            {/* Login Button fro Mobile */}
            <div className={styles.loginTabletMobile}>
              <BtnUser />
            </div>

            {/* Desktop Navegation */}
            <DesktopMenu
              isConcertFestival={isConcertFestival}
              isTheaterCulture={isTheaterCulture}
              isSport={isSport}
              isFamily={isFamily}
              isSpecial={isSpecial}

              ToogleConcertFestival={ToogleConcertFestival}
              ToogleTheaterCulture={ToogleTheaterCulture}
              ToogleSport={ToogleSport}
              ToogleFamily={ToogleFamily}
              ToogleSpecial={ToogleSpecial}

              ListConcertFestival={ListConcertFestival}
              ListTheaterCulture={ListTheaterCulture}
              ListSport={ListSport}
              ListFamily={ListFamily}
              ListSpecial={ListSpecial}
            />
          </div>

          {/* Form and Login Desktop */}
          <div className={styles.divForm_LoginDesktop}>
            <form action="#" method="POST" className={`${styles.searchBar} ${isInputFocus ? styles.focus : ''}`}>
              <input 
                type="text" 
                name="event" 
                id="event" 
                placeholder="Buscar por artista, evento o inmueble" 
                onFocus={e => setIsInputFocus(true)} 
                onBlur={e => setIsInputFocus(false)}
              />

              <button type="submit">
                <svg viewBox="0 0 23 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false" className={styles.svgIconWhite}><path d="M3.78 4.78 1.62 10l2.16 5.22L9 17.38l5.22-2.16L16.38 10l-2.16-5.22L9 2.62 3.78 4.78ZM9 1l6.36 2.64L18 10l-2.33 5.61 6.11 6.11-1.06 1.06-6.1-6.1L9 19l-6.36-2.64L0 10l2.64-6.36L9 1Z"></path></svg>
              </button>
            </form>

            <div className={styles.loginDesktop}>
              <BtnUser />
            </div>
          </div>
        </div>
      </div>
      {/* END - MAIN HEADER */}
    </header>
  )
}
