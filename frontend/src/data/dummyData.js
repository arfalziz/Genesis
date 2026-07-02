export const userProfile = {
  name: 'SobatGenesis_404',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sobat',
  role: 'admin' // Added admin role
};

export const dailyAffirmation = {
  quote: "Setiap langkah kecil yang kamu ambil hari ini adalah kemenangan.",
  author: "Genesis+",
  moodLogged: false
};

export const recentJournals = [
  { id: 1, title: 'Menghadapi Kecemasan Pagi', date: 'Hari ini, 08:00', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>' },
  { id: 2, title: 'Refleksi Diri: Mengapa saya marah?', date: 'Kemarin, 21:30', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>' },
  { id: 3, title: 'Mencapai target mingguan!', date: '3 Hari yang lalu', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
];

export const nextSession = {
  psychologist: 'Dr. Sarah Amalia, S.Psi, M.Psi',
  date: 'Besok, 14:00 WIB',
  type: 'Konseling Chat',
  timeRemaining: '24 : 05 : 00'
};

export const quickStats = [
  { id: 1, label: 'Jurnal Ditulis', value: '12', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>' },
  { id: 2, label: 'Sesi Selesai', value: '3', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>' },
  { id: 3, label: 'Modul Dibaca', value: '5', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><path d="M8 7h6"></path><path d="M8 11h8"></path></svg>' },
  { id: 4, label: 'Mood Rata-rata', value: 'Baik', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>' }
];

export const psychologists = [
  { 
    id: 1, 
    name: 'Dr. Sarah Amalia', 
    title: 'S.Psi, M.Psi, Psikolog', 
    spec: 'Kecemasan & Depresi', 
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', 
    rating: 4.9,
    reviews: 128
  },
  { 
    id: 2, 
    name: 'Bima Satria', 
    title: 'M.Psi, Psikolog Klinis', 
    spec: 'Krisis Identitas & Karir', 
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bima', 
    rating: 4.8,
    reviews: 95
  },
  { 
    id: 3, 
    name: 'Nadia Putri', 
    title: 'S.Psi, M.Psi, Psikolog', 
    spec: 'Hubungan & Keluarga', 
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nadia', 
    rating: 5.0,
    reviews: 210
  },
  { 
    id: 4, 
    name: 'Dr. Kevin Wijaya', 
    title: 'Psikolog Klinis Dewasa', 
    spec: 'Manajemen Stres & Trauma', 
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin', 
    rating: 4.7,
    reviews: 84
  }
];

export const mediaItems = [
  {
    id: 1,
    title: 'Memahami Identitas & Jati Diri',
    category: 'Edukasi Seksual',
    type: 'video',
    duration: '12:45',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Podcast: Perjalanan Menuju Pemulihan',
    category: 'Kisah Inspiratif',
    type: 'audio',
    duration: '45:20',
    thumbnailUrl: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 3,
    title: 'Pendidikan Seksual Berbasis Nilai',
    category: 'Edukasi Seksual',
    type: 'video',
    duration: '18:30',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=800',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: 'Musik Relaksasi & Menurunkan Kecemasan',
    category: 'Relaksasi',
    type: 'audio',
    duration: '60:00',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d1b5?auto=format&fit=crop&q=80&w=800',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 5,
    title: 'Membangun Hubungan yang Sehat',
    category: 'Edukasi Seksual',
    type: 'video',
    duration: '15:10',
    thumbnailUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    title: 'Suara Alam untuk Fokus & Ketenangan',
    category: 'Relaksasi',
    type: 'audio',
    duration: '120:00',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470071131384-001b85755536?auto=format&fit=crop&q=80&w=800',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  }
];
