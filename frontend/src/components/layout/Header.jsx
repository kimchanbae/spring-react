import React from 'react';

import {Bell, UserCircle, Search} from 'lucide-react'

function Header() {
    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">

            <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg">
                <Search size={18} className="text-slate-400" />
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="bg-transparent outline-none text-sm"
                />
            </div>

            <div className="flex items-center gap-5">
                <Bell className="text-slate-500 cursor-pointer" />

                <div className="flex items-center gap-2">
                    <UserCircle size={28} />
                    <span className="text-sm font-medium">
                        관리자
                    </span>
                </div>
            </div>

        </header>
    )
}

export default Header