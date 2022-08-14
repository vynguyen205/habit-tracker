import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

useEffect((showModal) => {
    setShowModal(showModal);
    }), [showModal];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Groove!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Productivity looks good on you 😉 </h2>
        <button to="/SignupForm"></button>
        
      </div>
      <div className="card-footer text-center m-3">
        <h2>Already have an account?</h2>
        <Link to="/Dashboard">
          <button className="btn btn-lg btn-danger">View Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
