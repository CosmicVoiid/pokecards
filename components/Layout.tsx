import Head from "next/head";
import type { ReactNode } from "react";
import type { AppProps } from "next/app";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>PokeCards</title>
				<meta name="PokeCards" content="Pokemon card generator" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>{children}</main>
		</div>
	);
};

export default Layout;
