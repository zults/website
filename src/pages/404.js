import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{height: '80vh', background: '#000', color: '#fff', paddingTop: '20vh', textAlign: 'center'}}>
      <h1 style={{fontSize: '2.4rem'}}>404</h1>
      <p>Página não encontrada</p>
    </div>
  </Layout>
)

export default NotFoundPage
