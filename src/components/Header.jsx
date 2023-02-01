import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';

export const Header = () => {
  const { isAuthenticated, user } = useAuth0();

  console.log(user);
  return (
    <header>
      <Link to="/">
        <h1>My App</h1>
      </Link>
      <nav>
        {!isAuthenticated && <LoginButton />}

        {isAuthenticated && (
          <div>
            {' '}
            <LogoutButton />
            <Link to="/user" className="header__button">
              User
            </Link>
          </div>
        )}
        <Link to="/article" className="header__button">
          Article
        </Link>
      </nav>
    </header>
  );
};
