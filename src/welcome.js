import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinners from './components/spinners';
import { selectAllCategory } from './redux/category/categorySlice';

const Welcome = () => {
  const { category } = useSelector(selectAllCategory);
  return (
    <>
      <h2 className="text-blue-600 text-center text-4xl font-bold">
        Jobs Category
      </h2>
      <p className="text-center capitalize font-thin text-slate-400">
        -- Browse jobs by category --
      </p>
      <div className="flex justify-center my-4 gap-2 flex-wrap px-6">
        {category.length > 0 ? (
          category.map((x) => {
            const { tag, label } = x;
            return (
              <div
                className="flex justify-center basis-60 grow relative"
                key={tag}
              >
                <div className="block p-6 rounded-lg shadow-lg bg-white w-64">
                  <Link
                    to={`/${tag}`}
                    className="text-gray-900 text-xl leading-tight font-medium mb-2"
                  >
                    {label}
                  </Link>
                  <p className="text-gray-700 text-base mb-4">{tag}</p>
                </div>
              </div>
            );
          })
        ) : (
          <Spinners />
        )}
      </div>
    </>
  );
};

export default Welcome;
