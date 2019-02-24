import React from "react";
import Article from "../components/article";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default ({ data }) => (
  <Layout>
    {data.allWordpressPost.edges.map(({ node }, index) => (
      <Article
        key={index}
        url={node.link}
        title={node.title}
        date={node.date}
        description={node.excerpt}
        categories={node.categories}
      />
    ))}
  </Layout>
);

export const query = graphql`
  {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          link
          date(formatString: "MMM DD, YYYY")
          categories {
            id
            name
          }
        }
      }
    }
  }
`;
