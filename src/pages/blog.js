import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <section className="section section__blog">
      <h1>This is my blog page.</h1>
    </section>
  </Layout>
)

export default Blog
