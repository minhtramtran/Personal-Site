import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"

const Study = ({ data: { study } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={study.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{study.title}</h1>
        <p className="sheet__byline">{study.subtitle}</p>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: study.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Study

export const query = graphql`
  query StudyQuery {
    study: datoCmsStudy {
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
