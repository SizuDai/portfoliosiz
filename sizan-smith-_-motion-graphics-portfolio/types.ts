
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  icon: string;
  description?: string;
  accentText?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
  series?: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
  };
}
