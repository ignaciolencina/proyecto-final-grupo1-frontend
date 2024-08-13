import PropTypes from "prop-types";
import "./profileCardStyle.css";

const ProfileCard = (props) => {
    const { profileImage, profileName, profileDescription } = props;
  return (
    <section>
      <div className="profileCard">
        <div className="profileFrame">
          <div className="profileFront">
            <img
              alt={profileName}
              className="profilePicture"
              src={profileImage}
            />
          </div>
        </div>
        <div>
          <h2 className="text-light bodyFont">{profileName}</h2>
        </div>
        <div className="profileDescription">
          <p className="text-light text-center bodyFont">
            {profileDescription}
          </p>
        </div>
      </div>
    </section>
  );
};
export default ProfileCard;

ProfileCard.propTypes = {
    profileImage: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired,
    profileDescription: PropTypes.string.isRequired,
  };