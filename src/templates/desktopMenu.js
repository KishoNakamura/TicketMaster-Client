import styles from "@/styles/header.module.css"

export default function DesktopMenu({
  isConcertFestival,
  isTheaterCulture,
  isSport,
  isFamily,
  isSpecial,
  ToogleConcertFestival,
  ToogleTheaterCulture,
  ToogleSport,
  ToogleFamily,
  ToogleSpecial,
  ListConcertFestival,
  ListTheaterCulture,
  ListSport,
  ListFamily,
  ListSpecial

}) {
  return (
    <nav className={styles.navegationDesktop}>
      <ul>
        {/* Concert and Festival */}
        <li>
          <button 
            onClick={ToogleConcertFestival} 
            className={`${styles.btnNavDesktop} ${isConcertFestival ? styles.active : ''}`}
          >
            Conciertos y Festivales <span className={styles.triangle}></span>
          </button>
          <ul className={`${styles.desktopList} ${styles.grid_6} ${isConcertFestival ? styles.openList : ''}`}>
            <ListConcertFestival />
          </ul>
        </li>

        {/* Theather and Culture */}
        <li>
          <button 
            onClick={ToogleTheaterCulture}
            className={`${styles.btnNavDesktop} ${isTheaterCulture ? styles.active : ''}`}
          >
            Teatro y Cultura <span className={styles.triangle}></span>
          </button>
          <ul className={`${styles.desktopList} ${styles.grid_6} ${isTheaterCulture ? styles.openList : ''}`}>
            <ListTheaterCulture />
          </ul>
        </li>

        {/* Sport */}
        <li>
          <button 
            onClick={ToogleSport}
            className={`${styles.btnNavDesktop} ${isSport ? styles.active : ''}`}
          >
            Deportes <span className={styles.triangle}></span>
          </button>
          <ul className={`${styles.desktopList} ${styles.grid_5} ${isSport ? styles.openList : ''}`}>
            <ListSport />
          </ul>
        </li>

        {/* Family */}
        <li>
          <button 
            onClick={ToogleFamily}
            className={`${styles.btnNavDesktop} ${isFamily ? styles.active : ''}`}
          >
            Familiares <span className={styles.triangle}></span>
          </button>
          <ul className={`${styles.desktopList} ${styles.grid_4} ${isFamily ? styles.openList : ''}`}>
            <ListFamily />
          </ul>
        </li>

        {/* Special */}
        <li>
          <button 
            onClick={ToogleSpecial}
            className={`${styles.btnNavDesktop} ${isSpecial ? styles.active : ''}`}
          >
            Especiales <span className={styles.triangle}></span>
          </button>
          <ul className={`${styles.desktopList} ${styles.grid_7} ${isSpecial ? styles.openList : ''}`}>
            <ListSpecial />
          </ul>
        </li>
      </ul>
    </nav>
  )
}
