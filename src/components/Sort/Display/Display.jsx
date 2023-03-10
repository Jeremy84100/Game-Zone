import { MdOutlineTableRows } from "react-icons/md";
import { CgViewCols } from "react-icons/cg";

const Display = ( {handleLayoutClick} ) => {
  return (
    <div className="Display sort">
      <div onClick={() => handleLayoutClick('cols')}>
        <h3>
          <CgViewCols/>
        </h3>
      </div>
      <div onClick={() => handleLayoutClick('rows')}>
        <h3>
          <MdOutlineTableRows />
        </h3>
      </div>
    </div>
  );
};

export default Display;
