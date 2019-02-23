import React from "react";
import Article from "../components/article";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <Article
      url=""
      title="Fix Like No One’s Watching"
      date="February 15, 2019"
      description="The other kind of technical debt."
    />
    <Article
      url=""
      title="The “Bug-O” Notation"
      date="January 25, 2019"
      description="What is the 🐞(n) of your API?"
    />
    <Article
      url=""
      title="Things I Don’t Know as of 2018"
      date="December 28, 2018"
      description="We can admit our knowledge gaps without devaluing our expertise."
    />
  </Layout>
);
