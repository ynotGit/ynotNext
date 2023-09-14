import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

import Landing from '../components/landingSection';
import MissionStatement from '../components/missionStatement';
import Process from '../components/processSection';
import Showcase from '../components/showcaseSection';
import Form from '../components/form';

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
      <div className="max-w-4xl mx-auto px-4">
        <MissionStatement />
      </div>
      <div className="mx-auto px-4">
        <Process />
        <Showcase />
        <section>
          <h2 className="text-center">News</h2>
          <div>
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
      </div>
    </Layout>
  );
}