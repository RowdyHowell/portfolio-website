import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '0.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'var(--red)',
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
  </div>
)

export default Header
