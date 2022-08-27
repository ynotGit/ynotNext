import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/nav'

export const siteTitle = 'Y Not Innovate';

export default function Layout({ children, home }) {
    return (
        <div className="max-w-36 px-12">
            <Head>
                <link rel="icon" href="/images/favicon.png" />
                <meta
                    name="description"
                    content="Y Not Innovate Web Development"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className="grid grid-cols-1">
                <Nav />
            </header>

            <main>{children}</main>
            {!home && (
                <div className="mt-1">
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <footer><p>footer</p></footer>
        </div>
    );
}