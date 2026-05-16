// ===== ELEMENTS =====
const pfpInput       = document.getElementById('pfp-input');
const pfpPreview     = document.getElementById('pfp-preview');
const postPfp        = document.getElementById('post-pfp');

const inputName      = document.getElementById('input-name');
const postName       = document.getElementById('post-name');

const toggleVerified = document.getElementById('toggle-verified');
const verifiedBadge  = document.getElementById('verified-badge');

const inputDatetime  = document.getElementById('input-datetime');
const postTime       = document.getElementById('post-time');

const inputVisibility = document.getElementById('input-visibility');
const visibilityIcon  = document.getElementById('visibility-icon');

const inputReactions = document.getElementById('input-reactions');
const reactionCount  = document.getElementById('reaction-count');

const inputComments  = document.getElementById('input-comments');
const postComments   = document.getElementById('post-comments');

const inputShares    = document.getElementById('input-shares');
const postShares     = document.getElementById('post-shares');

const downloadBtn    = document.getElementById('download-btn');
const fbPost         = document.getElementById('fb-post');

const reactionBubbles    = document.getElementById('reaction-bubbles');
const selectedEmojisLabel = document.getElementById('selected-emojis-label');
const emojiPicker        = document.getElementById('emoji-picker');

// ===== EMOJI STATE =====
let selectedEmojis = ['👍', '❤️', '😂'];

const VISIBILITY_MAP = {
  globe: '🌐',
  friends: '👥',
  lock: '🔒'
};

// ===== PROFILE PICTURE =====
pfpInput.addEventListener('change', () => {
  const file = pfpInput.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  pfpPreview.src = url;
  postPfp.src = url;
});

// ===== NAME =====
inputName.addEventListener('input', () => {
  postName.textContent = inputName.value || 'Page Name';
});

// ===== VERIFIED BADGE =====
toggleVerified.addEventListener('change', () => {
  verifiedBadge.classList.toggle('hidden', !toggleVerified.checked);
});

// ===== DATETIME =====
inputDatetime.addEventListener('input', () => {
  postTime.textContent = inputDatetime.value || 'Today at 7:00 PM';
});

// ===== VISIBILITY SVG ICONS =====
const VISIBILITY_SVGS = {
  globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="#b0b3b8"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.1 8.7h2.1c.1 1 .3 2 .7 2.9-1.5-.7-2.5-1.8-2.8-2.9zm2.1-1.4H1.1c.3-1.1 1.3-2.2 2.8-2.9-.4.9-.7 1.9-.7 2.9zm1.4 0c.1-1 .4-1.9.8-2.7.5-.1 1-.2 1.6-.2s1.1.1 1.6.2c.4.8.7 1.7.8 2.7H4.6zm4.8 0c-.1-1-.4-1.9-.8-2.7.5.1.9.1 1.3.2.5.1.9.3 1.2.5.4.5.7 1.2.7 2H9.4zm1.4 1.4h2.1c-.3 1.1-1.3 2.2-2.8 2.9.4-.9.6-1.9.7-2.9zm-1.4 0c-.1 1-.4 1.9-.8 2.7-.5.1-1 .2-1.6.2s-1.1-.1-1.6-.2c-.4-.8-.7-1.7-.8-2.7h4.8zm-6.2 0c.1 1 .3 2 .7 2.9-1.5-.7-2.5-1.8-2.8-2.9h2.1zm7.5-4.3c-.4-.3-.8-.5-1.2-.6-.4-.1-.8-.2-1.3-.2.4-.8 1-1.5 1.6-2 .7.7 1.3 1.7 1.6 2.8h-.7zm-7.1-.8c.6.5 1.2 1.2 1.6 2-.4 0-.9.1-1.3.2-.4.1-.8.3-1.2.6h-.7c.3-1.1.9-2.1 1.6-2.8zm.7 9.1c-.6-.5-1.2-1.2-1.6-2 .4 0 .9-.1 1.3-.2.4.8 1 1.5 1.6 2-.5.1-.9.2-1.3.2zm5.3 0c-.4 0-.8-.1-1.3-.2.6-.5 1.2-1.2 1.6-2 .4.1.9.2 1.3.2-.4.8-1 1.5-1.6 2z"/></svg>`,
  friends: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="13" height="13" fill="#b0b3b8"><path d="M13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM0 17v-1a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v1H0zM2 17a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3H2z"/></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="#b0b3b8"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`
};

inputVisibility.addEventListener('change', () => {
  const visSvgEl = document.getElementById('visibility-icon');
  visSvgEl.innerHTML = VISIBILITY_SVGS[inputVisibility.value] || VISIBILITY_SVGS.globe;
});

// ===== REACTIONS =====
inputReactions.addEventListener('input', () => {
  reactionCount.textContent = inputReactions.value || '0';
});

// ===== COMMENTS =====
inputComments.addEventListener('input', () => {
  postComments.textContent = (inputComments.value || '0') + ' comments';
});

// ===== SHARES =====
inputShares.addEventListener('input', () => {
  postShares.textContent = (inputShares.value || '0') + ' shares';
});

// ===== EMOJI PICKER =====
function updateEmojiDisplay() {
  // Update label
  selectedEmojisLabel.textContent = selectedEmojis.join(' ') || 'None';
  // Update bubbles
  reactionBubbles.innerHTML = '';
  selectedEmojis.forEach(em => {
    const span = document.createElement('span');
    span.className = 'rbubble';
    span.textContent = em;
    reactionBubbles.appendChild(span);
  });
}

emojiPicker.addEventListener('click', (e) => {
  const ep = e.target.closest('.ep');
  if (!ep) return;
  const emoji = ep.dataset.emoji;

  if (selectedEmojis.includes(emoji)) {
    // Deselect
    selectedEmojis = selectedEmojis.filter(e => e !== emoji);
    ep.classList.remove('selected');
  } else {
    if (selectedEmojis.length >= 3) {
      // Remove first, add new
      const removed = selectedEmojis.shift();
      // Deselect removed emoji in picker
      const oldEl = emojiPicker.querySelector(`.ep[data-emoji="${removed}"]`);
      if (oldEl) oldEl.classList.remove('selected');
    }
    selectedEmojis.push(emoji);
    ep.classList.add('selected');
  }

  updateEmojiDisplay();
});

// Mark initially selected emojis
document.querySelectorAll('.ep').forEach(ep => {
  if (selectedEmojis.includes(ep.dataset.emoji)) {
    ep.classList.add('selected');
  }
});

// ===== DOWNLOAD =====
downloadBtn.addEventListener('click', async () => {
  downloadBtn.disabled = true;
  downloadBtn.textContent = '⏳ Generating...';

  if (!window.html2canvas) {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
  }

  try {
    const isTransparent = fbPostEl.classList.contains('mode-transparent');

    // Capture the post at high res
    const rawCanvas = await html2canvas(fbPost, {
      backgroundColor: isTransparent ? null : '#242526',
      scale: 3,
      useCORS: true,
      allowTaint: true,
      logging: false
    });

    // Resize to exactly 1080x1080 (matching reference image)
    const TARGET = 1080;
    const outCanvas = document.createElement('canvas');
    outCanvas.width = TARGET;
    outCanvas.height = TARGET;
    const ctx = outCanvas.getContext('2d');

    if (!isTransparent) {
      ctx.fillStyle = '#242526';
      ctx.fillRect(0, 0, TARGET, TARGET);
    }

    // Scale captured canvas into 1080x1080
    const srcW = rawCanvas.width;
    const srcH = rawCanvas.height;
    const scale = Math.min(TARGET / srcW, TARGET / srcH);
    const drawW = srcW * scale;
    const drawH = srcH * scale;
    const offsetX = (TARGET - drawW) / 2;
    const offsetY = (TARGET - drawH) / 2;

    ctx.drawImage(rawCanvas, offsetX, offsetY, drawW, drawH);

    const link = document.createElement('a');
    link.download = 'fb-post.png';
    link.href = outCanvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    alert('Download failed. Try again.');
    console.error(err);
  }

  downloadBtn.disabled = false;
  downloadBtn.textContent = '⬇️ Download Post Image';
});

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// ===== BACKGROUND COLOR SWITCHER =====
const postContentArea = document.querySelector('.post-content-area');
const fbPostEl = document.getElementById('fb-post');
const bgBtns = document.querySelectorAll('.bg-btn');
const BG_CLASSES = ['bg-black', 'bg-dim', 'bg-light', 'bg-transparent'];

bgBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const chosen = btn.dataset.bg;

    // Remove all bg classes from content area
    postContentArea.classList.remove(...BG_CLASSES);

    if (chosen === 'bg-transparent') {
      // True transparent: remove card bg, content area transparent
      postContentArea.classList.add('bg-transparent');
      fbPostEl.classList.add('mode-transparent');
    } else {
      // Solid color: restore card bg, apply content area color
      postContentArea.classList.add(chosen);
      fbPostEl.classList.remove('mode-transparent');
    }

    // Update active button
    bgBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Set default
postContentArea.classList.add('bg-dim');
