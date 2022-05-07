import './App.css';
import { BrowserRouter, Link, Route, Routes, } from "react-router-dom";
import Home from './components/home';
import Book from './components/book';
import Favorite from './components/favorite';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul className="navbar2">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/books'>Books</Link></li>
            <li><Link to='/favorite'>favorite books</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Book />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
