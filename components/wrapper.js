import Head from 'next/head';
import styles from './wrapper.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Bird Dev';
const headerImageUrl = '/images/kiss-bird.png';
const thumbnailImageUrl = './images/bird-dev-thumbnail.png';
export const siteTitle = 'Bird Dev';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={thumbnailImageUrl} />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="description"
          content="A evelopment blog to share what we learned in the day"
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src={headerImageUrl}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src={headerImageUrl}
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
