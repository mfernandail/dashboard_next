import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <Link href="/">
          <a>Logo</a>
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