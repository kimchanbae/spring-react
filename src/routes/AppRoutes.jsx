import React from 'react';

import { Routes, Route } from "react-router-dom"
import Dashboard from '../pages/Dashboard'

function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/users" element={<div>회원관리 페이지</div>}></Route>
            <Route path="/packages" element={<div>패키지관리 페이지</div>}></Route>
            <Route path="/settings" element={<div>환경설정 페이지</div>}></Route>
        </Routes>
    )
}

export default AppRoutes