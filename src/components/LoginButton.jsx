import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import React from 'react';

export const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();
  console.log(user);

 

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
