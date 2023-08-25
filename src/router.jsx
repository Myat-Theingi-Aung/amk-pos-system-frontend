import { createBrowserRouter } from 'react-router-dom'
import NotFound from './views/NotFound';
import Home from './views/Home';
import Login from './views/auth/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router;
