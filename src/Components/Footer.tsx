import Link from "next/link";
import styles from './Footer.module.css';

export default function Header() {
    return (
        <div className="flex justify-between items-center m-6">
            <div className="stuyvesantHighSchool flex flex-row">
                {/* Logo (/images/footer/stuyvesant_logo.png) width 20px and Text */}
                <Link href="/">
                    <img src="/images/footer/stuyvesant_logo.png" alt="Stuyvesant Logo" width="20px" />
                </Link>
                <div className={styles.footerText}>Stuyvesant High School</div>
            </div>
            
            <div className="flex flex-col">
                <div className={styles.footerText}>Site by Will Zhang and Elias Xu</div>
                <div className={styles.footerText}>The Junior Caucus is led by Josephine Yoo and Grace Rhee</div>
            </div>
        </div>
    );
}