export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface Service {
  title: string;
  description: string;
  tags: string[];
}
