// src/CodeBlock.js
import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'

export default ({children}) => {
  const lang = children?.props.className ? children.props.className.replace('language-', '') : ''
  return (
    <Highlight {...defaultProps} code={children.props.children} language={lang}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}