import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar({title}) {
  
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <Link href="/">
          <a className={styles.logo}>Logo &gt; {title}</a>
        </Link>

        <div className={styles.links}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/me">
            <a>Perfil</a>
          </Link>
        </div>
      </ul>
    </nav>
  )
}