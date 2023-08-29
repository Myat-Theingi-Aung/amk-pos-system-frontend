import { createBrowserRouter } from 'react-router-dom'
import NotFound from './views/NotFound';
import Home from './views/Home';
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import ConfirmOldPassword from './views/auth/ConfirmOldPassword';

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
    path: '/register',
    element: <Register />
  },
  {
    path: '/about',
    element: <AboutUs />
  },
  {
    path: '/contact-us',
    element: <ContactUs />
  },
  {
    path: '/confirm-old-password',
    element: <ConfirmOldPassword />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router;
