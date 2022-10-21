import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from '../components/PrivateRoute'
import Auth from '../pages/auth'
import HomePage from "../pages/Homepage";
import ImageEditor from "../pages/ImageEditor";

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
                },
                {
                        path: '/imgeditor',
                        element: <PrivateRoute Component={ImageEditor}/>
                }
        ])

	return routes;
}

export default Routes;