import styles from "../styles/LinkRandom.module.css";
import { useRouter } from "next/router";

const LinkRandom = () => {
	const router = useRouter();

	const handleRandom = async () => {
		const randomIndex = Math.floor(Math.random() * 1126);
		const res = await fetch(
			"https://pokeapi.co/api/v2/pokemon/" + randomIndex.toString()
		);
		const data = await res.json();

		router.push("/pokecard/" + data.name);
	};

	return (
		<span className={styles.randomLink}>
			or choose a
			<button onClick={handleRandom} className={styles.btn}>
				random
			</button>
			Pokemon
		</span>
	);
};

export default LinkRandom;
