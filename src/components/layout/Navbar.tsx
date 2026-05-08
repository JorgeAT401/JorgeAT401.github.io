import { Link } from "react-router-dom"
import "./navbar.scss"
import { useState } from "react"

/**
 * The Navbar component is responsible for rendering the navigation bar of the application. 
 * It typically contains links to different sections of the website, such as Home, About, Services, Contact, etc. The Navbar should be responsive and adapt to different screen sizes, providing a user-friendly experience on both desktop and mobile devices.
 */
export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");


  return (
    <div className="navbar">
      <ul className="d-flex gap-3">
        <Link to="/" className={`text-color nav-link ${activeLink === "/" ? "active" : ""}`} onClick={() => setActiveLink("/")}>CV</Link>
        <Link to="/practices" className={`text-color nav-link ${activeLink === "/practices" ? "active" : ""}`} onClick={() => setActiveLink("/practices")}>Practices</Link>
        <Link to="/about" className={`text-color nav-link ${activeLink === "/about" ? "active" : ""}`} onClick={() => setActiveLink("/about")}>About</Link>
      </ul>
    </div>
  )
}
