import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface BaseFields {
  slug: string;
}

export interface BaseNode<T = Record<string, unknown>> {
  id: string;
  fields: BaseFields;
  timeToRead: number;
  frontmatter: T;
}

export interface GraphQLEdges<T> {
  edges: Array<{ node: T }>;
}

export interface GraphQLData<T> {
  posts: GraphQLEdges<T>;
}

export interface DescriptionProps {
  title: string;
  date: string;
  category: string;
  time: number;
}

export interface ThumbnailProps {
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    publicURL?: string;
  };
}

export interface FrontmatterProps extends DescriptionProps, ThumbnailProps {
  summary: string;
}

export type ContentNode = BaseNode<FrontmatterProps>;

export interface ContentItemNode extends BaseNode<FrontmatterProps> {
  html: string;
}

export interface PostItemListProps {
  posts: Array<{ node: ContentNode }>;
}

export interface PostItemProps extends FrontmatterProps {
  link: string;
}

export interface LatestPostsProps {
  posts: GraphQLEdges<ContentNode>;
}

export interface CategoryItem {
  fieldValue: string;
  totalCount: number;
}

export interface CategoryListData {
  group: CategoryItem[];
}

export interface CategoryProps {
  categoryList: CategoryListData;
}

export interface PostTemplateProps {
  data: {
    posts: GraphQLEdges<ContentItemNode>;
  };
}

export interface CategoryTemplateProps {
  data: GraphQLData<ContentNode>;
  pageContext: {
    category: string;
    count: number;
  };
}

export interface IndexProps {
  data: GraphQLData<ContentNode>;
}

export interface MetaProps {
  title?: string;
  description?: string;
  cover?: string;
}

export interface SEOProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
  file: {
    publicURL: string;
  };
}

export type ContentProps = { node: ContentNode };

export type ContentItemProps = { node: ContentItemNode };

export type CategoryItemProps = CategoryItem;
