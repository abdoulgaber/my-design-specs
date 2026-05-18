import { quickActions } from '../data'

export default function QuickActionsCard() {
  return (
    <div className="bg-white border border-[#eeeff1] rounded-[10px] p-2">
      {quickActions.map(action => (
        <div key={action} className="flex items-center justify-between px-3 h-10 rounded-lg hover:bg-[#f8f8f8] cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded bg-[#e0e0e0]" />
            <span className="text-[12px] font-medium text-[#1a1a1a] font-['Google_Sans',sans-serif]">{action}</span>
          </div>
          <span className="text-[#9b9a97]">›</span>
        </div>
      ))}
    </div>
  )
}
