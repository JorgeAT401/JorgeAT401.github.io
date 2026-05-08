import { useNavigate } from "react-router-dom"


/* This component is used to display an error message when the user navigates to a route that does not exist. */
export const ErrorComponent = () => {
    const navigate = useNavigate();
    return (
        <div>
            404 Not Found
            <button className="btn secondary" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    )
}
