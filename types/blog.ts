export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  id: number; // Changed _id to id
  title: string;
  description: string; // Changed from metadata to description
  features: string[]; // List of features
  video: string; // URL for the video
  link: string; // Link to the application
};
