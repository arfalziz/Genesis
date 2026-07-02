<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = () => {
  if (email.value && password.value) {
    router.push('/dashboard')
  }
}
</script>

<template>
  <div class="min-h-screen bg-bgOff flex items-center justify-center p-4 font-sans">
    <div class="max-w-md w-full bg-bgLight rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div class="bg-primary p-6 text-center">
        <h1 class="text-3xl font-extrabold text-white">Selamat Datang</h1>
        <p class="text-accent mt-2">Masuk ke ruang amanmu</p>
      </div>
      <div class="p-8">
        <form @submit.prevent="handleLogin">
          <div class="mb-6">
            <label for="email" class="block text-sm font-medium text-textMain mb-2">Email</label>
            <input v-model="email" type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-textMain" placeholder="nama@email.com" required>
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-textMain mb-2">Password</label>
            <input v-model="password" type="password" id="password" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-textMain" placeholder="••••••••" required>
          </div>
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <input id="remember" type="checkbox" class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
              <label for="remember" class="ml-2 block text-sm text-textMuted">Ingat saya</label>
            </div>
            <a href="#" class="text-sm font-medium text-primary hover:text-primary/80">Lupa password?</a>
          </div>
          <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md">
            Masuk
          </button>
        </form>
        <div class="mt-8 text-center">
          <p class="text-sm text-textMuted">
            Belum punya akun?
            <RouterLink to="/register" class="font-medium text-primary hover:text-primary/80">Daftar sekarang</RouterLink>
          </p>
          <div class="mt-4">
            <RouterLink to="/" class="text-sm text-textMuted hover:text-textMain flex items-center justify-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Kembali ke Beranda
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
