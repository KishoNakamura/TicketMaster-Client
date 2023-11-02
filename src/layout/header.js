import Link from "next/link"
import styles from "@/styles/header.module.css"
import Image from "next/image"

export default function Header() {
  return (
    <header>

      {/* First header */}
      <div className={`${styles.top}`}>
        <div className={styles.container}>
          <div className={styles.firstDiv}>
            <button>
              <Image src="/img/BanderaMéxico.png" width={166} height={44} alt="Bandera de Mexico" />
              <span>MX</span>
            </button>
            <button>
              <svg title="Idioma:" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false" className={styles.svg_icon_white}><path d="M23 3H1v13.8h16.72L23 21.4V3ZM2.5 15.3V4.5h19v13.6l-3.22-2.8H2.5ZM17 8.75H7v-1.5h10v1.5Zm0 3.5H7v-1.5h10v1.5Z"></path></svg>
              <span>ES</span>
            </button>
            <button>
              <svg title="Región:" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false" className={styles.svg_icon_white}><path d="m3.17 12.12 5.82 2.5.4.4 2.5 5.81 8.7-17.43-17.42 8.72ZM1 11.49 21.97 1 23 2.03 12.51 23l-1.39-.04L8.1 15.9l-7.06-3.02-.04-1.4Z"></path></svg>
              <span>Todo México</span>
            </button>
          </div>

          <div>
            <div className={styles.secondDiv}>
              <Link href={'#'}>Centros Ticketmaster</Link>
              <Link href={'#'}>Ayuda</Link>
            </div>
            <div className={styles.thirdDiv}>
              <Link href={'#'}>
                <Image src={"/img/citibanamex_small_mx.png"} width={166} height={44} alt="Promocion de Citibanamex" />
              </Link>
            </div>
          </div>
        </div>
      </div>
        

      {/* Second header */}
      <div className={`${styles.bottom}`}>
        <div className={styles.container}>

          <div className="">
            <button>
              <svg className={styles.svg_icon_white} viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="M23 5.75H1v-1.5h22v1.5Zm-22 5.5h16v1.5H1v-1.5Zm12 7H1v1.5h12v-1.5Z"></path></svg>
            </button>
          </div>

          <div className="">
            
          </div>
          
          <div className="">
            
          </div>
        </div>
      </div>
      
    </header>
  )
}
