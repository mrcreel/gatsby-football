import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from './layout'

class School extends React.Component {
    render(){
        const school = this.props.data.mongodbRawDataSchool
        return(
            <Layout>
                <section>
                    <h1>{school.name}</h1>
                    <p>[Mascot will go here]</p>
                </section>
                <section>
                    [Seasons will go here]
                </section>
                
            </Layout>
        )
    }
}

export default School

export const pageQuery = graphql
`
query getSchool($slug: String!){
    mongodbRawDataSchool(slug:{eq: $slug}){
      id
      name
      slug
      inState
    }
  }
`