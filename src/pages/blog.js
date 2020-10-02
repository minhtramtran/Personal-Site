import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby'

const Blog = ({ data }) => (
  <Layout>
      {data.allDatoCmsBlogPost.edges.map(({ node: post }) => (
        <article className="sheet">
          <div className="sheet__inner">
              <h6 className="card__title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h6>
              <div className="card__description">
              <p>{post.meta.createdAt} ⏤ {post.excerpt}</p>
              </div>
          </div>
        </article>
      ))}
  </Layout>
)

export default Blog

export const query = graphql`
  query BlogQuery {
    allDatoCmsBlogPost(sort: { fields: [id], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          meta{
            createdAt (formatString: "MM.DD.YYYY")
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
