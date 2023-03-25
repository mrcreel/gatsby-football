import * as React from "react"
import { Link,graphql } from "gatsby"


import Layout from "../components/layout"

const SchoolsPage = (props) => {
  const schools = props.data.allMongodbRawDataSchool.edges
  return (
    <Layout pageTitle="Schools">
      <p>Under Construction</p>
      <div>
        <div className="schoolList">
        {schools.map(school =>
            <div className="schoolCard">
              <Link to={'/school/' + school.node.slug}>
                <h3>{school.node.name}</h3>
              </Link>
            </div>
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