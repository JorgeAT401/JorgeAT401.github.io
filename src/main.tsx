import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/custom.scss';
import './i18n';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { CV } from './components/home/CV.tsx';

/**
 * The routing object from react router
 */
const router = createBrowserRouter([
  { 
    path: "/", 
    Component: App,
    children: [
      {
        index: true,
        Component: CV, 
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
