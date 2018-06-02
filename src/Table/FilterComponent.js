import React from "react";
import SearchInput from "../Input/SearchInput";

const FilterComponent = ({ filter, onChange }) => (
  <SearchInput onChange={onChange} value={filter ? filter.value : ""} />
);

export default FilterComponent;
