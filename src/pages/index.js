import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web design`, `web developer`, `freelance`]} />
    <section className="section section__about">
      <h1>
        Hi. My name is Matt, and I am a web developer from Tucson, AZ.
      </h1>
      <h2>
        I build modern websites that help businesses in capturing leads.
      </h2>
    </section>
  </Layout>
)

export default IndexPage
