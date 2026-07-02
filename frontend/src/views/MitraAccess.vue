<template>
  <div class="min-h-screen bg-bgLight flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-textMain">
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
      <div>
        <div class="flex justify-center">
          <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
        </div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
          Portal Mitra GENESIS+
        </h2>
        <p class="mt-2 text-center text-sm text-textMuted font-medium">
          Manajemen Kesehatan Mental Instansi & Korporasi
        </p>
      </div>
      
      <!-- Tab Selector -->
      <div class="flex p-1 bg-gray-100 rounded-xl mt-8">
        <button 
          @click="isLogin = true" 
          :class="['flex-1 py-2 text-sm font-bold rounded-lg transition-all', isLogin ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700']"
        >
          Masuk
        </button>
        <button 
          @click="isLogin = false" 
          :class="['flex-1 py-2 text-sm font-bold rounded-lg transition-all', !isLogin ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700']"
        >
          Daftar Instansi
        </button>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <!-- Register Fields -->
          <template v-if="!isLogin">
            <div>
              <label for="orgName" class="block text-sm font-medium text-gray-700">Nama Organisasi</label>
              <input id="orgName" name="orgName" type="text" required class="mt-1 appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-gray-50" placeholder="Universitas Aisyah Pringsewu">
            </div>
            <div>
              <label for="contact" class="block text-sm font-medium text-gray-700">Nomor Kontak Penanggung Jawab</label>
              <input id="contact" name="contact" type="text" required class="mt-1 appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-gray-50" placeholder="081234567890">
            </div>
          </template>

          <!-- Common Fields -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email Instansi</label>
            <input id="email" name="email" type="email" autocomplete="email" required class="mt-1 appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-gray-50" placeholder="admin@instansi.ac.id">
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Kata Sandi</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="mt-1 appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-gray-50" placeholder="••••••••">
          </div>
        </div>

        <div v-if="isLogin" class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Ingat saya
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-primary hover:text-primary/80">
              Lupa sandi?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-md">
            {{ isLogin ? 'Masuk Portal' : 'Daftar Sekarang' }}
          </button>
        </div>
      </form>
      
      <div class="text-center mt-6">
        <RouterLink to="/" class="text-sm text-gray-500 hover:text-primary font-medium flex items-center justify-center gap-1 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Beranda
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLogin = ref(true);

const handleSubmit = () => {
  // Simulasi proses autentikasi B2B
  console.log('Autentikasi Mitra:', isLogin.value ? 'Login' : 'Register');
  // Langsung arahkan ke dashboard setelah berhasil login/daftar
  router.push('/mitra/beli-kuota');
};
</script>
