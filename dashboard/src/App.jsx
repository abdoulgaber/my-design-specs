import './index.css'
import { stats } from './data'
import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import ServersCard from './components/ServersCard'
import ActivityCard from './components/ActivityCard'
import QuickActionsCard from './components/QuickActionsCard'
import TeamCard from './components/TeamCard'

export default function App() {
  return (
    <div className="min-h-screen bg-[#4a5e1a] flex items-center justify-center p-8">
      <div className="bg-[#fcfcfc] rounded-[30px] shadow-2xl w-[1280px] h-[832px] overflow-hidden flex">

        <Sidebar />

        <main className="flex-1 overflow-y-auto px-8 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-[#7e7e7e] font-['Google_Sans',sans-serif] mb-4">
            <span>⌂</span>
            <span>Dashboard</span>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-[20px] text-[#1a1a1a] font-['Google_Sans',sans-serif] m-0">👋 Hi Ebra!</h1>
            <div className="flex gap-3">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e4e1e1] bg-white text-[14px] font-semibold text-[#25292e] shadow-sm font-['Google_Sans',sans-serif] cursor-pointer">
                ↻ Refresh Data
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25292e] text-[14px] font-semibold text-[#f6f8fa] shadow-sm font-['Google_Sans',sans-serif] cursor-pointer">
                Add Server
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {stats.map(s => <StatCard key={s.label} {...s} />)}
          </div>

          {/* Content */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <ServersCard />
              <ActivityCard />
            </div>
            <div className="w-[314px] shrink-0 flex flex-col gap-4">
              <QuickActionsCard />
              <TeamCard />
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}
