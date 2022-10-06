import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllJobs } from '../redux/search/searchSlice';
import Spinners from './spinners';

const SearchIndex = () => {
  const { search } = useSelector(selectAllJobs);
  return (
    <div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalScrollable"
        tabIndex="-1"
        aria-labelledby="exampleModalScrollableLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                Search Results
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body relative p-4">
              {/* Job Cards */}
              {search.length > 0 ? (
                search.map((x) => {
                  const {
                    id, title, description, location, company, redirect_url,
                  } = x;
                  return (
                    <div
                      className="flex justify-center border border-blue-400 rounded-md my-4"
                      key={id}
                    >
                      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <span className="text-xs font-thin text-gray-700 block">
                          {location.display_name}
                        </span>
                        <span className="text-xs font-thin text-gray-700 block">
                          {company.display_name}
                        </span>
                        <h5 className="text-gray-900 text-xl font-semibold leading-tight mb-2 capitalize">
                          {title}
                        </h5>
                        <p className="text-gray-700 text-base mb-4">
                          {description}
                        </p>
                        <a
                          href={redirect_url}
                          target="_blank"
                          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          rel="noreferrer"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  );
                })
              ) : (
                <Spinners />
              )}
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchIndex;
