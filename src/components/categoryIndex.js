import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Spinners from './spinners';
import { selectAllJobs } from '../redux/search/searchSlice';

const CategoryIndex = () => {
  const { id } = useParams();
  const { jobs } = useSelector(selectAllJobs);
  const check = jobs.filter((x) => x.id === id);
  return (
    <div className="flex justify-center flex-wrap px-4 gap-2 w-full relative">
      <Link to="/" className="text-4xl text-blue-600 absolute left-16 py-2">Go Back Home</Link>
      {jobs.length > 0 ? (
        check.length !== 0 ? (
          check.map((x) => {
            const {
              title,
              description,
              id,
              location,
              company,
              category,
              salary_is_predicted,
              redirect_url,
            } = x;
            return (
              <div
                className="flex justify-center w-11/12 relative top-16"
                key={id}
              >
                <div className="block p-6 rounded-lg shadow-lg bg-white w-64 lg:8/12 grow">
                  <div className="border-b px-2 py-1 mb-4 flex flex-col">
                    <span className="text-xs font-thin text-slate-400">
                      {location.display_name}
                    </span>
                    <span className="text-xs font-thin text-slate-400">
                      {company.display_name}
                    </span>
                    <span className="text-xs font-thin text-slate-400">
                      {category.label}
                    </span>
                  </div>
                  <h2 className="text-gray-900 text-base leading-tight font-semibold mb-2">
                    {title}
                  </h2>
                  <p className="text-gray-700 text-base mb-4">{description}</p>
                  <p className="text-base font-semibold text-black mb-4">
                    Salary:
                    {salary_is_predicted !== '0' ? (
                      `$ ${x.salary_max}`
                    ) : (
                      <span className="font-thin text-sm italic">
                        Pay not supplied
                      </span>
                    )}
                  </p>
                  <a
                    href={redirect_url}
                    target="_blank"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3"
                    rel="noreferrer"
                  >
                    Apply
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-2xl font-semibold capitalize my-5">
            No jobs for this category
          </p>
        )
      ) : (
        <Spinners />
      )}
    </div>
  );
};

export default CategoryIndex;
