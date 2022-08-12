import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'components/common/InputStyled';
import { FilterLabel } from './LabelStyles';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <FilterLabel htmlFor="filter"> Find contacts by name </FilterLabel>
      <Input
        type="text"
        name="filter"
        placeholder="Search contact"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
