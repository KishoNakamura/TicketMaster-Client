import Link from "next/link"
import Layout from "@/layout/layout"
import Card from "@/components/card"
import { cardInfoDiscover, cardInfoBenefist, cardInfoMostSearched, cardInfoMain, heroInfo } from "@/data/tempData"
import styles from "@/styles/index.module.css"

export default function Home() {

  const bannerHero = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroInfo.imagen})`,
  }

  return (
    <Layout
      title="Boletos para conciertos, deportes, arte, teatro, familiares, eventos, y muchos más. Sitio oficial de Ticketmaster"
      description="Compra boletos para: conciertos, evento deportivos, artísticos, teatro, espectáculos de broadway, eventos familiares en Ticketmaster.com.mx"
    >
      <div className={styles.banner} style={bannerHero}>
        <div>
          <h3>{heroInfo.title}</h3>
          <p>{heroInfo.place}</p>
          <Link href={'#'}>Ver Boletos</Link>
        </div>
      </div>

      <div className={`${styles.container} ${styles.gridTemplate}`}>
        <main className={styles.main}>
          <Card
            cardInfo={cardInfoMain}
            SectionMain={true}
          />

          <section className={styles.mostSearched}>
            <h2>Lo más buscado</h2>
            <Card 
              cardInfo={cardInfoMostSearched}
              SectionSearch={true}
            />
          </section>

          <section className={styles.discover}>
            <h2>Descubre</h2>
            <Card 
              cardInfo={cardInfoDiscover}
              SectionDiscover={true}
            />
          </section>
        </main>

        <aside className={styles.benefits}>
          <h2>Beneficios</h2>
          <Card 
            cardInfo={cardInfoBenefist}
            SectionBenfits={true}
          />
        </aside>
      </div>
    </Layout>
  )
}
