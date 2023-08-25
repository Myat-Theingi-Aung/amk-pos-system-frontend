import { createBrowserRouter } from 'react-router-dom'
import NotFound from './views/NotFound';
import Home from './views/Home';
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact-us',
    element: <ContactUs />
  },
  {
    path: '/about-us',
    element: <AboutUs />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router;
