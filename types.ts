
export interface ModuleItem {
  id: number;
  title: string;
  description: string;
  videos?: { title: string; url: string; videoId?: string }[];
  status?: string;
}

export interface SupportChannel {
  channel: string;
  time: string;
  link: string;
  linkText: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}
