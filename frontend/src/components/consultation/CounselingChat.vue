<template>
  <div class="flex flex-col h-full bg-surface-container-low rounded-[16px] overflow-hidden shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05)] border border-gray-100 animate-fade-in-up font-['Plus_Jakarta_Sans',_sans-serif]">
    
    <!-- Chat Header -->
    <div class="bg-white px-6 py-4 border-b border-gray-100 flex justify-between items-center z-10">
      <div class="flex items-center gap-4">
        <div class="relative">
          <img :src="psychologist?.avatar" :alt="psychologist?.name" class="w-12 h-12 rounded-full bg-surface-container object-cover" />
          <span class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <h3 class="text-xl font-medium leading-[1.4] text-gray-900">{{ psychologist?.name }}</h3>
          <p class="text-sm font-medium leading-[1.4] tracking-[0.01em] text-emerald-500 flex items-center gap-1">{{ psychologist?.spec }}</p>
        </div>
      </div>
      
      <div class="flex items-center gap-2 md:gap-4">
        <div class="flex items-center gap-1 mr-1">
          <button class="p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-surface-container-high" title="Voice Call" @click="alert('Fitur Voice Call belum tersedia dalam mode simulasi.')">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </button>
          <button class="p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-surface-container-high" title="Video Call" @click="alert('Fitur Video Call belum tersedia dalam mode simulasi.')">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </button>
        </div>
        <button @click="$emit('endSession')" class="px-4 py-2 bg-error-container/20 text-error hover:bg-error-container hover:text-on-error-container transition-colors rounded-lg text-xs font-semibold leading-none">
          Akhiri Sesi
        </button>
      </div>
    </div>

    <!-- Chat Messages Area -->
    <div class="flex-grow p-6 overflow-y-auto space-y-6 bg-[#EEF2FC]/30 flex flex-col" ref="chatContainer">
      
      <!-- Initial Context / Role Paper -->
      <div class="w-fit mx-auto flex items-center justify-center gap-1.5 bg-surface-container-high px-4 py-2 rounded-2xl text-sm font-medium leading-[1.4] tracking-[0.01em] text-gray-500 shadow-sm border border-gray-100/50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
        <span>Messages are end-to-end encrypted</span>
      </div>
      
      <div v-for="msg in messages" :key="msg.id" class="flex flex-col w-full" :class="msg.isMine ? 'items-end' : 'items-start'">
        <div class="flex items-end gap-2 max-w-[80%]">
          <!-- Avatar for psychologist -->
          <img v-if="!msg.isMine" :src="psychologist?.avatar" class="w-8 h-8 rounded-full mb-1 flex-shrink-0" />
          
          <!-- Message Bubble -->
          <div 
            class="px-4 py-3 rounded-[16px] text-base font-normal leading-[1.6] relative shadow-sm"
            :class="msg.isMine ? 'bg-[#F3E8FF] text-gray-800 rounded-br-none' : 'bg-white border border-gray-100 text-gray-800 rounded-bl-none'"
          >
            {{ msg.text }}
          </div>
        </div>
        <span class="text-[10px] text-gray-400 mt-1 font-medium px-10">{{ msg.time }}</span>
      </div>

      <!-- Typing Indicator (Simulated) -->
      <div v-if="isTyping" class="flex items-end gap-2 max-w-[80%] animate-fade-in-up">
        <img :src="psychologist?.avatar" class="w-8 h-8 rounded-full mb-1 flex-shrink-0" />
        <div class="px-4 py-3 rounded-2xl bg-white border border-gray-100 text-gray-800 rounded-bl-none shadow-sm flex items-center gap-1">
          <span class="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
          <span class="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
          <span class="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
        </div>
      </div>

    </div>

    <!-- Input Area -->
    <div class="bg-white p-4 border-t border-gray-100">
      <form @submit.prevent="sendMessage" class="flex items-end gap-2 max-w-4xl mx-auto">
        <button type="button" class="p-2 text-gray-400 hover:text-primary transition-colors flex-shrink-0 mb-1.5 rounded-full hover:bg-gray-50">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
        </button>
        <div class="flex-grow relative bg-surface-container-low rounded-[16px] border border-gray-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all flex items-end">
          <textarea 
            v-model="newMessage"
            rows="1"
            class="w-full bg-transparent px-4 py-3 focus:outline-none text-sm text-gray-800 resize-none max-h-32 min-h-[44px]"
            placeholder="Ketik pesan dengan aman..."
            @keydown.enter.prevent="handleEnter"
            ref="inputRef"
          ></textarea>
          <button type="button" class="p-2 text-gray-400 hover:text-primary transition-colors mb-1 mr-1 rounded-full hover:bg-gray-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>
        </div>
        <button 
          type="submit" 
          class="w-[44px] h-[44px] flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 shadow-md mb-0.5 ml-1"
          :disabled="!newMessage.trim()"
        >
          <svg class="w-5 h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
        </button>
      </form>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps({
  psychologist: {
    type: Object,
    required: true
  },
  rolePaper: {
    type: String,
    default: ''
  }
});

defineEmits(['endSession']);

const messages = ref([]);
const newMessage = ref('');
const isTyping = ref(false);
const chatContainer = ref(null);
const inputRef = ref(null);

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
};

const sendMessage = () => {
  if (!newMessage.value.trim()) return;
  
  messages.value.push({
    id: Date.now(),
    text: newMessage.value.trim(),
    time: getCurrentTime(),
    isMine: true
  });
  
  newMessage.value = '';
  scrollToBottom();
  
  // Simulate psychologist typing
  simulateResponse();
};

const handleEnter = (e) => {
  if (e.shiftKey) {
    return; // Allow new line
  }
  sendMessage();
};

const simulateResponse = () => {
  isTyping.value = true;
  scrollToBottom();
  
  setTimeout(() => {
    isTyping.value = false;
    messages.value.push({
      id: Date.now(),
      text: "Saya mengerti perasaan Anda. Bisa ceritakan lebih lanjut mengenai hal tersebut?",
      time: getCurrentTime(),
      isMine: false
    });
    scrollToBottom();
  }, 2000 + Math.random() * 2000); // 2-4 seconds delay
};

onMounted(() => {
  // Add role paper as the first message from user silently if it exists
  if (props.rolePaper) {
    messages.value.push({
      id: Date.now(),
      text: props.rolePaper,
      time: getCurrentTime(),
      isMine: true
    });
    
    // Simulate initial response based on role paper
    setTimeout(() => {
      isTyping.value = true;
      scrollToBottom();
      
      setTimeout(() => {
        isTyping.value = false;
        messages.value.push({
          id: Date.now(),
          text: `Halo, saya ${props.psychologist.name}. Saya sudah membaca keluhan awal Anda. Mari kita bicarakan pelan-pelan. Bagaimana perasaan Anda saat ini?`,
          time: getCurrentTime(),
          isMine: false
        });
        scrollToBottom();
      }, 1500);
    }, 1000);
  }
});
</script>
