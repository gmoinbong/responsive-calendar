import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFilterStore } from '../../store/filterStore';
import { TaskType } from '../../store/taskStore';

type FilterProps = {};

export const StyledFilter = styled.div``;

const Filter: React.FC<FilterProps> = () => {
  const { setFilterName } = useFilterStore();
  const [filters, setFilters] = useState<TaskType[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, title } = e.target;

    setFilters((prev) =>
      checked
        ? [...prev, title as TaskType]
        : prev.filter((filter) => filter !== title)
    );
  };

  useEffect(() => {
    setFilterName(filters);
  }, [filters, setFilterName]);

  return (
    <StyledFilter>
      <h1>Filter Component</h1>
      <br />
      <p>
        in progress:
        <input
          type="checkbox"
          checked={filters.includes('in_progress')}
          onChange={handleCheckboxChange}
          title="in_progress"
        />
      </p>
      <br />
      <p>
        done:
        <input
          type="checkbox"
          checked={filters.includes('done')}
          onChange={handleCheckboxChange}
          title="done"
        />
      </p>
      <br />
      <p>
        pending:
        <input
          type="checkbox"
          checked={filters.includes('pending')}
          onChange={handleCheckboxChange}
          title="pending"
        />
      </p>
    </StyledFilter>
  );
};

export default Filter;
