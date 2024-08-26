import ProfileCard from "./ProfileCard/ProfileCard";

import "./acercadeStyle.css";

import profileNacho from "../../../assets/Profile-Nacho.jpeg";
import profileLu from "../../../assets/Profile-Lucila.jpeg";
import profileIvan from "../../../assets/Profile-Ivan.png";
import profileLean from "../../../assets/Profile-Leandro.jpeg";

const AcercaDe = () => {
  return (
    <section className="about">
      <div className="aboutGif">
        <img
          alt="Burger Gif"
          src="https://images.wsj.net/im-973061?width=700&height=524"
        />
      </div>
      <section className="aboutSection">
        <div className="aboutTitle">
          <h2 className="text-start p-0 m-0">BURGER</h2>
          <h2 className="text-start p-0 m-0">TIME</h2>
        </div>
        <article className="aboutSubTitle">
          <h2>UN PLACER CONOCERTE</h2>
        </article>
        <article className="aboutText">
          <p className="bodyFont">
            En BurgerTuc, transformamos ingredientes frescos y locales en
            hamburguesas gourmet que destacan por su sabor auténtico y único.
            Cada bocado es una experiencia que combina calidad y pasión. ¡Vení y
            descubrí por qué somos el lugar favorito para los amantes de las
            hamburguesas en la ciudad!
          </p>
        </article>
        <article className="aboutProfiles">
          <ProfileCard
            profileDescription="Soy el creador de sabores. Mi misión es combinar ingredientes frescos y técnicas gourmet para ofrecer la mejor experiencia en cada bocado."
            profileImage={profileNacho}
            profileJob="COCINA"
            profileName="Ignacio Lencina"
          />
          <ProfileCard
            profileDescription="Organizar es mi especialidad. Me aseguro de que todo funcione a la perfección, desde el servicio hasta la gestión del día a día."
            profileImage={profileLu}
            profileJob="GERENCIA"
            profileName="Lucila Amand de Mendieta"
          />
          <ProfileCard
            profileDescription="Mantengo las cuentas en orden para que podamos seguir creando las mejores hamburguesas sin perder de vista nuestro crecimiento y estabilidad."
            profileImage={profileIvan}
            profileJob="FINANZAS"
            profileName="Iván Balceda"
          />
          <ProfileCard
            profileDescription="Desde nuestras redes sociales hasta la experiencia digital, me encargo de que cada cliente conozca nuestra pasión por las hamburguesas y vuelva por más."
            profileImage={profileLean}
            profileJob="MARKETING"
            profileName="Leandro Vinticol"
          />
        </article>
      </section>
    </section>
  );
};
export default AcercaDe;
