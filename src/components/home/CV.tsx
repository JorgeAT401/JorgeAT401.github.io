import { AcademicProjects } from "./AcademicProjects"
import { LaboralExperience } from "./LaboralExperience"
import "./home.scss"

/**
 * The homepage of the app
 */
export const CV = () => {
  return (
    <div className="cv-container">
      <div className="soft-skills">
        a
      </div>
      <div>
        <LaboralExperience />
        <AcademicProjects />
      </div>
    </div>
  )
}
