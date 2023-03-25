/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  navBar,
  siteHeader
} from './layout.module.css'

const Layout = ({pageTitle, children }) => {
  const data = useStaticQuery( graphql`
    query{
      site{
        siteMetadata{
          title
          author
          siteUrl
        }
      }
    }
  `)
  return (
    <body>
      <div className={container}>
        <header className={siteHeader}>
          <h2 className={siteTitle}>{data.site.siteMetadata.title}</h2>      
          <nav className={navBar}>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link className={navLinkText} to="/">Home</Link>
              </li>
              <li className={navLinkItem}>
                <Link className={navLinkText} to="/schools">Schools</Link>
              </li>
              <li className={navLinkItem}>
                <Link className={navLinkText} to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </body>
  )
}

export default Layout
