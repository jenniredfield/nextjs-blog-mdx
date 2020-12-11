import '../styles/global.css'

import {MDXProvider} from '@mdx-js/react'
import CodeBlock from '../components/code'

const components = {
  pre: (props) => <CodeBlock {...props}/>,
}

export default ({Component, pageProps}) => {
  return (<MDXProvider components={components}>
    <Component {...pageProps} />
  </MDXProvider>)
}

