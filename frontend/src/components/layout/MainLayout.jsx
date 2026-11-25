import React from 'react';

import Header from "./Header"
import Sidebar from "./Sidebar"

function MainLayout({children}) {
    return(
        <div className="flex min-h-screen">
            <Sidebar />
            
            <div className="flex-1 min-w-0">
                <Header />

                <main className="p-6">{children}</main>
            </div>
        </div>
    )
}

export default MainLayout