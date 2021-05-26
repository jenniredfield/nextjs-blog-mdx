import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/nightOwl";

export default ({children}) => {
  const lang = children?.props.className ? children.props.className.replace('language-', '') : ''
  return (
    <Highlight {...defaultProps} code={children.props.children} language={lang} theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px', fontSize: '16px', margin: '60px 0'}}>
          {tokens.slice(0, tokens.length - 1).map((line, i) => (
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