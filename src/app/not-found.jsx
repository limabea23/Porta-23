import Link from "next/link";
import React from "react";
import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}> ERRO 404</h1>
        <p className={styles.message}>A página que você procura não existe.</p>
        <Image src="/img/loadingif.gif" alt="Gif de carregamento" width={800} height={284} priority className={styles.image} />
        <Link href="/" className={styles.button}>
          Voltar para Home
        </Link>
    </div>
  );
}