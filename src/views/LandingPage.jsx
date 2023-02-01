import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import axios from 'axios';
export const LandingPage = () => {
  const { user } = useAuth0();
  useEffect(() => {
    if (!user) return;
    axios({
      method: 'post',
      url: 'http://localhost:5050/api/users',
      data: {
        name: user.given_name,
        email: user.email,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // get users from database with axios

    axios({
      method: 'get',
      url: 'http://localhost:5050/api/users',
    }).then((response) => {
      console.log(response.data);
    });
  }, [user]);

  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
    </div>
  );
};
