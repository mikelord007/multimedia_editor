import Routes from "./router";
import { BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import {AuthProvider} from "./context/authContextWrapper";
import SupabaseAuthChecker from './utils/SupabaseAuthChecker'

const queryClient = new QueryClient()



const App = () => {


  return (
    <BrowserRouter>
      <AuthProvider>
        <SupabaseAuthChecker>
            <Routes/>
        </SupabaseAuthChecker>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App