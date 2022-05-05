import styles from "../styles/Card.module.css";
import Image from "next/image";

type Elements = {
	type: { name: string };
};

type Props = {
	name: string;
	img: string;
	elements: Elements[];
};

const capitalizeFirstLetter = (name: string) => {
	return name.charAt(0).toUpperCase() + name.slice(1);
};

const Card = ({ name, img, elements }: Props) => {
	return (
		<div className={styles.cardLayer1}>
			<div className={styles.cardLayer2}>
				<div className={styles.cardHeader}>
					<span className={styles.cardName}>{capitalizeFirstLetter(name)}</span>
					<div className={styles.cardElementContainer}>
						{elements.map((element) => {
							// if (element.type.name === "fire") {
							// 	return (
							// 		<div
							// 			className={`${styles.cardElement} ${styles.cardElementFire}`}
							// 		>
							// 			<Image
							// 				className={styles.svg}
							// 				src="/svg/fire.svg"
							// 				alt="fire type"
							// 				height={17}
							// 				width={17}
							// 			/>
							// 		</div>
							// 	);
							// }

							switch (element.type.name) {
								case "bug":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementBug}`}
										>
											<Image
												className={styles.svg}
												src="/svg/bug.svg"
												alt="bug type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "dark":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementDark}`}
										>
											<Image
												className={styles.svg}
												src="/svg/dark.svg"
												alt="dark type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "dragon":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementDragon}`}
										>
											<Image
												className={styles.svg}
												src="/svg/dragon.svg"
												alt="dragon type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "electric":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementElectric}`}
										>
											<Image
												className={styles.svg}
												src="/svg/electric.svg"
												alt="electric type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "fairy":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementFairy}`}
										>
											<Image
												className={styles.svg}
												src="/svg/fairy.svg"
												alt="fairy type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "fighting":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementFighting}`}
										>
											<Image
												className={styles.svg}
												src="/svg/fighting.svg"
												alt="fighting type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "fire":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementFire}`}
										>
											<Image
												className={styles.svg}
												src="/svg/fire.svg"
												alt="fire type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "flying":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementFlying}`}
										>
											<Image
												className={styles.svg}
												src="/svg/flying.svg"
												alt="flying type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "ghost":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementGhost}`}
										>
											<Image
												className={styles.svg}
												src="/svg/ghost.svg"
												alt="ghost type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "grass":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementGrass}`}
										>
											<Image
												className={styles.svg}
												src="/svg/grass.svg"
												alt="grass type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "ground":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementGround}`}
										>
											<Image
												className={styles.svg}
												src="/svg/ground.svg"
												alt="ground type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "ice":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementIce}`}
										>
											<Image
												className={styles.svg}
												src="/svg/ice.svg"
												alt="ice type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "normal":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementNormal}`}
										>
											<Image
												className={styles.svg}
												src="/svg/normal.svg"
												alt="normal type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "poison":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementPoison}`}
										>
											<Image
												className={styles.svg}
												src="/svg/poison.svg"
												alt="poison type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "pyschic":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementPyschic}`}
										>
											<Image
												className={styles.svg}
												src="/svg/pyschic.svg"
												alt="pyschic type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "rock":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementRock}`}
										>
											<Image
												className={styles.svg}
												src="/svg/rock.svg"
												alt="rock type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "steel":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementSteel}`}
										>
											<Image
												className={styles.svg}
												src="/svg/steel.svg"
												alt="steel type"
												height={17}
												width={17}
											/>
										</div>
									);
								case "water":
									return (
										<div
											className={`${styles.cardElement} ${styles.cardElementWater}`}
										>
											<Image
												className={styles.svg}
												src="/svg/water.svg"
												alt="water type"
												height={17}
												width={17}
											/>
										</div>
									);
							}
						})}
					</div>
				</div>
				<div className={styles.cardFrame1}>
					<div className={styles.cardFrame2}>
						<Image src={img} alt={name} layout="fill" objectFit="contain" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
