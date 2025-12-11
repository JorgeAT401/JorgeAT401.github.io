import { useNavigate } from "react-router"

/**
 * An error page to handle any missing route 
 */
export const ErrorPage = () => {
    const navigate = useNavigate();

  return (
    <div>
        404 not found
        <button onClick={() => navigate(-1)} > <a> Back </a> </button>
    </div>
  )
}
