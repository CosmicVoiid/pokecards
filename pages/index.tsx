import LinkRandom from "./../components/LinkRandom";
import Searchbar from "../components/Searchbar";
import type { NextPage } from "next";
import Image from "next/image";
import pokemonLogoImg from "../public/hero.png";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
		</main>
	);
};

export default Home;
