import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import Link from 'next/link';

export const siteTitle = 'Y Not Innovate';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/favicon.png" />
                <meta
                    name="description"
                    content="Y Not Innovate Web Development"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <p className="text-2xl font-bold underline">test</p>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <footer><p>footer</p></footer>
        </div>
    );
}