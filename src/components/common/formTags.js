const Select = () => (
  <div className="flex justify-center">
    <div className="m-3 w-28">
      <select
        className="form-select appearance-none block w-full px-3 py-2 text-base font-normal  text-gray-700  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue- focus:outline-none cursor-pointer"
        aria-label="Default select example"
      >
        <option defaultValue="">Region</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
);

export default Select;
