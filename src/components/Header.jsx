import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>My App</h1>
      </Link>
      <nav>
        <Link to="/user" className="header__button">
          User
        </Link>
        <Link to="/article" className="header__button">
          Article
        </Link>
      </nav>
    </header>
  );
};
