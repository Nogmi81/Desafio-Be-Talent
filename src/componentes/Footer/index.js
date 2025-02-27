import styles from './Footer.module.css';
import Link from "next/link";

export default function Footer() {

  return (
    <footer>
      <div className={styles.copyright}>
        <p>Copyright 2025 &copy; <Link href="https://www.linkedin.com/in/andretnmiranda/" target="_blank">André Tavares</Link></p>
      </div>
    </footer>
  )
}