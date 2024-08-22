import { useSession } from "../../stores/useSession";
import UserProfileForm from "../../components/UserProfile/UserProfileForm";
import "./UserProfileStyle.css";
import "../../index.css";

const UserProfileView = () => {
  const { user } = useSession();

  return (
    <section className="user-profile-section">
      <article className="user-profile-card !important">
        <div className="user-profile-content">
          <h1 className="user-profile-titulo">
            {user?.firstname} {user?.lastname}
          </h1>
          <UserProfileForm />
        </div>
      </article>
    </section>
  );
};

export default UserProfileView;
