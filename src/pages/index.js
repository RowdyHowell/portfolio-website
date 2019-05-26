import React from 'react'

import Layout from '../components/Layout'
import indexStyles from './index.module.css'
import headshot from './Rowdy.jpg'

const IndexPage = () => (
  <Layout>
    <div className={indexStyles.intro}>
      <div className={indexStyles.headshotContainer}>
        <img className={indexStyles.headshot} src={headshot} alt='my face'/>
      </div>
      <div className={indexStyles.titles}>
        <h2>machine learning engineer.</h2>
        <h2>platform architect.</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
