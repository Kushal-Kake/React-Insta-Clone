import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from "../Component/LandingComponent/Landing"

export default function AppRouter() {
    return <BrowserRouter>
         <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/post" element={<landingComponent />} />
                <Route path="new" element={<landingComponent />} />
                <Route path="all" element={<landingComponent />} /> */}
         </Routes>
    </BrowserRouter>
}