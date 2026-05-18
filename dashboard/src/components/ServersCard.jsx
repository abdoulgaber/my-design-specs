import { servers } from '../data'

export default function ServersCard() {
  return (
    <div className="bg-white border border-[#eeeff1] rounded-[10px] p-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[12px] font-medium text-[#1a1a1a] font-['Google_Sans',sans-serif]">Servers</p>
        <p className="text-[12px] text-[#1a1a1a] font-['Google_Sans',sans-serif] cursor-pointer">View all Servers →</p>
      </div>

      {servers.map(server => (
        <div key={server.name} className="flex items-center justify-between py-[10px] border-b border-black/[0.06] last:border-0">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded bg-[#e0e0e0]" />
            <p className="text-[13px] font-medium text-[#1a1a1a] font-['Google_Sans',sans-serif]">{server.name}</p>
          </div>
          <span className={`text-[11px] font-['Google_Sans',sans-serif] px-[7px] py-px rounded-full ${server.envClass}`}>
            {server.env}
          </span>
        </div>
      ))}
    </div>
  )
}
