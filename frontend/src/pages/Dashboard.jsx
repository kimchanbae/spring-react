import {
    Users,
    ShoppingCart,
    DollarSign,
    TrendingUp
} from 'lucide-react'

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts'

import StatCard from '../components/dashboard/StatCard'

const chartData = [
    { month: '1월', sales: 120 },
    { month: '2월', sales: 180 },
    { month: '3월', sales: 150 },
    { month: '4월', sales: 230 },
    { month: '5월', sales: 200 },
    { month: '6월', sales: 300 },
]

function Dashboard() {
    return (
        <div className="space-y-6">

            {/* Page Title */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">
                    Dashboard
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                    관리자 시스템 현황을 확인합니다.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                <StatCard
                    title="전체 회원"
                    value="12,450"
                    change="+12.5% 전월 대비"
                    color="text-green-600"
                />

                <StatCard
                    title="전체 주문"
                    value="3,240"
                    change="+8.2% 전월 대비"
                    color="text-green-600"
                />

                <StatCard
                    title="총 매출"
                    value="₩45,200,000"
                    change="+15.3% 전월 대비"
                    color="text-green-600"
                />

                <StatCard
                    title="방문자"
                    value="28,500"
                    change="-2.4% 전월 대비"
                    color="text-red-500"
                />

            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">

                <h2 className="text-lg font-bold mb-6">
                    월별 매출 현황
                </h2>

                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="month" />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="sales"
                                fill="#2563eb"
                                radius={[5, 5, 0, 0]}
                            />

                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl border shadow-sm p-6">

                <h2 className="text-lg font-bold mb-5">
                    최근 활동 내역
                </h2>

                <div className="space-y-4">

                    {[
                        ['신규 회원 가입', '홍길동', '10분 전'],
                        ['신규 주문 접수', '주문번호 #1024', '30분 전'],
                        ['상품 등록', '신상품 A', '1시간 전'],
                    ].map((item, index) => (

                        <div
                            key={index}
                            className="flex justify-between items-center border-b pb-4 last:border-0"
                        >
                            <div>
                                <p className="font-medium text-slate-700">
                                    {item[0]}
                                </p>

                                <p className="text-sm text-slate-500">
                                    {item[1]}
                                </p>
                            </div>

                            <span className="text-xs text-slate-400">
                                {item[2]}
                            </span>
                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Dashboard