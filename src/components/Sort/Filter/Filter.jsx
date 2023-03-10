const Filter = ({ selectedGenre, handleFilter }) => {
  return (
    <div className="Filter sort">
      <div>
      <h3> Filtrez par : <span id="filter-genre"> {selectedGenre || 'All'} </span></h3>

      </div>
      <div className="filter-clear" onClick={() => handleFilter('')}>
        <h3>Clear filter</h3>
      </div>
    </div>
  );
};

export default Filter;
