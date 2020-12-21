import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Tabs from "../components/tabs"


const workCats = ["All", "Desktop/ Mobile" , "Extended Reality", "Prototyping" ,"Creative Coding"]

const IndexPage = ({ data }) => (
  <Layout>
    <Tabs>
      {workCats.map((element) =>
          <div label={element}>
              <Masonry className="showcase">
              {data.allDatoCmsWork.edges
                  .filter(({ node }) => node.category.includes(element))          
                  .map(({node: work}) => (
                    <div key={work.id} className="showcase__item">
                        <figure className="card">
                            <Link to={`/works/${work.slug}`} className="card__image">
                                <Img fluid={work.coverImage.fluid} />
                            </Link>
                            <figcaption className="card__caption">
                                <h6 className="card__title">
                                    <Link to={`/works/${work.slug}`}>{work.title}</Link>
                                </h6>
                                <div className="card__description">
                                    <p>{work.excerpt}</p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
              ))}
          </Masonry>
          </div>
      )}
    </Tabs>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          category
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
