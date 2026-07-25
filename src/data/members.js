export const guildInfo = {
  name: 'Z-One',
  tag: '[Z1]',
  founded: '2024',
  motto: 'Satu Guild, Satu Tujuan',
  description:
    'Z-One adalah guild yang didirikan atas dasar persahabatan dan semangat bermain bersama. ' +
    'Kami tidak hanya bermain — kami berkembang bersama, menang bersama, dan kalah bersama.',
  totalMembers: 0,
  activeSince: '2024',
}

export const roles = {
  LEADER: { label: 'Guild Master', color: '#f97316', icon: '👑' },
  OFFICER: { label: 'Officer', color: '#22d3ee', icon: '⚔️' },
  VETERAN: { label: 'Veteran', color: '#9d5cf6', icon: '🛡️' },
  MEMBER: { label: 'Member', color: '#7ab3d9', icon: '🎮' },
  RECRUIT: { label: 'Recruit', color: '#3d6b8f', icon: '🌱' },
}

// Isi data member di sini
export const members = [
  // Contoh format:
  // {
  //   id: 1,
  //   username: 'NamaIngame',
  //   role: 'LEADER',
  //   joinDate: '2024-01-01',
  //   bio: 'Deskripsi singkat member',
  // },
]

export const achievements = [
  // Contoh format:
  // {
  //   id: 1,
  //   title: 'Judul Pencapaian',
  //   description: 'Deskripsi pencapaian',
  //   date: '2024-01-01',
  //   type: 'pvp' | 'pve' | 'event' | 'milestone',
  // },
]
