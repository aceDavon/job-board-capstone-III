import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import 'tw-elements';
import Welcome from './welcome';
import Store from './redux/configureStore';
import CategoryIndex from './components/categoryIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<Welcome />} index />
          <Route path="/category">
            <Route path=":id" element={<CategoryIndex />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
