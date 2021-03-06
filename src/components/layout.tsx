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
          display: `flex`,
          flexDirection:`column`,
          minHeight:`100vh`,
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0px 1.5rem 1.5rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <nav>
            <ul>
              <li> Home </li>
              <li> Blog </li>
              <li> Contact </li>
            </ul>
            <ul>
              <li> Github </li>
              <li> LinkedIn </li>
              <li> Twitter </li>
            </ul>
            <ul>
              <li> Potan </li>
              <li> Hackasuly </li>
            </ul>
          </nav>

          Copyright © Hero Mohammed {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

export default Layout