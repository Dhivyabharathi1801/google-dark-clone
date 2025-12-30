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

// Google Apps
document.querySelector('.apps').onclick = () => {
  window.location.href = 'https://www.google.com/intl/en/about/products';
};

// Profile
document.querySelector('.profile').onclick = () => {
  window.location.href = 'https://myaccount.google.com/';
};

/* ---------- SEARCH BAR ICONS ---------- */

// Plus icon
document.querySelector('.plus').onclick = () => {
  alert('Add shortcut (Demo)');
};

const micBtn = document.querySelector('.icon-img');
const searchInput = document.getElementById('searchInput');

if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();

  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  micBtn.onclick = () => {
    recognition.start();
    micBtn.style.opacity = '0.6';
  };

  recognition.onresult = (event) => {
    const voiceText = event.results[0][0].transcript;
    searchInput.value = voiceText;
    micBtn.style.opacity = '1';
  };

  recognition.onerror = () => {
    micBtn.style.opacity = '1';
    alert('Microphone access denied');
  };

  recognition.onend = () => {
    micBtn.style.opacity = '1';
  };

} else {
  alert('Voice search not supported in this browser');
}


// Lens (Camera)
document.querySelector('.lens-icon').onclick = () => {
  window.location.href = 'https://lens.google/';
};
document.querySelector('.lens-icon').onclick = () => {
  window.open('https://lens.google.com/', '_blank');
};

// AI Mode
document.querySelector('.ai-btn').onclick = () => {
  alert('AI Mode coming soon');
};

/* ---------- SEARCH INPUT ---------- */

function search() {
  const query = document.getElementById('searchInput').value.trim();
  if (query !== '') {
    window.location.href =
      'https://www.google.com/search?q=' + encodeURIComponent(query);
  }
}

// Enter key search
document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    search();
  }
});

/* ---------- MAIN BUTTONS ---------- */

// Google Search
document.querySelector('.buttons button:nth-child(1)').onclick = search;

// I'm Feeling Lucky
document.querySelector('.buttons button:nth-child(2)').onclick = () => {
  window.location.href = 'https://www.google.com/doodles';
};

/* ---------- LANGUAGE LINKS ---------- */

document.querySelectorAll('.languages a').forEach(link => {
  link.onclick = () => {
    window.location.href = 'https://www.google.com/preferences#languages';
  };
});

/* ---------- FOOTER LINKS ---------- */

document.querySelectorAll('footer a').forEach(link => {
  link.onclick = () => {
    alert('Footer link clicked (Demo)');
  };
});
