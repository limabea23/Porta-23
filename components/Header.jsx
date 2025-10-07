import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/info"><h1 className={styles.texto}>INFO SOBRE A API</h1></Link>
            </header>
        </div>
    );
}