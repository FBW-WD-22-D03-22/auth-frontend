import React from 'react';

export const User = () => {

  const user = {
    name: 'John Doe',
    email: 'doe@mail.com',
    picture : "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  }

  return (
      <div className="user">
        <div className="user__card">
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    )

};
