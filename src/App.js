import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import GlobalStyles from './styles/GlobalStyles';
import MainPage from './pages/main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
