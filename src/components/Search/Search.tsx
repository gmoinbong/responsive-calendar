import React from 'react';
import { SearchWrapper, SearchInput } from './Search.styles';

type SearchProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchWrapper>
      <h1>Search Tasks</h1>
      <SearchInput
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchWrapper>
  );
};

export default Search;
