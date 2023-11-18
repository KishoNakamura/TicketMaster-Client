import Link from 'next/link'
import Image from 'next/image'
import styles from "@/styles/card.module.css"

export default function Card({cardInfo, SectionMain = false, SectionSearch = false, SectionDiscover = false, SectionBenfits = false}) {
  return (
    <div className={
      SectionMain      ? styles.cardWrapperMain      :
      SectionSearch    ? styles.cardWrapperSearch    : 
      SectionDiscover  ? styles.cardWrapperDiscover  : 
      SectionBenfits   ? styles.cardWrapperBenefits  : ''
    }>
      
      {cardInfo.map( data => (
        <div className={styles.card} key={data.id}>
          <Link href={data.link}>
            <div className={styles.image}>
              <Image src={data.imagen} alt={`Imagen de ${data.title}`}/>
              <div className={styles.hoverPanelAbsolute}>
                <div>
                  <svg viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false">
                    <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8 3.47 8.26Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.information}>
              {SectionBenfits ? '' : (<span>{data.placeOrCategory}</span>)}
              <h3>{data.title}</h3>
              {SectionDiscover ? (
                <>
                  <p>{data.subtitle}</p>
                  <p>Ver más</p>
                </>
              ) : '' }
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
