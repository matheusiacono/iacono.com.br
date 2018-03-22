const queryFrontmatter = graphql`
  query page($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
      }
    }
  }
`;

export default queryFrontmatter;
