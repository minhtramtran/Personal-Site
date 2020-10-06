import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"

const Blog = ({ data }) => (
  <Layout>
      {data.allDatoCmsBlogPost.edges.map(({ node: blogpost }) => (
        <article className="sheet">
          <div className="sheet__inner">
              <h6 className="card__title">
                <Link to={`/blog/${blogpost.slug}`}>{blogpost.title}</Link>
              </h6>
              <div className="card__description">
              <p>{blogpost.publishDate} ⏤ {blogpost.excerpt}</p>
              </div>
          </div>
        </article>
      ))}
  </Layout>
)

export default Blog

export const query = graphql`
  query BlogQuery {
    allDatoCmsBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishDate (formatString: "DD.MM.YYYY")
          meta{
            createdAt (formatString: "DD.MM.YYYY")
          }
          excerpt
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
