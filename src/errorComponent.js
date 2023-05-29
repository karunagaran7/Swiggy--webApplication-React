
import { useRouteError } from "react-router-dom"
const ErrorComponent = ()=>{
    const {error,status,statusText} = useRouteError()
    return(
        <div>
            <h3>{status} {error.message}</h3>
            <h4>{statusText}</h4>
        </div>
    )
}
export default ErrorComponent