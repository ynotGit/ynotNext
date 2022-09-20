import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

import MissionStatement from '../components/missionStatement';
import Form from '../components/form';
import Landing from '../components/landingSection';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="max-w-[100%]">
        <Landing />
      </div>
      <div className="max-w-4xl mx-auto">
        <MissionStatement />
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1>Twitter Feed</h1>
          </div>
          <div>
            <h2>Blog</h2>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Form />
        <section className="px-4">
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </div>
    </Layout>
  );
}