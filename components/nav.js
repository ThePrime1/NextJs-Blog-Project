import Link from 'next/link';
import styles from './Nav.module.css';
const Nav = () => {
    return (
        <div className={styles.content}>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/pinaki">Pinaki</Link>
                <Link href="/mahmud">Mahmudur Rahman</Link>
                <Link href="/mushfiq">Mushfiq Ansari</Link>
            </nav>
        </div>
    );
}
 
export default Nav;