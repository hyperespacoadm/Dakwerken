
export interface Project {
  id: string;
  category: 'Roofing' | 'Renovation' | 'Facade';
  title: string;
  description: string;
  images: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}
