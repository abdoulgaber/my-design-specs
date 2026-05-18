export default function StatCard({ value, label }) {
  return (
    <div className="bg-white border border-[#eeeff1] rounded-[10px] p-4">
      <p className="text-[28px] font-semibold text-[#1a1a1a] font-['Google_Sans',sans-serif] tracking-tight leading-7 mb-2">
        {value}
      </p>
      <p className="text-[12px] text-[#9b9a97] font-['Google_Sans',sans-serif]">{label}</p>
    </div>
  )
}
