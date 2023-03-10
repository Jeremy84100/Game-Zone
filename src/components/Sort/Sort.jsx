import Filter from "./Filter/Filter";
import Display from "./Display/Display";

const Sort = ({ selectedGenre, handleFilter, handleLayoutClick }) => {
  return (
    <div className="Sort">
      <Filter selectedGenre={selectedGenre} handleFilter={handleFilter} />
      <Display handleLayoutClick={handleLayoutClick}/>
    </div>
  );
};

export default Sort;
