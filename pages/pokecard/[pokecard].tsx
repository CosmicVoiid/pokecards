import type {
	NextPage,
	GetStaticPaths,
	GetStaticProps,
	GetServerSideProps,
} from "next";
import Image from "next/image";
import Card from "../../components/Card";
import pokemonLogoImg from "../../public/hero.png";
import styles from "../../styles/Pokecard.module.css";
import Searchbar from "../../components/Searchbar";
import LinkRandom from "../../components/LinkRandom";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const pokemon = context.params!.pokecard;
	try {
		const res = await fetch(
			"https://pokeapi.co/api/v2/pokemon/" + pokemon!.toString()
		);
		const data = await res.json();

		return {
			props: { pokemon: data, key: data.name },
		};
	} catch {
		return {
			notFound: true,
		};
	}
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
			<Searchbar />
			<LinkRandom />
			<div className={styles.cardContainer}>
				<Card
					name={pokemon.name}
					img={pokemon.sprites.other["official-artwork"].front_default}
					elements={pokemon.types}
					hp={pokemon.stats[0].base_stat}
					attack={pokemon.stats[1].base_stat}
					defense={pokemon.stats[2].base_stat}
					special_attack={pokemon.stats[3].base_stat}
					special_defense={pokemon.stats[4].base_stat}
					speed={pokemon.stats[5].base_stat}
					height={pokemon.height}
					weight={pokemon.weight}
				/>
			</div>
		</main>
	);
};

export default pokecard;
