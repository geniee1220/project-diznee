import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import GlobalStyles from './styles/GlobalStyles';

import MainTemplates from './components/Templates/MainTemplates';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<MainTemplates />}>
            <Route index element={<LoginPage />}></Route>
            <Route path="main" element={<MainPage />}></Route>
            <Route path=":movieId" element={<DetailPage />}></Route>
            <Route path="search" element={<SearchPage />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
