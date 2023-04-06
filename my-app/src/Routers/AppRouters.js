import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from "../Component/LandingComponent/Landing"
import NewPost from '../Component/LandingComponent/Post/New/NewPost';
import AllPost from '../Component/LandingComponent/Post/List/List.js';
export default function AppRouter() {
    return <BrowserRouter>
         <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="post/new" element={<NewPost />} />
            <Route path="post/all" element={<AllPost />} />
         </Routes>
    </BrowserRouter>
}