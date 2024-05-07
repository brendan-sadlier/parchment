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