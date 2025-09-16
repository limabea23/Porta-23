import Link from "next/link";
import React from "react";
import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image src="/img/loading.gif" alt="Gif de carregamento" width={300} height={300} priority className={styles.image} />
        <h1 className={styles.title}> A bartender saiu para buscar mais gelo.</h1>
        <p className={styles.message}>Enquanto ela não volta, que tal dar uma olhada nos drinks que já estão no menu? Essa página aqui ficou esquecida no balcão.</p>
        <Link href="/" className={styles.button}>
          Voltar para Home
        </Link>
    </div>
  );
}