import { useRouteError } from "react-router"
export default ErrorBoundary=()=>{
    const errorlog=useRouteError();
    console.log(errorlog);
    return (
        <div>
            Error Boundary
        </div>
    )
}