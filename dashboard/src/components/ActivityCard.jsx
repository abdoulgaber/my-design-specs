import { activity } from '../data'

function ActivityRow({ item }) {
  return (
    <div className="flex items-center gap-3 py-[10px] border-b border-black/[0.06] last:border-0">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <div className="bg-[#f1f1ef] rounded-lg size-6 flex items-center justify-center shrink-0">
          <span className="text-[#9b9a97] text-[11px] font-['Google_Sans',sans-serif]">{item.initials}</span>
        </div>
        <p className="text-[13px] font-['Google_Sans',sans-serif] text-[#1a1a1a] truncate">
          <span className="font-medium">{item.name}</span>
          <span className="text-[#9b9a97]">{item.verb}</span>
          {item.file && <span className="font-mono">{item.file}</span>}
          {item.file && <span className="text-[#9b9a97]">{' to '}</span>}
          <span className="font-medium">{item.server}</span>
          <span className="text-[#9b9a97]">{item.env}</span>
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[#9b9a97] text-[11px] font-['Google_Sans',sans-serif] whitespace-nowrap">{item.time}</span>
        <span className={`border border-[#d1d9e0] rounded-full px-[7px] py-px text-[10px] font-['Google_Sans',sans-serif] whitespace-nowrap ${item.actionClass}`}>
          {item.action}
        </span>
      </div>
    </div>
  )
}

export default function ActivityCard() {
  return (
    <div className="bg-white border border-[#eeeff1] rounded-[10px] p-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[12px] font-medium text-[#1a1a1a] font-['Google_Sans',sans-serif]">Recent activity</p>
        <p className="text-[12px] text-[#1a1a1a] font-['Google_Sans',sans-serif] cursor-pointer">View all logs →</p>
      </div>
      {activity.map((item, i) => (
        <ActivityRow key={i} item={item} />
      ))}
    </div>
  )
}
