import { IGatsbyImageData } from 'gatsby-plugin-image';

export type PostType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: PostFrontMatterType;
  };
};

export type PostFrontMatterType = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    publicURL: string;
  };
};

export type DiaryType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: DiaryFrontMatterType;
  };
};

export type DiaryFrontMatterType = {
  title: string;
  date: string;
  index: number;
  summary: string;
};
