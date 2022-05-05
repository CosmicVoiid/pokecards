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
							if (element.type.name === "fire") {
								return <span className={styles.cardElementFire} />;
							}
						})}
						<span className={styles.cardElement} />
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
