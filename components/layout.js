import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header'
import Footer from '../components/footer'

export const siteTitle = 'Y Not Innovate';

export default function Layout({ children, home }) {
    return (
        <>
            <div className="max-w-36">
                <Head>
                    <link rel="icon" href="/images/favicon.png" />
                    <meta
                        name="description"
                        content="Y Not Innovate Web Development"
                    />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>

                <Header className="grid grid-cols-1" />
            </div>
            <div className="max-w-36">
                <main>{children}</main>
                {!home && (
                    <div className="mt-1">
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}

                <Footer />
            </div>
        </>
    );
}