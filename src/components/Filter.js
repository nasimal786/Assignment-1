import React, { useState } from "react";

function Filter({ data, filterData }) {
  const [selectedOption, setSelectedOption] = useState(0);
  const handleFilter = (event) => {
    const minutes = parseInt(event.target.value);
    setSelectedOption(minutes);
    filterData(minutes);
  };
  return (
    <div>
      <label>Filter:</label>
      <select value={selectedOption} onChange={handleFilter}>
        <option value={0}>Show All</option>
        <option value={10}>Last 10 Minutes</option>
        <option value={60}>Last 1 Hour</option>
      </select>
    </div>
  );
}

export default Filter;
