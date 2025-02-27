import styles from './Header.module.css';
import Logo from '../../../public/logo.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header_container}>
      <div><Image className={styles.logo} src={Logo} alt="logomarca" /></div>
    </header>
  )
}