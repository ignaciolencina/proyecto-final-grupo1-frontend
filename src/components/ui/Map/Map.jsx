import "./mapStyle.css";

const Map = () => {
  return (
    <iframe
      allowfullscreen=""
      className="map"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14240.471676484018!2d-65.22553181564534!3d-26.836201502855655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e8d0271b7%3A0x7946062ac490db30!2sGral.%20Jos%C3%A9%20Mar%C3%ADa%20Paz%20576%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1723684258454!5m2!1ses-419!2sar"
    ></iframe>
  );
};
export default Map;
