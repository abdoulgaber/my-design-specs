export const navItems = [
  { label: 'Dashboard', active: true },
  { label: 'Clients' },
  { label: 'Servers' },
  { label: 'Team' },
  { label: 'Logs' },
]

export const bottomNavItems = ['Billing', 'Settings']

export const stats = [
  { value: '13', label: 'Total Servers' },
  { value: '4', label: 'Team Members' },
  { value: '28', label: 'Active Permissions' },
  { value: '142', label: 'Log entries this week' },
]

export const servers = [
  { name: 'Marthabeck Production', env: 'Production', envClass: 'text-[#c10007] bg-[#ffebe9]' },
  { name: 'BreneBrown Production', env: 'Production', envClass: 'text-[#c10007] bg-[#ffebe9]' },
  { name: 'PocketPrep Production', env: 'Staging', envClass: 'text-[#bb4d00] bg-[#fff8c5]' },
]

export const activity = [
  { initials: 'JW', name: 'James Whitfield', verb: ' uploaded ', file: 'wp-config.php', server: 'Marthabeck', env: ' · Production', time: '2 min ago', action: 'upload', actionClass: 'text-[#008236]' },
  { initials: 'EC', name: 'Emma Clarke', verb: ' connected to ', file: null, server: 'BreneBrown', env: ' · Production', time: '14 min ago', action: 'connected', actionClass: 'text-[#6e5fd8]' },
  { initials: 'MT', name: 'Mike Torres', verb: ' deleted ', file: 'old-backup.zip', server: '100Layercake', env: ' · Production', time: '32 min ago', action: 'delete', actionClass: 'text-[#c10007]' },
  { initials: 'AO', name: 'Alex Osman', verb: ' granted access to ', file: null, server: 'PocketPrep', env: ' · Production', time: '1 hour ago', action: 'access granted', actionClass: 'text-[#bb4d00]' },
  { initials: 'JW', name: 'James Whitfield', verb: ' uploaded ', file: 'style.css', server: 'Marthabeck', env: ' · Staging', time: '2 hours ago', action: 'upload', actionClass: 'text-[#008236]' },
  { initials: 'EC', name: 'Emma Clarke', verb: ' connected to ', file: null, server: 'PocketPrep', env: ' · Production', time: '3 hours ago', action: 'upload', actionClass: 'text-[#6e5fd8]' },
]

export const team = [
  { initials: 'AO', name: 'Ebrahim Hassan', email: 'alex@frontierdigital.com', role: 'Owner', color: 'bg-[#6e5fd8]' },
  { initials: 'AB', name: 'Alex Brahim', email: 'alex@frontierdigital.com', role: 'Assistant', color: 'bg-[#14b8a6]' },
  { initials: 'SM', name: 'James Whitfield', email: 'alex@frontierdigital.com', role: 'Dev', color: 'bg-[#14b8a6]' },
  { initials: 'EC', name: 'Emma Clarke', email: 'alex@frontierdigital.com', role: 'Dev', color: 'bg-[#f97316]' },
]

export const quickActions = [
  'Add a new server',
  'Invite a team member',
  'Review access permissions',
]
