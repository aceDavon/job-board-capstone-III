import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../App';
import CategoryIndex from '../../components/categoryIndex';
import Welcome from '../../welcome';
import Store from '../configureStore';

describe('test for all components', () => {
  it('test landing component', () => {
    const landing = render(
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route element={<App />} path="/">
              <Route element={<Welcome />} index />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(landing).toMatchSnapshot();
  });

  it('test Category component', () => {
    const category = render(
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route element={<App />} path="/">
              <Route path="/category">
                <Route path=":id" element={<CategoryIndex />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(category).toMatchSnapshot();
  });
});
