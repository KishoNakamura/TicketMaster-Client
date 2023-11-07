import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import styles from "@/styles/footer.module.css"

export default function Footer() {

  const [showHelp, setShowHelp] = useState(false)
  const [showNetwork, setShowNetwork] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [showJoin, setShowJoin] = useState(false)
  const [showEnterprise, setShowEnterprise] = useState(false)

  const ToogleHelp = () => { showHelp ? setShowHelp(false) : setShowHelp(true) }
  const ToogleNetwork = () => { showNetwork ? setShowNetwork(false) : setShowNetwork(true) }
  const ToogleUser = () => { showUser ? setShowUser(false) : setShowUser(true) }
  const ToogleJoin = () => { showJoin ? setShowJoin(false) : setShowJoin(true) }
  const ToogleEnterprise = () => { showEnterprise ? setShowEnterprise(false) : setShowEnterprise(true) }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapperGrid}>
          <div className={styles.firstFooterSection}>
            <div>
              <h2 className={styles.logo}>ticketmaster</h2>
            </div>
            <div className={styles.socialMedia}>
              <h3 className={styles.socialMediaHeading}>Vamos a conectarnos</h3>
              <div className={styles.socialMediaBranchs}>
                <Link href={'#'}>
                  <Image alt="Facebook" title="Facebook" src="//uk.tmconst.com/production-10-2-1-6533216/images/logo/facebook.svg" width={24} height={24}/>
                </Link>
                <Link href={'#'}>
                  <Image alt="X" title="X" src="//uk.tmconst.com/production-10-2-1-6533216/images/logo/x.svg" width={24} height={24}/>
                </Link>
                <Link href={'#'}>
                  <Image alt="Instagram" title="Instagram" src="//uk.tmconst.com/production-10-2-1-6533216/images/logo/instagram.svg" width={24} height={24}/>
                </Link>
                <Link href={'#'}>
                  <Image alt="Youtube" title="Youtube" src="//uk.tmconst.com/production-10-2-1-6533216/images/logo/youtube.svg" width={24} height={24}/>
                </Link>
                <Link href={'#'}>
                  <Image alt="TikTok" title="TikTok" src="//uk.tmconst.com/production-10-2-1-6533216/images/logo/tiktok.svg" width={24} height={24}/>
                </Link>
                <Link href={'#'}>
                  <Image alt="Blog" title="Blog" src="//uk.tmconst.com/production-10-2-1-6533216/images/logo/blog.svg" width={24} height={24}/>
                </Link>
                <Link href={'#'}>
                  <Image alt="Spotify" title="Spotify" src="//uk.tmconst.com/production-10-2-1-6533216/images/logo/spotify.svg" width={24} height={24}/>
                </Link>
                <Link href={'#'}>
                  <Image alt="LinkedIn" title="LinkedIn" src="//uk.tmconst.com/production-10-2-1-6533216/images/logo/linkedin.svg" width={24} height={24}/>
                </Link>
              </div>
            </div>
            <div className={styles.branchDownload}>
              <h3 className={styles.branchDownloadHeading}>Descargue nuestras aplicaciones</h3>
              <div>
                <Image alt="Apple App Store" title="Apple App Store" src="//uk.tmconst.com/production-10-2-1-6533216/images/logo/apple-store/es.svg" width={0} height={0} className={styles.branchDownloadImage}/>
                <Image alt="Google Play Store" title="Google Play Store" src="//uk.tmconst.com/production-10-2-1-6533216/images/logo/google-store/es.svg" width={0} height={0} className={styles.branchDownloadImage}/> 
              </div>
            </div>
            <div className={styles.TC}>
              <p>Al continuar en esta página, usted acuerda regirse por nuestros Términos de uso.</p>
            </div>
          </div>
          <div className={styles.secondFooterSection}>
            <div>
              <div>
                <button 
                  className={`${styles.btnFooterMobile} ${showHelp ? styles.rotateArrow : ''}`}
                  onClick={ToogleHelp}
                >
                  Ayuda
                  <span>
                    <svg className={styles.svgIconWhite} viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8 3.47 8.26Z"></path></svg>
                  </span>
                </button>
                <h3 className={styles.headingFooterList}>Ayuda</h3>
              </div>
              <ul className={`${styles.mobileFooterList} ${showHelp ? styles.openList : ''}`}>
                <li><Link href={'#'}>Centro de Ayuda</Link></li>
                <li><Link href={'#'}>Contáctanos</Link></li>
              </ul>
            </div>
            <div>
              <div>
                <button 
                  className={`${styles.btnFooterMobile} ${showNetwork ? styles.rotateArrow : ''}`}
                  onClick={ToogleNetwork}
                >
                  Nuestra red
                  <span>
                    <svg className={styles.svgIconWhite} viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8 3.47 8.26Z"></path></svg>
                  </span>
                </button>
                <h3 className={styles.headingFooterList}>Nuestra red</h3>
              </div>
              <ul className={`${styles.mobileFooterList} ${showNetwork ? styles.openList : ''}`}>
                <li><Link href={'#'}>CIE</Link></li>
                <li><Link href={'#'}>OCESA</Link></li>
              </ul>
            </div>
            <div>
              <div>
                <button 
                  className={`${styles.btnFooterMobile} ${showUser ? styles.rotateArrow : ''}`}
                  onClick={ToogleUser}
                >
                  Estamos para ayudarte
                  <span>
                    <svg className={styles.svgIconWhite} viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8 3.47 8.26Z"></path></svg>
                  </span>
                </button>
                <h3 className={styles.headingFooterList}>Estamos para ayudarte</h3>
              </div>
              <ul className={`${styles.mobileFooterList} ${showUser ? styles.openList : ''}`}>
                <li><Link href={'#'}>Mi cuenta</Link></li>
                <li><Link href={'#'}>Centros Ticketmaster</Link></li>
                <li><Link href={'#'}>Política de compra y cancelación 48hrs</Link></li>
                <li><Link href={'#'}>Facturación</Link></li>
                <li><Link href={'#'}>Ticketmaster Shop</Link></li>
              </ul>
            </div>
            <div>
              <div>
                <button 
                  className={`${styles.btnFooterMobile} ${showJoin ? styles.rotateArrow : ''}`}
                  onClick={ToogleJoin}
                >
                  Únete
                  <span>
                    <svg className={styles.svgIconWhite} viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8 3.47 8.26Z"></path></svg>
                  </span>
                </button>
                <h3 className={styles.headingFooterList}>Únete</h3>
              </div>
              <ul className={`${styles.mobileFooterList} ${showJoin ? styles.openList : ''}`}>
                <li><Link href={'#'}>Vende tu evento con nosotros</Link></li>
                <li><Link href={'#'}>Trabaja con nosotros</Link></li>
              </ul>
            </div>
            <div>
              <div>
                <button 
                  className={`${styles.btnFooterMobile} ${showEnterprise ? styles.rotateArrow : ''}`}
                  onClick={ToogleEnterprise}
                >
                  Empresas
                  <span>
                    <svg className={styles.svgIconWhite} viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8 3.47 8.26Z"></path></svg>
                  </span>
                </button>
                <h3 className={styles.headingFooterList}>Empresas</h3>
              </div>
              <ul className={`${styles.mobileFooterList} ${showEnterprise ? styles.openList : ''}`}>
                <li><Link href={'#'}>Quiénes somos</Link></li>
                <li><Link href={'#'}>Ticketmaster Internacional</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.thirdFooterSection}>
          <div className={styles.otherLinks}>
            <Link href={'#'}>Política de Compra</Link>
            <Link href={'#'}>Aviso de Privacidad</Link>
            <Link href={'#'}>Aviso de Privacidad</Link>
            <Link href={'#'}>Política de Cookies</Link>
            <Link href={'#'}>Compromisos con COFECE</Link>
            <Link href={'#'}>Administrar mis cookies</Link>
          </div>
          <div className={styles.copyrigth}>
            <p>© 1999-2023 Ticketmaster. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
