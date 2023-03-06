import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/home";

const router = createBrowserRouter(createRoutesFromElements(
    
        <Route path="/" errorElement={'Page no found'} >
            <Route index element={<Home/>} />
        </Route>,
    
))

export default router