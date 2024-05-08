export interface BlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  _createdAt: string;
  categories: string[];
}

export interface blogArticle {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
  _createdAt: string;
  categories: string[];
}

export interface ProjectCard {
  title: string;
  smallDescription: string;
  repo: string;
  titleImage: any;
  _createdAt: string;
  languages: string[];
}