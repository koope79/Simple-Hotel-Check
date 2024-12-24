import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Login from './components/Login/Login';
import RequireAuth from './components/hoc/withRequireAuth';
import { store } from './redux/redux-store';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </div>
  );
}

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
export default AppContainer;
