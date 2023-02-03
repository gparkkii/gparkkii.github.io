import * as React from 'react';
import { graphql, Link } from 'gatsby';
import DefaultLayout from '../components/layout/DefaultLayout';

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
    <DefaultLayout title="Info">
      <div>{title}</div>
      <div>{description}</div>
      <div>{author}</div>
      <Link to="/">HOME</Link>
    </DefaultLayout>
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
