import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.texto}>
                © TODOS OS DIREITOS RESERVADOS. DESENVOLVIDO POR{" "}
                <Link href="/sobre">BEA LIMA</Link>
            </footer>
        </div>
    );
}