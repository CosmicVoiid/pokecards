// import "../styles/global.css";
import styles from "../styles/Card.module.css";
import Image from "next/image";

type Elements = {
	type: { name: string };
};

type Props = {
	name: string;
	img: string;
	elements: Elements[];
	hp: number;
	attack: number;
	defense: number;
	special_attack: number;
	special_defense: number;
	speed: number;
	height: number;
	weight: number;
};

const capitalizeFirstLetter = (name: string) => {
	console.log(name.charAt(0).toUpperCase() + name.slice(1));
	return name.charAt(0).toUpperCase() + name.slice(1);
};

const parseStyles = (element: string) => {
	console.log(`styles.cardElement${element}`);
	return styles[`cardElement${element}`];
};

const Card = ({
	name,
	img,
	elements,
	hp,
	attack,
	defense,
	special_attack,
	special_defense,
	speed,
	height,
	weight,
}: Props) => {
	return (
		<div className={styles.cardLayer1}>
			<div
				className={`${parseStyles(
					capitalizeFirstLetter(elements[0].type.name)
				)} ${styles.cardLayer2}`}
				style={{
					backgroundColor: `var(--color-${elements[0].type.name}-light)`,
				}}
			>
				<div className={styles.cardHeader}>
					<span className={styles.cardName}>{capitalizeFirstLetter(name)}</span>
					<div className={styles.cardElementContainer}>
						{elements.map((element, index) => {
							return (
								<div
									key={index}
									className={`${styles.cardElement} ${parseStyles(
										capitalizeFirstLetter(element.type.name)
									)}`}
								>
									<Image
										className={styles.svg}
										src={`/svg/${element.type.name}.svg`}
										alt={`${element.type.name} type`}
										height={17}
										width={17}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.cardFrame1}>
					<div className={styles.cardFrame2}>
						<Image src={img} alt={name} layout="fill" objectFit="contain" />
					</div>
				</div>
				<div className={styles.infoContainer}>
					<div className={styles.info}>{hp} HP</div>
					<div className={styles.info}>{attack} Atk</div>
					<div className={styles.info}>{defense} Def</div>
					<div className={styles.info}>{special_attack} Sp. Atk</div>
					<div className={styles.info}>{special_defense} Sp. Def</div>
					<div className={styles.info}>{speed} Spd</div>
					<div className={styles.info}>{height} Meters</div>
					<div className={styles.info}>{weight} Kg</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
