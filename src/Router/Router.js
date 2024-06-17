import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import AuthenticationPage from "../Components/Authentication-page/Authentication-page.component";
import Contact from "../Components/Contact/index.component";
import Gallery from "../Components/Gallery/index.component";
import Gigs from "../Components/Gigs/index.component";
import NavBar from "../Components/NavBar/index.compnent";
import Setlist from "../Components/SetlistPage";
import ErrorPage from "../Errors/Error-Page";
import SaveBar from "../Components/SaveBar";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <AuthenticationPage />
            },
            {
                path: "setlist",
                element: <Setlist />
            },
            {
                path: "gigs",
                element: <Gigs />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "gallery",
                element: <Gallery />
            }
        ]
    }
])