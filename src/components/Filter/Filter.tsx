import React, { useState, useEffect } from 'react';
import { useFilterStore } from '../../store/filterStore';
import { TaskType } from '../../store/taskStore';
import { FilterWrapper, FilterItem, Checkbox, StyledH1 } from './Filter.styles';
import { StatusColor } from '../Tasks/Task.styles';

const Filter: React.FC = () => {
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
    <FilterWrapper>
      <StyledH1>Filter Tasks</StyledH1>
      <FilterItem>
        <StatusColor $statusColor='#61bd4f' />
        in progress:
        <Checkbox
          type="checkbox"
          checked={filters.includes('in_progress')}
          onChange={handleCheckboxChange}
          title="in_progress" />
      </FilterItem>
      <FilterItem>
        <StatusColor $statusColor='#0079bf' />
        done:
        <Checkbox
          type="checkbox"
          checked={filters.includes('done')}
          onChange={handleCheckboxChange}
          title="done"
        />
      </FilterItem>
      <FilterItem>
        <StatusColor $statusColor='#ff9f1a' />
        pending:
        <Checkbox
          type="checkbox"
          checked={filters.includes('pending')}
          onChange={handleCheckboxChange}
          title="pending"
        />
      </FilterItem>
    </FilterWrapper>
  );
};

export default Filter;
