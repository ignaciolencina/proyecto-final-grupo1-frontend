import PropTypes from "prop-types";
import "./profileCardStyle.css";

const ProfileCard = (props) => {
    const { profileImage, profileName, profileDescription, profileJob } = props;
  return (
    <section>
      <div className="profileCard ms-3">
      <div className="profileJob">{profileJob}</div>
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
    profileJob: PropTypes.string.isRequired,
  };