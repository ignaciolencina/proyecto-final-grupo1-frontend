import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./categoryCardStyle.css";

const CategoryCard = (props) => {
  const { categoryImage, categoryName, categoryDescription } = props;

  return (
    <Link className="categoryLink" to="/menu">
      <div className="categoryCard me-4 my-4">
        <div className="categoryImage">
          <img alt={categoryName} src={categoryImage} />
        </div>
        <div className="categoryText mt-3 ps-3">
          <h5>
            {categoryName}{" "}
            <span>
              <i className="bi bi-arrow-up-right-circle"></i>
            </span>
          </h5>
          <p>{categoryDescription}</p>
        </div>
      </div>
    </Link>
  );
};
export default CategoryCard;

CategoryCard.propTypes = {
  categoryImage: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryDescription: PropTypes.string.isRequired,
};
