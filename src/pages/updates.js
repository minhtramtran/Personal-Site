import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"

const Latest = ({ data: { latest } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={news.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{latest.title}</h1>
        <p className="sheet__byline">{latest.subtitle}</p>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: latest.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Latest

export const query = graphql`
  query LatestQuery {
    research: datoCmsLatest {
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
