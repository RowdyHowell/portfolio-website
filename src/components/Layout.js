import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import layoutStyles from './Layout.module.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={layoutStyles.body}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: "Rowdy Howell's portfolio website",
            },
            {
              name: 'keywords',
              content:
                'rowdy, howell, machine learning, ai, data, data engineering, dallas, dialexa',
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={layoutStyles.content}>{children}</div>
      </div>
    )}
  />
)

export default Layout
