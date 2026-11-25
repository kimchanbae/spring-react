import React from "react";

function StatCard({title, value, change, color}) {
    return(
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500">
                {title}
            </p>

            <p className="text-3xl font-bold mt-3">
                {value}
            </p>

            <p className={"text-sm mt-3 ${color}"}>
                {change}
            </p>
        </div>
    )
}

export default StatCard