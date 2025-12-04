import {createBrowserRouter} from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Error404Page from "./Pages/404ErrorPage";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>
    },{
        path:"*",
        element:<Error404Page/>
    }
])


export default router;
