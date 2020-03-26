import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import PortfolioHome from '../components/PortfolioHome'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Zults" description="Somos uma agência de marketing digital especializada em desenvolvimento de sites e gestão de redes sociais. Atendemos Varginha, Minas Gerais e onde você estiver" />
      <Hero />
      <Services />
      <PortfolioHome />
      <Clients />
      <Contact />
  </Layout>
)

export default IndexPage
