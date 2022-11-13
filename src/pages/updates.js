import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"

const Updates = ({ data: { updates } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={news.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{updates.title}</h1>
        <p className="sheet__byline">{updates.subtitle}</p>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: updates.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Updates

export const query = graphql`
  query UpdatesQuery {
    research: datoCmsUpdates {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
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
