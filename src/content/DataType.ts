export type DataType = {
  introduction: {
    html: string;
  };
  reading: GraphValue<{
    frontmatter: {
      title: string;
      author: string;
      ranking?: number;
    };
  }>;
  skill: GraphValue<{
    frontmatter: {
      title: string;
    };
    html: string;
  }>;
  experience: GraphValue<{
    frontmatter: {
      date: string;
      title: string;
      company: string;
      start: string;
      duration: string;
    };
    html: string;
  }>;
};

type GraphValue<T> = {
  edges: {
    node: T;
  }[];
};
