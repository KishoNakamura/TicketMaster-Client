import styles from "@/styles/header.module.css"

export default function Arrow() {
  return (
    <span>
      <svg 
        viewBox="0 0 24 24" 
        width="1.5em" 
        height="1.5em" 
        rotate="90" 
        aria-hidden="true" 
        focusable="false" 
        className={styles.svgIconBlue}
      >
          <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8 3.47 8.26Z"></path>
      </svg>
    </span>
  )
}
