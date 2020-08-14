import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import { oc } from "ts-optchain"
import { SiteTitleQueryQuery } from "../graphqltypes"
import Header from "./header"
import "./layout.css"

interface Props {
  children: ReactNode
}

const useSiteTitle = () => {
  const data: SiteTitleQueryQuery = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
              menuLinks {
                name
                link
              }
          }
        }
      }
    `
  )
  // return oc(data).site.siteMetadata.title("")
  return oc(data).site.siteMetadata;
}


const Layout: React.FC<Props> = ({ children }) => {
  const headerData = useSiteTitle()

  return (
    <>
      <Header menuLinks={headerData.menuLinks("")} siteTitle={headerData.title("")} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout