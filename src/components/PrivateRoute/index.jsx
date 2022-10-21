import { useContext } from 'react';
import ReactContext from '../../context/authContextWrapper'
import { Navigate  } from "react-router-dom";

const PrivateRoute = ({Component}) => {
    const cntxt = useContext(ReactContext)

    if(cntxt.state?.user?.aud)
      return (
        <Component/>
      )

    else
        {
          return <Navigate to="/auth" replace />;
        }
}

export default PrivateRoute