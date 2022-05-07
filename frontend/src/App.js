import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from './components/home';
import Book from './components/book';
import Favorite from './components/favorite';
import Profile from './components/profile';
import React, { Component } from 'react'

export default function App() {
  // let history = useNavigate ();
  // function detail(){
  //   history.push('/books/3')
  // }
  return (
      <div className="App">
        <nav>
          <ul className="navbar2">
            <li><Link to='/'>Home</Link></li>
            {/* <li><Link to='/books'>Books</Link></li> */}
            <li><Link to='/favorite'>favorite books</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>
          {/* <button >click</button> */}
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/books/:id' element={<Book />} />
        </Routes>
      </div>
  )
}



