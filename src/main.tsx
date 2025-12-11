import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/custom.scss';
import './i18n';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { CV } from './components/home/CV.tsx';
import { About } from './components/about/About.tsx';
import { ErrorPage } from './ErrorPage.tsx';

/**
 * The routing object from react router
 */
const router = createBrowserRouter([
  { 
    path: "/", 
    Component: App,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/",
        Component: CV, 
      },
      {
        path: "/CV",
        Component: CV, 
      },
      {
        path: "About",
        Component: About
      }
    ] 
  },
]);

/**
 * Root component from react
 */
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
