import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <nav className={styles.nav}>
                <Link href="/allblogs">All Blogs</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <p className={styles.end}>Made with love by Mehedi</p>
        </div>
    );
}
 
export default Footer;