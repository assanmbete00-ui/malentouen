import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function ErrorPage() {
  const navigate = useNavigate()
  useEffect(() => {
    process.env.NODE_ENV !== "development" && navigate("/home")
  }, [])
  return <div id="error-page"></div>
}
