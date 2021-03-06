import type { NextPage } from "next";
import styles from "../styles/Custom500.module.css";
import Image from "next/image";
import pokemonLogoImg from "../public/hero.png";
import Searchbar from "../components/Searchbar";
import LinkRandom from "../components/LinkRandom";

const Custom500: NextPage = () => {
	return (
		<main className={styles.main}>
			<div className={styles.logoContainer}>
				<Image
					src={pokemonLogoImg}
					className={styles.logo}
					alt="Pokemon Logo"
				/>
			</div>

			<Searchbar />
			<LinkRandom />
			<h1 className={styles.header}>Oops, that page could not be found</h1>
		</main>
	);
};

export default Custom500;
