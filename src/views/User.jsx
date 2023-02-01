import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useEffect } from 'react';

export const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="user">
        <div className="user__card">
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    )
  );
};
