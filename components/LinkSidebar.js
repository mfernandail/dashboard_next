import Link from 'next/link';
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';

export default function LinksNavbar({title, icon}) {
  
  return (
    <Link href="/">          
      <a className={styles.links}>
        <i><AiFillDashboard /></i>
        <span>{title}</span>
      </a>
    </Link>
  )
}