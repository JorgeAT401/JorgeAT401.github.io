import { useState } from 'react';
import './AppBar.scss'

/**
 * the top navigation bar of the app
 */
export const AppBar = () => {
  const appbarOptions = ["CV", "About"];
  const [activeTab, setActiveTab] = useState("CV");

  /**
   * handles the navbar option click as setting it to be the active one
   */
  const handleClick = (option: string) => {
    setActiveTab(option);
    console.log(option);
  }

  return (
    <nav className="appbar">
      <ul className='d-flex appbar-container gap-3'>
        {appbarOptions.map((option) => (
          <li
            className={`appbar-options ${activeTab == option ? "appbar-options--active" : ""}`}
            onClick={() => handleClick(option)}
          >
            <h1>
              {option}
            </h1>
            <div className={`my-1 tab ${activeTab == option ? "tab--active" : ""}`} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
