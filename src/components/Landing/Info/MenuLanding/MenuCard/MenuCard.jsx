import { useSession } from "../../../../../stores/useSession";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./menuCardStyle.css";

const MenuCard = (props) => {
  const { categoryImage, categoryName, categoryDescription } = props;
  const { isLoggedIn } = useSession();
  return (
    <div className="menuCard me-4 my-4">
      {!isLoggedIn && (
        <Link to="/login">
          <div className="menuImage">
            <img
              alt={categoryName}
              src={categoryImage}
            />
          </div>
        </Link>
      )}
      <div className="menuText mt-3 ps-3">
        <h5>
          {categoryName}{" "}
          <span>
            <i className="bi bi-arrow-up-right-circle"></i>
          </span>
        </h5>
        <p>{categoryDescription}</p>
      </div>
    </div>
  );
};
export default MenuCard;

MenuCard.propTypes = {
  categoryImage: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryDescription: PropTypes.string.isRequired,
};
