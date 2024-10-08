export interface User {
    id: number;
    name: string;
  }
  
  export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export interface Album {
    userId: number;
    id: number;
    title: string;
  }
  