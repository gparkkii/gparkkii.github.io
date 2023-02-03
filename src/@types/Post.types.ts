import { IGatsbyImageData } from 'gatsby-plugin-image';

export type PostType = {
  node: {
    id: string;
    frontmatter: PostFrontMatterType;
  };
};

export type PostFrontMatterType = {
  title: string;
  summary: string;
  date: string;
  categories: string[];
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};
