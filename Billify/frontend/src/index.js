import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Bill from './pages/Bill';
import EditBill from './pages/EditBill';
import AddBill from './pages/AddBill';
import DetailBill from './pages/DetailBill';
import About from './pages/About';
import Loading from './pages/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/bill/:_id" element={<DetailBill />} />
        <Route path="/bill/add" element={<AddBill />} />
        <Route path="/bill/edit/:_id" element={<EditBill />} />
        <Route path="/bill/about" element={<About />} />
        <Route path="/bill/loading" element={<Loading />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


