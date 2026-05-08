import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

/**
 * Component for the layout of the application.
 * This component will be used to wrap all other components and provide a consistent layout across the application.
 */
export const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
