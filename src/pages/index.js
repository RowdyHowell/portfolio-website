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
      <div className={indexStyles.bio}>
        <p className={indexStyles.bioDesc}>my name is <span className={indexStyles.bioAccent}>rowdy howell.</span></p>
        <p className={indexStyles.bioDesc}>i like to solve problems using elegant <span className={indexStyles.bioAccent}>machine learning strategies.</span></p>
        <p className={indexStyles.bioDesc}>to support these strategies i also <span className={indexStyles.bioAccent}>architect platforms.</span></p>
        <p className={indexStyles.bioDesc}>at the end of the day i strive to foster <span className={indexStyles.bioAccent}>innovative teams</span> and <span className={indexStyles.bioAccent}>build successful products.</span></p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
