import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';

export default function Sidebar() {
  
  return (
    <aside className={styles.aside}>
      <ul className={styles.list}>

        <Link href="/">          
          <a className={styles.links}>
            <i><AiFillDashboard /></i>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/projects">          
          <a className={styles.links}>
            <i><AiFillProject /></i>
            <span>Projects</span>
          </a>
        </Link>
        <Link href="/add">          
          <a className={styles.links}>
            <i><AiFillDashboard /></i>
            <span>Nuevo</span>
          </a>
        </Link>
        <Link href="/clients">          
          <a className={styles.links}>
            <i><AiFillProject /></i>
            <span>Clients</span>
          </a>
        </Link>
        <Link href="/projects">          
          <a className={styles.links}>
            <i><AiFillProject /></i>
            <span>Projects</span>
          </a>
        </Link>
        <Link href="/">          
          <a className={styles.links}>
            <i><AiFillDashboard /></i>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/projects">          
          <a className={styles.links}>
            <i><AiFillProject /></i>
            <span>Projects</span>
          </a>
        </Link>
        <Link href="/projects">          
          <a className={styles.links}>
            <i><AiFillProject /></i>
            <span>Projects</span>
          </a>
        </Link>
        <Link href="/">          
          <a className={styles.links}>
            <i><AiFillDashboard /></i>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/projects">          
          <a className={styles.links}>
            <i><AiFillProject /></i>
            <span>Projects</span>
          </a>
        </Link>
      </ul>
    </aside>
  )
}