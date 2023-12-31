import useId from "../hooks/useId";
import HomePage from "../pages/Homepage";
import PropertiesPage from "../pages/Propertiespage";

export const navbar=[
    {
        id:useId,
        title:'Home',
        path:'/home',
        element:<HomePage/>,
        private:false,
        hidden:false
    },
    {
        id:useId,
        title:'Properties',
        path:'/properties',
        element:<PropertiesPage/>,
        private:false,
        hidden:false
    }
]