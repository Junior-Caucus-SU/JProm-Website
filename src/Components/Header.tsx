import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className="flex justify-between items-center m-6">
            <div className={`flex justify-between items-center m-6 ${styles.container}`}>
                <div className={styles.HButton}>
                    <Link href="/" className={styles.headerDir}>About</Link>
                </div>
                
                <div className={styles.HButton}>
                    <Link href="/details" className={styles.headerDir}>Event Details</Link>
                </div>

                <div className={styles.HButton}>
                    <Link href="/aid" className={styles.headerDir}>Financial Aid</Link>
                </div>

                <div className={styles.HButton}>
                    <Link href="/contact" className={styles.headerDir}>Contact</Link>
                </div>
            </div>

            <div className={[styles.HButton, styles.tickets].join(' ')}>
                <Link href="/tickets" className={styles.headerDir}>Get Tickets</Link>
            </div>

        </div>
    );
}