import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Card from "../../components/Card";
import pokemonLogoImg from "../../public/hero.png";
import styles from "../../styles/Pokecard.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1126");
	const data = await res.json();

	const paths = data.results.map((pokemon: { name: string }) => {
		return {
			params: { pokecard: pokemon.name },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const pokemon = context.params!.pokecard;
	const res = await fetch(
		"https://pokeapi.co/api/v2/pokemon/" + pokemon!.toString()
	);
	const data = await res.json();

	return {
		props: { pokemon: data },
	};
};

const pokecard: NextPage = ({ pokemon }: any) => {
	return (
		<main className={styles.main}>
			<div className={styles.logoContainer}>
				<Image
					src={pokemonLogoImg}
					className={styles.logo}
					alt="Pokemon Logo"
				/>
			</div>
			<div className={styles.cardContainer}>
				<Card
					name={pokemon.name}
					img={pokemon.sprites.other["official-artwork"].front_default}
					elements={pokemon.types}
				/>
			</div>
			<div>{pokemon.weight}</div>
		</main>
	);
};

export default pokecard;
