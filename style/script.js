/* ---------- TOP NAV LINKS ---------- */

// About
document.querySelector('.left a:nth-child(1)').onclick = () => {
  window.location.href = 'https://about.google/';
};

// Store
document.querySelector('.left a:nth-child(2)').onclick = () => {
  window.location.href = 'https://store.google.com/';
};

// Gmail
document.querySelector('.right a:nth-child(1)').onclick = () => {
  window.location.href = 'https://mail.google.com/';
};

// Images
document.querySelector('.right a:nth-child(2)').onclick = () => {
  window.location.href = 'https://www.google.com/imghp';
};

/* ---------- ICON BUTTONS ---------- */

// Google Labs
document.querySelector('.labs-icon').onclick = () => {
  window.location.href = 'https://labs.google/';
};

// Profile
document.querySelector('.profile').onclick = () => {
  window.location.href = 'https://myaccount.google.com/';
};

/* ---------- GOOGLE APPS PANEL ---------- */

const appsBtn = document.getElementById("appsBtn");
const appsPanel = document.getElementById("appsPanel");

appsBtn.onclick = (e) => {
  e.stopPropagation();
  appsPanel.classList.toggle("show");
};

document.addEventListener("click", () => {
  appsPanel.classList.remove("show");
});

/* ---------- SEARCH ---------- */

function search() {
  const query = document.getElementById('searchInput').value.trim();
  if (query !== '') {
    window.location.href =
      'https://www.google.com/search?q=' + encodeURIComponent(query);
  }
}

document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') search();
});

/* ---------- MIC (VOICE SEARCH) ---------- */

const micIcon = document.querySelector('.icon-img');
const searchInput = document.getElementById('searchInput');

if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();

  recognition.lang = 'en-IN';
  recognition.continuous = false;
  recognition.interimResults = false;

  micIcon.onclick = () => {
    recognition.start();
    micIcon.style.opacity = '0.6';
  };

  recognition.onresult = (event) => {
    searchInput.value = event.results[0][0].transcript;
    micIcon.style.opacity = '1';
  };

  recognition.onerror = () => {
    micIcon.style.opacity = '1';
    alert('Microphone permission denied');
  };

  recognition.onend = () => {
    micIcon.style.opacity = '1';
  };

} else {
  alert('Voice search not supported in this browser');
}

/* ---------- GOOGLE LENS ---------- */

document.querySelector('.lens-icon').onclick = () => {
  window.open('https://lens.google.com/', '_blank');
};

/* ---------- AI MODE (HOVER ONLY – already handled in CSS) ---------- */

/* ---------- MAIN BUTTONS ---------- */

document.querySelector('.buttons button:nth-child(1)').onclick = search;

document.querySelector('.buttons button:nth-child(2)').onclick = () => {
  window.location.href = 'https://www.google.com/doodles';
};
