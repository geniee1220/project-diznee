import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Nav />
        {/* <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
