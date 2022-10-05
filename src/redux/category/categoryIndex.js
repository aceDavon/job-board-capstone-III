import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Search, selectAllJobs } from '../search/searchSlice';
import Spinners from '../../components/spinners';

const CategoryIndex = () => {
  const dispatch = useDispatch();
  const { tag } = useParams();
  const { jobs } = useSelector(selectAllJobs);
  let filter = [];
  React.useEffect(() => {
    dispatch(Search({ country: 'us' }));
  }, [dispatch]);
  const check = jobs.filter((x) => (x.category.tag === tag));
  filter = check;
  return (
    <div className="flex justify-center flex-wrap px-4 gap-2">
      { jobs.length > 0
        ? filter.length !== 0
          ? filter.map((x) => {
            const {
              id, description, company, title, category, redirect_url,
            } = x;
            return (
              <div
                className="card border border-green-300 border-info shadow-0 mb-3"
                style={{ maxWidth: '18rem' }}
                key={id}
              >
                <div className="card-header font-bold text-xl border-2 bg-gray-400 px-2">
                  {company.display_name}
                </div>
                <div className="card-body my-2 px-4">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    {description.slice(0, 125)}
                    { ' ' }
                    <a href={redirect_url} className="text-blue-600 text-base capitalize" target="_blank" rel="noreferrer">
                      ...learn more
                    </a>
                  </p>
                  <span className="border text-gray-200 font-thin text-xs">{ category.label }</span>
                </div>
              </div>
            );
          })
          : <p className="text-2xl font-semibold capitalize my-5">No jobs for this category</p>
        : (<Spinners />)}
    </div>
  );
};

export default CategoryIndex;
