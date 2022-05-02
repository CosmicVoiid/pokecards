import Searchbar from "../components/Searchbar";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import pokemonLogoImg from "../public/hero.png";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>PokeCards</title>
				<meta name="PokeCards" content="Pokemon card generator" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.logoContainer}>
					<Image
						src={pokemonLogoImg}
						className={styles.logo}
						alt="Pokemon Logo"
					/>
				</div>

				<Searchbar />
			</main>
			<footer className={styles.footer}></footer>
		</div>
	);
};

export default Home;
