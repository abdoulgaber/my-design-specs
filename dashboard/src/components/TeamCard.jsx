import { team } from '../data'

export default function TeamCard() {
  return (
    <div className="bg-white border border-[#eeeff1] rounded-[10px] p-2">
      <div className="flex items-center justify-between px-3 mb-1">
        <p className="text-[12px] font-medium text-[#1a1a1a] font-['Google_Sans',sans-serif]">Team</p>
        <p className="text-[12px] text-[#1a1a1a] font-['Google_Sans',sans-serif] cursor-pointer">View all Members →</p>
      </div>

      {team.map(member => (
        <div key={member.name} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#f8f8f8]">
          <div className="flex items-center gap-2">
            <div className={`${member.color} rounded-lg size-7 flex items-center justify-center shrink-0`}>
              <span className="text-white text-[11px] font-medium font-['Google_Sans',sans-serif]">{member.initials}</span>
            </div>
            <div>
              <p className="text-[13px] text-[#1a1a1a] font-['Google_Sans',sans-serif] leading-5">{member.name}</p>
              <p className="text-[11px] text-[#9b9a97] font-['Google_Sans',sans-serif]">{member.email}</p>
            </div>
          </div>
          <span className="text-[11px] text-[#4a5565] bg-[#f6f8fa] px-[7px] py-px rounded-full font-['Google_Sans',sans-serif]">
            {member.role}
          </span>
        </div>
      ))}
    </div>
  )
}
