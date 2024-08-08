import React, { useState, useEffect } from 'react';
import './App.css';
import { User, Post, Album } from './types';
import Sidebar from './components/Sidebar';
import UserSelect from './components/UserSelects';
import UserPosts from './components/UserPosts';
import UserAlbums from './components/UserAlbums';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleUserSelect = (userId: number) => {
    fetchUserPosts(userId);
    fetchUserAlbums(userId);
  };

  const fetchUserPosts = (userId: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPosts(data));
  };

  const fetchUserAlbums = (userId: number) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  };

  return (
    <div className="app">
      <Sidebar />
      <main>
        <h1>User Details</h1>
        <div className="user-select">
          <UserSelect users={users} onSelectUser={handleUserSelect} />
        </div>
        <div className="user-content">
          <div className="user-albums">
            <UserAlbums albums={albums} />
          </div>
          <div className="user-posts">
            <UserPosts posts={posts} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
