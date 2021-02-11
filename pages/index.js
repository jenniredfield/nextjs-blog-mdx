import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/wrapper';
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
      <ul>
        {postsData.length
          ? postsData.map((post) => {
              return (
                <li key={post.id} className={utilStyles.list}>
                  <Link href={`/posts/${post.id}`}>
                    <div>
                      <p className={utilStyles.listTitle}>{post.title}</p>
                      <p>{post.description}</p>
                      <Date dateString={post.date} classNames={utilStyles.listSmaller} />
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
