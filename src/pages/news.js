import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"

const News = ({ data: { news } }) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">{news.title}</h1>
        <p className="sheet__byline">{news.subtitle}</p>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: news.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default News

export const query = graphql`
  query NewsQuery {
    research: datoCmsNews {
      title
      subtitle
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
