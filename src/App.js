import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { fetchCategory } from './redux/category/categorySlice';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
