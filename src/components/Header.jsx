import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';

export const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  
  console.log(user);
  return (
    <div className="header">
      {!isAuthenticated && <LoginButton />}

      {isAuthenticated && (
        <>
          {' '}
          <LogoutButton />
          <Link to="/user">User</Link>
        </>
      )}
      <Link to="/article">Article</Link>
    </div>
  );
};
