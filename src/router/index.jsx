import { createHashRouter,createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic.jsx";
import App, { loaderPost } from "../pages/App.jsx";
import Home from "../pages/Home/Home.jsx";
import Proyects from "../pages/Proyects/Proyects.jsx";
import Notfound from "../pages/NotFound/NotFound.jsx";
import {
    FirstScene,
    SecondScene,
    ThirdScene,
    TransformControls,
} from '../components/Scenas'


export const router = createHashRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <Notfound/>,
        children: [
            {
                errorElement:<Notfound/>,
                children:[
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "/Proyectos",
                        element:<Proyects/>,
        
                    },
                    {
                        path: "/Proyectos/FirstScene",
                        element:<FirstScene/>,
        
                    },
                    {
                        path: "/Proyectos/SecondScene",
                        element:<SecondScene/>,
        
                    },
                    {
                        path: "/Proyectos/ThirdScene",
                        element:<ThirdScene/>,
        
                    },
                    {
                        path: "/Proyectos/TransformControls",
                        element:<TransformControls/>,
        
                    },
                    // Se utiliza una ruta con el id del mueble, para la obtencion de la información
                    {
                        path: "/:id",
                        //path: "/:id",
                        element: <App />,
                        // El loader es importante para la carga de la información
                        loader:loaderPost,
                
                    },
                ]

            }
        ],
    },
    
]);
