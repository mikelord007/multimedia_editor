import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from '../components/PrivateRoute'
import Auth from '../pages/auth'
import HomePage from "../pages/Homepage";

const Routes = () => {

        const routes = useRoutes([
                {
                        path: '',
                        element: <HomePage/>
                },
                {
                        path: '/auth',
                        element: <Auth/>
                },
                {
                        path: '/dashboard',
                        element: <PrivateRoute Component={Dashboard}/>
                }
        ])

	return routes;
}

export default Routes;