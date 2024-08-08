import React from 'react';
import { Album } from '../types';

interface UserAlbumsProps {
  albums: Album[];
}

const UserAlbums: React.FC<UserAlbumsProps> = ({ albums }) => {
  return (
    <div className="user-albums">
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;

