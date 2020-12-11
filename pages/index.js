import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import { getAllMDXPosts } from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps({ params }) {
  const postData = await getAllMDXPosts();
  return {
    props: {
      postsData: postData,
    },
  };
}

export default function Home({ postsData = [] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, this is Padawan Dev here</p>
        <p>A blog to share what we learned in the day.</p>
      </section>
      <ul>
        {postsData.length
          ? postsData.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={`/posts/${post.id}`}>
                    <div>
                      <p>{post.title}</p>
                      <p>{post.description}</p>
                      <Date dateString={post.date} />
                    </div>
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </Layout>
  );
}
