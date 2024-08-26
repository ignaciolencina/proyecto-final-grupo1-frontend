import { useNavigate } from 'react-router-dom';
import './error404Style.css';

const Error404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="error-container">
      <h1 className="error-title">Oops! Error 404</h1>
      <p className="error-message">Parece que te has perdido...</p>
      <button className="error-button" onClick={handleGoHome}>
        Volver a la página principal
      </button>
    </div>
  );
};

export default Error404;
