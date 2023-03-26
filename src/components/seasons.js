import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from './layout'

import {
  seasonList,
  seasonRow
} from './seasons.module.css'

class School extends React.Component{
    render(){
        const seasons = this.props.data.allMongodbRawDataSeason.edges
        const school = this.props.data.allMongodbRawDataGame.edges[0].node
        return(
            <Layout pageTitle={school.name + ' ' + school.mascot}>
                <section className={seasonList}>
                    {seasons.map(season =>
                      <div className={seasonRow}>
                        {season.node.season}
                        {' '}
                        {season.node.district}
                      </div>
                    )}
                </section>
                
            </Layout>
        )
    }
}

export default School

export const pageQuery = graphql
`
query($slug: String!){
  allMongodbRawDataGame(
  limit: 1,
  sort: {season: DESC}
  filter: {
    slug: {eq: $slug}
  }){
    edges{
      node{
        slug
        name
        season
        mascot
      }
    }
  } 
  allMongodbRawDataSeason(filter: {slug: {eq: $slug}}){
    edges{
      node{
        slug
        season
        district
      }
    }
  }    
}
`