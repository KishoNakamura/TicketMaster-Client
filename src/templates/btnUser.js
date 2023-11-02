import Link from "next/link"
import styles from "@/styles/header.module.css"

export default function BtnUser() {
  return (
    <button className={styles.btnUser}>
      <Link href={'#'}>
        <svg viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" focusable="false" className={styles.svg_icon_white}><path d="M8 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM12 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm6.49 12H5.43L1 16.9V23h22v-6.12L18.49 13ZM2.5 17.58 6 14.5h11.93l3.57 3.07v3.93h-19v-3.92Z"></path></svg>
        <span>Ingresa</span>
      </Link>
    </button>
  )
}
