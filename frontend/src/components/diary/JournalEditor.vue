<template>
  <div class="flex flex-col h-full bg-white rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05)] border border-gray-100 transition-all duration-300">
    
    <!-- Auto-Save Indicator & Word Count -->
    <div class="flex justify-between items-center mb-4 min-h-[24px]">
      <div class="text-xs font-medium text-gray-400 transition-opacity duration-300" :class="isSaving ? 'opacity-100' : 'opacity-0'">
        <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
        Menyimpan otomatis...
      </div>
      <div class="text-xs text-gray-400 font-medium">
        {{ wordCount }} kata
      </div>
    </div>

    <!-- Toolbar -->
    <div 
      class="flex flex-wrap items-center gap-2 mb-4 p-2 bg-surface-container-low rounded-xl transition-opacity duration-500"
      :class="isTyping ? 'opacity-30' : 'opacity-100'"
      @mouseenter="isTyping = false"
    >
      <button @click="format('bold')" class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors" title="Bold">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"></path></svg>
      </button>
      <button @click="format('italic')" class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors" title="Italic">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line></svg>
      </button>
      <div class="w-px h-5 bg-outline-variant/40 mx-1"></div>
      <button @click="format('insertUnorderedList')" class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors" title="Bullet List">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16M8 6h.01M8 12h.01M8 18h.01"></path></svg>
      </button>
      <button @click="format('formatBlock', 'blockquote')" class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors" title="Quote">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19H5a1 1 0 01-1-1v-1a3 3 0 013-3h2m9 5h-5a1 1 0 01-1-1v-1a3 3 0 013-3h2"></path></svg>
      </button>
      
      <div class="flex-grow"></div>
      
      <!-- Voice to Text Button -->
      <button 
        @click="toggleVoiceToText" 
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors"
        :class="isListening ? 'bg-error-container text-on-error-container animate-pulse' : 'bg-white text-on-surface-variant hover:bg-gray-50 border border-gray-200'"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
        </svg>
        <span class="hidden sm:inline">{{ isListening ? 'Mendengarkan...' : 'Suara' }}</span>
      </button>

      <!-- Save Button -->
      <button 
        @click="manualSave" 
        class="flex items-center gap-1.5 px-4 py-1.5 rounded-lg font-bold text-sm transition-colors bg-primary text-white hover:bg-primary-container shadow-sm"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
        </svg>
        Simpan
      </button>
    </div>

    <!-- Editor Area -->
    <div 
      class="flex-grow outline-none text-lg text-gray-800 leading-[32px] placeholder-gray-300 min-h-[300px] overflow-y-auto ruled-paper"
      contenteditable="true"
      @input="handleInput"
      @focus="isTyping = true"
      @blur="isTyping = false"
      ref="editorRef"
      placeholder="Mulai tulis apa yang kamu rasakan hari ini..."
    ></div>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const editorRef = ref(null);
const isSaving = ref(false);
const isTyping = ref(false);
const wordCount = ref(0);
const isListening = ref(false);

let saveTimeout = null;
let typingTimeout = null;
let recognition = null;

const format = (command, value = null) => {
  document.execCommand(command, false, value);
  editorRef.value?.focus();
};

const manualSave = () => {
  isSaving.value = true;
  // Simulasikan delay penyimpanan ke server
  setTimeout(() => {
    isSaving.value = false;
  }, 800);
};

const handleInput = () => {
  // Focus Mode Logic
  isTyping.value = true;
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    isTyping.value = false;
  }, 2000);

  // Auto-save logic
  isSaving.value = true;
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    isSaving.value = false;
  }, 1500);

  // Word count
  const text = editorRef.value?.innerText || '';
  wordCount.value = text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

// Voice to Text (Web Speech API)
const setupSpeechRecognition = () => {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'id-ID';

    recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      if (finalTranscript && editorRef.value) {
        const currentHtml = editorRef.value.innerHTML;
        editorRef.value.innerHTML = currentHtml + (currentHtml ? ' ' : '') + finalTranscript;
        handleInput();
        
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(editorRef.value);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      isListening.value = false;
    };

    recognition.onend = () => {
      isListening.value = false;
    };
  } else {
    console.warn('Speech recognition not supported in this browser.');
  }
};

const toggleVoiceToText = () => {
  if (!recognition) {
    alert("Maaf, browser Anda tidak mendukung fitur Voice-to-Text.");
    return;
  }

  if (isListening.value) {
    recognition.stop();
  } else {
    recognition.start();
    isListening.value = true;
    isTyping.value = true;
  }
};

onMounted(() => {
  setupSpeechRecognition();
  if (editorRef.value && !editorRef.value.innerText.trim()) {
    editorRef.value.dataset.empty = true;
  }
});

onBeforeUnmount(() => {
  clearTimeout(saveTimeout);
  clearTimeout(typingTimeout);
  if (recognition && isListening.value) {
    recognition.stop();
  }
});
</script>

<style scoped>
[contenteditable]:empty:before {
  content: attr(placeholder);
  color: #d1d5db;
  cursor: text;
}

.ruled-paper {
  background-image: repeating-linear-gradient(transparent, transparent 31px, #f1f5f9 31px, #f1f5f9 32px);
  background-attachment: local;
  padding-top: 4px;
}
</style>
