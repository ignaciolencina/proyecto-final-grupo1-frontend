import ProfileCard from "./ProfileCard/ProfileCard";

import "./acercadeStyle.css"
 
import profileNacho from "../../../assets/Profile-Nacho.jpeg";
import profileLu from "../../../assets/Profile-Lucila.jpeg";
import profileIvan from "../../../assets/Profile-Ivan.png";

const AcercaDe = () => {
  return (
    <section>
      <article className="aboutTitle">
        <h2 className="titleFont">UN PLACER CONOCERTE</h2>
      </article>
      <article className="aboutText">
        <p className="bodyFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloribus dignissimos rem assumenda quisquam laboriosam necessitatibus possimus quibusdam culpa nesciunt reprehenderit! Sapiente similique optio veniam architecto. Consequuntur esse harum facilis.</p>
      </article>
      <article className="aboutSection">
        <ProfileCard
          profileDescription="Hola mi nombre es Ignacio, soy estudiante de programación fullstack en Rolling Code School, la cual se encuentra en San Miguel de Tucumán, Tucumán, Argentina."
          profileImage={profileNacho}
          profileName="Ignacio Lencina"
        />
        <ProfileCard
          profileDescription="Hola mi nombre es Lucila, soy estudiante de programación fullstack en Rolling Code School, la cual se encuentra en San Miguel de Tucumán, Tucumán, Argentina."
          profileImage={profileLu}
          profileName="Lucila Amand de Mendieta"
        />
        <ProfileCard
          profileDescription="Hola mi nombre es Iván, soy estudiante de programación fullstack en Rolling Code School, la cual se encuentra en San Miguel de Tucumán, Tucumán, Argentina."
          profileImage={profileIvan}
          profileName="Iván Balceda"
        />
        <ProfileCard
          profileDescription="Hola mi nombre es Leandro, soy estudiante de programación fullstack en Rolling Code School, la cual se encuentra en San Miguel de Tucumán, Tucumán, Argentina."
          profileImage={profileNacho}
          profileName="Leandro Vinticol"
        />
      </article>
    </section>
  );
};
export default AcercaDe;
