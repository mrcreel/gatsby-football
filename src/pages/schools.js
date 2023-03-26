import * as React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"

import {
  schoolList,
  schoolCard
} from './schools.module.css'

const SchoolsPage = (props) => {
  const schools = props.data.allMongodbRawDataSchool.edges
  return (
    <Layout pageTitle="Schools">
      <div>
        <div className={schoolList} >
        {schools.map(school =>
          <Link className={schoolCard} to={'/seasons/' + school.node.slug}>
            <h3>{school.node.name}</h3>
          </Link>
        )}
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <title>Schools</title>

export default SchoolsPage

export const pageQuery = graphql`
query allSchools{
  allMongodbRawDataSchool{
    edges{
      node{
        id
        slug
        name
        inState
      }
    }
  }
}
`