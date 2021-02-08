import '../styles/global.css';

import { MDXProvider } from '@mdx-js/react';
import CodeBlock from '../components/code';
import Date from '../components/date';

const components = {
  pre: (props) => <CodeBlock {...props} />,
  Date: (props) => <Date dateString={props.children} classNames="post-date" />
};

export default ({ Component, pageProps }) => {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};
