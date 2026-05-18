import { navItems, bottomNavItems } from '../data'

export default function Sidebar() {
  return (
    <aside className="w-[228px] border-r border-[#f4f4f4] flex flex-col justify-between py-8 px-4 shrink-0">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2 px-1">
          <div className="size-6 rounded-md bg-[#1a1a1a] flex items-center justify-center">
            <span className="text-white text-[10px]">★</span>
          </div>
          <span className="text-[#3e3d3d] text-[21px] font-semibold font-['Google_Sans',sans-serif] tracking-tight">Sekrt</span>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map(item => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-2 py-[6px] rounded-lg cursor-pointer ${item.active ? 'bg-[#f1f1f1]' : 'hover:bg-[#f8f8f8]'}`}
            >
              <div className="size-4 rounded bg-[#e0e0e0] shrink-0" />
              <span className={`text-[12px] font-['Google_Sans',sans-serif] ${item.active ? 'font-semibold text-[#2a2a2a]' : 'text-[#2a2a2a]'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-1">
        <div className="border-t border-[#ebebea] pt-3 flex flex-col gap-1">
          {bottomNavItems.map(label => (
            <div key={label} className="flex items-center gap-3 px-2 py-[6px] rounded-lg hover:bg-[#f8f8f8] cursor-pointer">
              <div className="size-4 rounded bg-[#e0e0e0] shrink-0" />
              <span className="text-[12px] text-[#2a2a2a] font-['Google_Sans',sans-serif]">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-[#ebebea] pt-3 mt-1 px-1">
          <div className="bg-[#6e5fd8] rounded-lg size-9 flex items-center justify-center shrink-0">
            <span className="text-white text-[11px] font-medium font-['Google_Sans',sans-serif]">EH</span>
          </div>
          <div>
            <p className="text-[13px] text-[#1a1a1a] font-['Google_Sans',sans-serif] leading-5">Ebrahim Hassan</p>
            <p className="text-[11px] text-[#9b9a97] font-['Google_Sans',sans-serif]">Agency Owner</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
