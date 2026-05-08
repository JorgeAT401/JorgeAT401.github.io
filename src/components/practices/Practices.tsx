import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

/**component containing the various section of practices relating css, js, ts and the like */
export const Practices = () => {
  const [activeTab, setActiveTab] = useState("javascript");
  return (
    <div>
      <ul
        className="nav nav-pills justify-content-center mb-5"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <Link
            to="/practices/js"
            className={`nav-link ${activeTab === "javascript" ? "active" : ""}`}
            data-bs-toggle="pill"
            onClick={() => setActiveTab("javascript")}
          >
            JavaScript
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/practices/typescript"
            className={`nav-link ${activeTab === "typescript" ? "active" : ""}`}
            data-bs-toggle="pill"
            onClick={() => setActiveTab("typescript")}
          >
            TypeScript
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/practices/css"
            className={`nav-link ${activeTab === "css" ? "active" : ""}`}
            data-bs-toggle="pill"
            onClick={() => setActiveTab("css")}
          >
            CSS
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
