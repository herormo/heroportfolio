import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className='homelayout'>
      <div style={{ maxWidth: `500px`, paddingTop: `2rem`  }}>
        <h1>Hey, you!</h1>
        <p>I am a software developer from Kurdistan leading software development with 
          <a href='potan.co'> Potan </a> and promoting tech with 
          <a href='hackasuly.com'> Hackasuly! </a>
          </p>
      </div>
      {/* <div style={{ maxWidth: `300px`}}>
        <Image />
      </div> */}
    </section>
  </Layout>
)

export default IndexPage
