import { Link } from "gatsby"
import React from "react"


export interface Props {
  siteTitle?: string;
  menuLinks: any;
}

const Header: React.FC<Props> = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h5 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h5>
    </div>
    <div>
      <nav>
        <ul style={{ display: "flex", flex: 1 }}>
          {menuLinks.map((link: any) =>(
            <li
            key={link.name}
            style={{
              listStyleType:`none`,
              padding:`1rem`
            }}
            >
              <Link 
              style={{
                color:'black', 
                textDecoration: `none`,
                }} 
                to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header