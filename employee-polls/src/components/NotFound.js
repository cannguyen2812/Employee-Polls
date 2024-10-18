import { useNavigate } from "react-router-dom"
import "../styles/NotFound.css"

export default function NotFoundPage() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div className="not-found-page">
            <h1>There is something wrong! Click <span className="director" onClick={handleNavigate}>HERE</span> to back Home!</h1>
        </div>
    )
}