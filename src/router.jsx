import { createBrowserRouter } from 'react-router-dom'
import NotFound from './views/NotFound';
import Home from './views/Home';
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';
import Products from './views/Products';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import ConfirmOldPassword from './views/auth/ConfirmOldPassword';
import ChangePassword from './views/auth/ChangePassword';
import SecurityQuestion from './views/auth/SecurityQuestion';
import Profile from './views/user/Profile';
import ProductShow from './views/product/Show'

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
    path: '/products',
    element: <Products />
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
    path: '/change-password',
    element: <ChangePassword />
  },
  {
    path: '/security-question',
    element: <SecurityQuestion/>
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/product',
    element: <ProductShow />
  }
])

export default router;
