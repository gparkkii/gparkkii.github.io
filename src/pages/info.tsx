import React from 'react';
import { graphql, Link } from 'gatsby';

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
};

const InfoPage = ({ data }: InfoPageProps) => {
  const { title, description, author } = data.site.siteMetadata;
  return (
    <div>
      Info Page
      <div>{title}</div>
      <div>{description}</div>
      <div>{author}</div>
      <Link to="/">HOME</Link>
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
