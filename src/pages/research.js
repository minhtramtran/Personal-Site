import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"

const Research = ({ data: { research } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={research.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{research.title}</h1>
        <p className="sheet__byline">{research.subtitle}</p>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: research.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Research

export const query = graphql`
  query ResearchQuery {
    research: datoCmsResearch {
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
