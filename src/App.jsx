import Router from "./router";
import { BrowserRouter, useRoutes } from "react-router-dom";

const Routes = () => {

	const routes = useRoutes([
		{
            path: '',
            element: <h1>Hello world!</h1>
        }
	])

	return routes;
}

const App = () => {
  return (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
  )
}

export default App