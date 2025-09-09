
'use client';

const StatCard = ({ title, value, change, changeType, icon: Icon }) => (
    <div className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--border)] group">
        <div className="flex items-center justify-between mb-2">
            <p className="text-base font-medium text-[var(--text-secondary)]">{title}</p>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-[var(--text-secondary)]">drag_indicator</span>
            </button>
        </div>
        <p className="text-3xl font-bold">{value}</p>
        <p className={`text-sm font-medium ${changeType === 'increase' ? 'text-[var(--success)]' : 'text-[var(--danger)]'} flex items-center gap-1 mt-1`}>
            <span className="material-symbols-outlined text-base">{changeType === 'increase' ? 'arrow_upward' : 'arrow_downward'}</span>
            {change}
        </p>
    </div>
);

const Chart = ({ title, subtitle, change, changeType, gradientId, pathData, lineColor }) => (
    <div className="bg-[var(--surface)] p-6 rounded-lg border border-[var(--border)] group">
        <div className="flex justify-between items-start mb-4">
            <div>
                <p className="text-base font-medium text-[var(--text-secondary)]">{title}</p>
                <p className="text-sm text-[var(--text-secondary)]">{subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 text-sm font-medium ${changeType === 'increase' ? 'text-[var(--success)]' : 'text-[var(--danger)]'}`}>
                    <span className="material-symbols-outlined text-base">{changeType === 'increase' ? 'arrow_upward' : 'arrow_downward'}</span>
                    {change}
                </div>
                <button className="opacity-0 group-hover_opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-[var(--text-secondary)]">drag_indicator</span>
                </button>
            </div>
        </div>
        <div className="h-60 relative">
            <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id={gradientId} x1="236" x2="236" y1="1" y2="149">
                        <stop stopColor={lineColor} stopOpacity="0.3"></stop>
                        <stop offset="1" stopColor={lineColor} stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
                <path d={pathData} fill={`url(#${gradientId})`}></path>
                <path d={pathData.split('V149H0V')[0]} stroke={lineColor} strokeLinecap="round" strokeWidth="2.5"></path>
            </svg>
        </div>
        <div className="flex justify-between text-xs text-[var(--text-secondary)] mt-2">
            <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span>
        </div>
    </div>
);


export default function HealthPage() {
    return (
        <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="CPU Usage" value="65%" change="+5%" changeType="increase" icon="memory" />
                <StatCard title="Memory Usage" value="78%" change="-2%" changeType="decrease" icon="developer_board" />
                <StatCard title="Network Throughput" value="120 Mbps" change="+10%" changeType="increase" icon="swap_horiz" />
                <StatCard title="Disk I/O" value="45 MB/s" change="-3%" changeType="decrease" icon="save" />
            </div>
            <h3 className="text-xl font-bold mb-4">Resource Utilization Trends</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Chart 
                    title="CPU Usage Trend" 
                    subtitle="Last 24 Hours" 
                    change="+5%" 
                    changeType="increase" 
                    gradientId="cpuGradient"
                    pathData="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                    lineColor="var(--primary)"
                />
                <Chart 
                    title="Memory Usage Trend" 
                    subtitle="Last 24 Hours" 
                    change="-2%" 
                    changeType="decrease" 
                    gradientId="memGradient"
                    pathData="M0 50C18.1538 50 18.1538 100 36.3077 100C54.4615 100 54.4615 80 72.6154 80C90.7692 80 90.7692 30 108.923 30C127.077 30 127.077 90 145.231 90C163.385 90 163.385 20 181.538 20C199.692 20 199.692 70 217.846 70C236 70 236 100 254.154 100C272.308 100 272.308 50 290.462 50C308.615 50 308.615 130 326.769 130C344.923 130 344.923 40 363.077 40C381.231 40 381.231 100 399.385 100C417.538 100 417.538 60 435.692 60C453.846 60 453.846 110 472 110V149H0V50Z"
                    lineColor="#FBBF24"
                />
            </div>
        </div>
    );
}