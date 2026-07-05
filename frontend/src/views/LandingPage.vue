<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full min-h-screen m-0 p-0 overflow-x-hidden bg-bgOff font-sans text-textMain selection:bg-secondary/50">
    <!-- Navbar -->
    <header class="fixed top-0 left-0 right-0 z-20 bg-bgLight/95 backdrop-blur-md border-b border-gray-100 shadow-sm w-full transition-all duration-300">
      <div class="w-full px-4 md:px-12 lg:px-24 h-16 md:h-24 flex items-center justify-between">
        <div class="flex items-center gap-2 animate-fade-in-up">
          <!-- Logo Icon -->
          <img src="/images/logo.png" alt="Genesis+ Logo" class="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-md" />
          <span class="font-bold text-lg md:text-2xl tracking-tight text-primary hidden sm:block">GENESIS+</span>
        </div>
        <nav class="hidden md:flex gap-8 animate-fade-in-up" style="animation-delay: 0.1s">
          <a href="#beranda" class="text-textMuted hover:text-primary transition-colors font-medium">Beranda</a>
          <a href="#pilar" class="text-textMuted hover:text-primary transition-colors font-medium">Tiga Pilar</a>
          <a href="#privasi" class="text-textMuted hover:text-primary transition-colors font-medium">Jaminan Privasi</a>
          <a href="#cara-kerja" class="text-textMuted hover:text-primary transition-colors font-medium">Cara Kerja</a>
        </nav>
        <div class="flex items-center gap-2 md:gap-4 animate-fade-in-up" style="animation-delay: 0.2s">
          <RouterLink to="/mitra/akses" class="border border-primary text-primary hover:bg-primary/5 px-2 py-1.5 md:px-4 md:py-2 text-xs md:text-base rounded-lg font-medium transition-all" aria-label="Portal Kemitraan">
            <span class="hidden sm:inline">Kemitraan Instansi</span>
            <span class="sm:hidden">Mitra</span>
          </RouterLink>
          <RouterLink to="/login" class="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-base rounded-lg font-medium transition-all shadow-sm hover:shadow-md" aria-label="Masuk Aplikasi">Sign Up</RouterLink>
        </div>
      </div>
    </header>

    <!-- THE HERO SECTION -->
    <section id="beranda" class="relative w-full pt-16 md:pt-24 pb-16 md:pb-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-accent to-bgLight -z-10 w-full"></div>
      <div class="w-full px-6 md:px-12 lg:px-24">
        <div class="flex flex-col-reverse lg:flex-row items-center gap-12">
          <!-- Text Content -->
          <div class="flex-1 text-center lg:text-left">

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-textMain tracking-tight mb-6 animate-fade-in-up" style="animation-delay: 150ms; animation-fill-mode: backwards;">
              Ruang Aman untuk <br class="hidden lg:block" />
              <span class="bg-gradient-to-r from-[#5B21B6] via-[#A855F7] to-[#D8B4FE] bg-clip-text text-transparent">Bertumbuh, Memahami, dan Pulih.</span>
            </h1>
            <p class="text-lg md:text-xl text-textMuted mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style="animation-delay: 300ms; animation-fill-mode: backwards;">
              <strong class="text-textMain">GENESIS+</strong> menghadirkan ekosistem intervensi sosial dan psikologis terintegrasi dari <strong class="text-textMain">hulu ke hilir</strong>. Kami hadir menemani perjalanan pola asuh keluarga, membimbing navigasi <strong class="text-textMain">krisis identitas pemuda</strong>, hingga merangkul rekonstruksi orientasi diri. Semua bergerak di dalam ruang digital yang privat, aman, dan penuh empati.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style="animation-delay: 450ms; animation-fill-mode: backwards;">
              <RouterLink to="/register" class="bg-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20 hover:bg-primary/90 w-full sm:w-auto text-center" aria-label="Mulai Perjalanan Anda">
                Mulai Perjalanan Anda!
              </RouterLink>
            </div>
           
          </div>
          
          <!-- Illustration -->
          <div class="flex-1 w-full max-w-lg lg:max-w-full opacity-0 animate-fade-in-up" style="animation-delay: 0.5s">
            <img src="/images/hero-illustration.png" alt="Ilustrasi seseorang sedang bermeditasi dengan damai di ruangan yang nyaman" class="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/50 transform hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>

    <!-- TIGA PILAR INTERVENSI -->
    <section id="pilar" class="py-16 md:py-24 bg-bgLight w-full">
      <div class="w-full px-6 md:px-12 lg:px-24">
        <div class="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up" style="animation-delay: 0.2s">
          <h2 class="text-3xl md:text-4xl font-bold text-textMain mb-4">Satu Platform. Tiga Tahap Intervensi Komprehensif.</h2>
          <div class="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Pilar Hulu -->
          <div class="bg-bgOff rounded-2xl p-8 border border-gray-100 hover:border-secondary hover:shadow-xl transition-all group relative overflow-hidden opacity-0 animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="absolute top-0 right-0 w-32 h-32 bg-accent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div class="w-14 h-14 bg-accent text-primary rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-textMain mb-1">Hulu</h3>
            <p class="text-primary font-medium text-sm mb-4">Fondasi Keluarga & Pola Asuh</p>
            <p class="text-textMuted leading-relaxed line-clamp-4">
              Membangun benteng pertama dari dalam rumah. Akses puluhan modul pembelajaran interaktif mengenai pola asuh ramah anak dengan video edukasi dan lagu Audio-Mnemonic untuk edukasi karakter.
            </p>
            <button class="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" aria-label="Baca selengkapnya tentang fondasi keluarga">
              Baca Selengkapnya <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          <!-- Pilar Tengah -->
          <div class="bg-bgOff rounded-2xl p-8 border border-gray-100 hover:border-secondary hover:shadow-xl transition-all group relative overflow-hidden opacity-0 animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="absolute top-0 right-0 w-32 h-32 bg-accent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div class="w-14 h-14 bg-accent text-primary rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-textMain mb-1">Tengah</h3>
            <p class="text-primary font-medium text-sm mb-4">Navigasi & Identitas Pemuda</p>
            <p class="text-textMuted leading-relaxed line-clamp-4">
              Menuntun langkah di masa penuh keraguan bagi pemuda. Temukan arah melalui video bimbingan empati dari pakar dan tuangkan keluh kesahmu di Encrypted Digital Diary.
            </p>
            <button class="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" aria-label="Baca selengkapnya tentang navigasi pemuda">
              Baca Selengkapnya <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          <!-- Pilar Hilir -->
          <div class="bg-bgOff rounded-2xl p-8 border border-gray-100 hover:border-secondary hover:shadow-xl transition-all group relative overflow-hidden opacity-0 animate-fade-in-up" style="animation-delay: 0.5s">
            <div class="absolute top-0 right-0 w-32 h-32 bg-accent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div class="w-14 h-14 bg-accent text-primary rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-textMain mb-1">Hilir</h3>
            <p class="text-primary font-medium text-sm mb-4">Pemulihan & Intervensi Klinis</p>
            <p class="text-textMuted leading-relaxed line-clamp-4">
              Layanan intervensi dan rehabilitasi mendalam. Terhubung secara privat lewat Chat Real-Time bersama psikolog klinis profesional yang siap membimbing pemulihan kembali.
            </p>
            <button class="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" aria-label="Baca selengkapnya tentang pemulihan klinis">
              Baca Selengkapnya <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- JAMINAN KEAMANAN & PRIVASI -->
    <section id="privasi" class="py-16 md:py-24 bg-primary text-white relative overflow-hidden w-full">
      <div class="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div class="w-full px-6 md:px-12 lg:px-24 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0 animate-fade-in-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Privasi Anda Adalah Hak Mutlak. Kami Melindunginya.</h2>
          <p class="text-accent text-lg">Keamanan tingkat tinggi untuk kenyamanan pemulihan Anda.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div class="flex flex-col sm:flex-row gap-6 items-start bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors opacity-0 animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-xl flex-shrink-0 flex items-center justify-center">
              <svg class="w-7 h-7 md:w-8 md:h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold mb-3 text-white">Sistem Nama Samaran (Masked Identity)</h3>
              <p class="text-accent leading-relaxed text-sm md:text-base">
                Daftar dengan email Anda untuk validasi akun, tetapi identitas aslimu dikunci rapat. Di dalam aplikasi dan di layar psikolog, Anda bergerak menggunakan Nama Alias pilihan Anda sendiri.
              </p>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-6 items-start bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors opacity-0 animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-xl flex-shrink-0 flex items-center justify-center">
              <svg class="w-7 h-7 md:w-8 md:h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold mb-3 text-white">Enkripsi Data Sisi Klien (AES-256)</h3>
              <p class="text-accent leading-relaxed text-sm md:text-base">
                Setiap baris kalimat di Diary Digital diubah menjadi kode acak rahasia langsung dari perangkat Anda sebelum dikirim ke server. Bahkan tim pengembang GENESIS+ tidak bisa membacanya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CARA KERJA & FINAL CALL-TO-ACTION -->
    <section id="cara-kerja" class="py-16 md:py-24 bg-bgLight w-full">
      <div class="w-full px-6 md:px-12 lg:px-24">
        
        <div class="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <!-- Cara Kerja Steps -->
          <div class="flex-1 w-full opacity-0 animate-fade-in-up">
            <div class="text-center lg:text-left mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-textMain mb-4">Cara Kerja Kami</h2>
              <p class="text-textMuted text-lg">Tiga langkah sederhana menuju pemulihan</p>
            </div>
            
            <div class="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
              <!-- Step 1 -->
              <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-bgLight bg-primary text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div>
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-gray-100 bg-bgOff shadow-sm">
                  <h3 class="font-bold text-textMain text-lg mb-1">Setup Profil Privat</h3>
                  <p class="text-textMuted text-sm">Daftar dengan aman dan tentukan Nama Samaran (Alias) pilihan Anda sendiri.</p>
                </div>
              </div>
              
              <!-- Step 2 -->
              <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-bgLight bg-primary text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-gray-100 bg-bgOff shadow-sm">
                  <h3 class="font-bold text-textMain text-lg mb-1">Jelajahi Ekosistem</h3>
                  <p class="text-textMuted text-sm">Akses modul pembelajaran, Video panduan, dan Diary Enkripsi.</p>
                </div>
              </div>
              
              <!-- Step 3 -->
              <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-bgLight bg-primary text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-gray-100 bg-bgOff shadow-sm">
                  <h3 class="font-bold text-textMain text-lg mb-1">Mulai Konseling</h3>
                  <p class="text-textMuted text-sm">Terhubung via Chat Real-time bersama Psikolog kapanpun Anda siap.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Counseling Illustration -->
          <div class="flex-1 w-full max-w-md lg:max-w-full opacity-0 animate-fade-in-up" style="animation-delay: 0.3s">
            <img src="/images/counseling-illustration.png" alt="Ilustrasi konseling digital secara privat" class="w-full h-auto rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>

        <!-- Banner Final CTA -->
        <div class="bg-gradient-to-br from-primary to-purple-900 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden opacity-0 animate-fade-in-up" style="animation-delay: 0.5s">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
          
          <div class="relative z-10 max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Satu keputusan kecil hari ini bisa mengubah masa depan emosional Anda dan keluarga.
            </h2>
            <p class="text-lg md:text-xl text-secondary mb-10">
              Kamu tidak sendirian, mari melangkah bersama.
            </p>
            <RouterLink to="/register" class="inline-block bg-white hover:bg-gray-50 text-primary px-8 md:px-12 py-4 md:py-5 rounded-lg text-lg md:text-xl font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1" aria-label="Mulai Bersama GENESIS+">
              Mulai Bersama GENESIS+
            </RouterLink>
          </div>
        </div>

      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-50 border-t border-gray-100 text-gray-600 py-12 px-6 md:px-12 lg:px-24 w-full">
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-200">
    
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-2 text-primary font-bold text-xl">
        <span>💜</span> GENESIS+
      </div>
      <p class="text-sm text-textMuted leading-relaxed">
        Platform intervensi sosial dan psikologis terintegrasi dari hulu ke hilir. Aman, privat, dan bebas stigma.
      </p>
      </div>

    <div class="flex flex-col gap-3">
      <h4 class="font-semibold text-gray-900 text-sm tracking-wider uppercase">Layanan Kami</h4>
      <a href="#hulu" class="text-sm hover:text-primary transition-colors">Portal Edukasi (Hulu)</a>
      <a href="#tengah" class="text-sm hover:text-primary transition-colors">Encrypted Diary</a>
      <a href="#hilir" class="text-sm hover:text-primary transition-colors">Konseling Chat (Hilir)</a>
    </div>

    <div class="flex flex-col gap-3">
      <h4 class="font-semibold text-gray-900 text-sm tracking-wider uppercase">Keamanan & Hukum</h4>
      <a href="#privasi" class="text-sm hover:text-primary transition-colors">Kebijakan Privasi</a>
      <a href="#syarat" class="text-sm hover:text-primary transition-colors">Syarat & Ketentuan</a>
      <a href="#enkripsi" class="text-sm hover:text-primary transition-colors">Jaminan Keamanan Data</a>
    </div>

    <div class="flex flex-col gap-3">
      <h4 class="font-semibold text-gray-900 text-sm tracking-wider uppercase">Bantuan</h4>
      <a href="#faq" class="text-sm hover:text-primary transition-colors">Pusat Bantuan (FAQ)</a>
      <span class="text-sm text-textMuted">📧 support@genesisplus.id</span>
    </div>

  </div>

  <div class="w-full pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-textMuted gap-4">
    <p>&copy; 2026 GENESIS+ Platform. Semua Hak Dilindungi.</p>
    <p>Made with 💜 in Indonesia</p>
  </div>
</footer>
  </div>
</template>
