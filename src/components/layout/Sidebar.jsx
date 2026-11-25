import React from 'react';

import {LayoutDashboard, Users, Package, Settings, LogOut} from 'lucide-react'
import { NavLink } from "react-router-dom"

const menus =[
    {
        name: 'Dashboard',
        path: '/',
        icon: LayoutDashboard
    },
    {
        name: '회원관리',
        path: '/users',
        icon: Users
    },
    {
        name: '패키지관리',
        path: '/packages',
        icon: Package
    },
    {
        name: '설정',
        path: '/settings',
        icon: Settings
    }
]

function Sidebar() {
    return (
        <aside className="relative w-64 min-h-screen bg-slate-900 text-white">
            <div className="h-16 flex items-center px-6 border-b border-slate-700">
                <h1 className="text-xl font-bold">
                    ADMIN PANEL
                </h1>
            </div>

            <nav className="p-4 space-y-2">
                {menus.map((menu) => {
                    const Icon = menu.icon

                    return (
                        <NavLink
                            key={menu.path}
                            to={menu.path}
                            end={menu.path === '/'}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition
                            ${isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-slate-300 hover:bg-slate-800'
                                }`
                            }
                        >
                            <Icon size={20} />
                            <span>{menu.name}</span>
                        </NavLink>
                    )
                })}
            </nav>

            <div className="absolute bottom-5 px-4">
                <button className="flex items-center gap-3 text-slate-400 hover:text-white">
                    <LogOut size={20} />
                    로그아웃
                </button>
            </div>
        </aside>
    )
}

export default Sidebar