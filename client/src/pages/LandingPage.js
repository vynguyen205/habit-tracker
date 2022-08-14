import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

// TODO: work on incorporating these routes into the landing page
import { useAuth } from '../utils/auth';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

// TODO: maybe include useState or useEffect? need to look into this more 
const Home = () => {
    const { data, loading } = useQuery(QUERY_USER, {
        fetchPolicy: 'no-cache',
    });


  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Groove!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Productivity looks good on you 😉 </h2>
        {/* TODO: add button to bring up signup form */}
        {/* <button to="/SignupForm"></button> */}
        
      </div>
      <div className="card-footer text-center m-3">
        <h2>Already have an account?</h2>
        <Link to="/Dashboard">
            {/* TODO: add button for login form  */}
          <button className="btn btn-lg btn-danger">View Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
