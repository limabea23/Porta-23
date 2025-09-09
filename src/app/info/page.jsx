
import styles from "./info.module.css";

export default function Info() {
	return (
		<div>
			<div className={styles.blogHeader}>
				<h1 className={styles.titulo}>
					SOBRE A <span className={styles.tituloOutline}> API</span>
				</h1>
			</div>
		</div>
	);
}
