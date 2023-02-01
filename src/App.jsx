import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { LandingPage } from './views/LandingPage.jsx';
import { User } from './views/User.jsx';
import { Article } from './views/Article.jsx';
import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/user" element={<User />} />
            <Route path="/article" element={<Article />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
