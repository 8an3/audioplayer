let playlist = [];
let currentIndex = 0;
let isPlaying = false;
let shuffle = false;
let repeat = 'none';
let blobUrls = [];
let fadeTimer = null;
const trackPlaceholders = {};

const PLACEHOLDERS = ['record/boba.svg', 'record/darthvader.svg', 'record/deathstar.svg', 'record/r2d2.svg', 'record/sttk0.svg', 'record/sttk1.svg', 'record/sttk2.svg', 'record/xwing.svg'];

function getFontUrl(fontName) {
	const fontUrls = {
		'Norse': 'https://raw.githubusercontent.com/8an3/midgardr-notes/main/fonts/Norse.otf',
		'Norsebold': 'https://raw.githubusercontent.com/8an3/midgardr-notes/main/fonts/Norsebold.otf',
		'Inter': 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
		'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap',
		'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap',
		'Poppins': 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
		'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap',
		'Outfit': 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap',
		'Plus Jakarta Sans': 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
		'DM Sans': 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap',
		'IBM Plex Sans': 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap',
		'Nunito': 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap',
		'Lato': 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
		'Geist': 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap',
		'Barlow': 'https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap',
		'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap',
		'Gabriela': 'https://fonts.googleapis.com/css2?family=Gabriela&display=swap',
		'Delius Swash Caps': 'https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap',
		'Merriweather': 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap',
		'Playfair Display': 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap',
		'Lora': 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap',
		'Source Serif 4': 'https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@300;400;500;600;700&display=swap',
		'Libre Baskerville': 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap',
		'Space Grotesk': 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
		'PT Serif': 'https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap',
		'JetBrains Mono': 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap',
		'Fira Code': 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap',
		'Geist Mono': 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&display=swap',
		'IBM Plex Mono': 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap',
		'Roboto Mono': 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap',
		'Space Mono': 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap',

		// --- SANS-SERIF (Modern & Humanist) ---
		'Work Sans': 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap',
		'Public Sans': 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap',
		'Manrope': 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap',
		'Urbanist': 'https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap',
		'Sora': 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap',
		'Kanit': 'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap',
		'Figtree': 'https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;900&display=swap',
		'Archivo': 'https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800&display=swap',
		'Bricolage Grotesque': 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;400;700;800&display=swap',

		// --- SERIF (Luxury & Editorial) ---
		'Fraunces': 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;400;600;700&display=swap',
		'Cormorant Garamond': 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap',
		'Crimson Pro': 'https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;400;600;700&display=swap',
		'EB Garamond': 'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&display=swap',
		'Newsreader': 'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,300;400;500;600;700&display=swap',
		'DM Serif Display': 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap',
		'Prata': 'https://fonts.googleapis.com/css2?family=Prata&display=swap',
		'Bodoni Moda': 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;500;600;700&display=swap',
		'Young Serif': 'https://fonts.googleapis.com/css2?family=Young+Serif&display=swap',

		// --- MONOSPACE (Technical & Brutalist) ---
		'Inconsolata': 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;600;700&display=swap',
		'Ubuntu Mono': 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap',
		'Major Mono Display': 'https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap',
		'Red Hat Mono': 'https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500;600;700&display=swap',
		'Nanum Gothic Coding': 'https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap',
		'Cutive Mono': 'https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap',

		// --- DISPLAY & PLAYFUL ---
		'Clash Display': 'https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap', // (Commonly used with Google sets)
		'Syne': 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap',
		'Unbounded': 'https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;700;900&display=swap',
		'Cabinet Grotesk': 'https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&display=swap',
		'Righteous': 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',
		'Lexend': 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap',
	};

	return fontUrls[fontName] || '';
}

const getFontFamily = () => {
	if (FONT_OVERRIDE && fontsNgin[FONT_OVERRIDE]) {
		return {
			sans: fontsNgin[FONT_OVERRIDE],
			serif: fontsNgin[FONT_OVERRIDE],
			mono: fontsNgin[FONT_OVERRIDE],
		}
	}
	return selectedPreset.fontFamily || {}
}

function getPlaceholder(index) {
  if (trackPlaceholders[index] === undefined) { trackPlaceholders[index] = PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)]; }
  return trackPlaceholders[index];
}

let FONT_OVERRIDE = null;

function applyFont(fontName) {
  if (!window.fontsNgin || !window.fontsNgin[fontName]) return;
  FONT_OVERRIDE = fontName;
  const url = getFontUrl(fontName);
  if (url) {
    const existing = document.getElementById('fontOverrideLink');
    if (existing) existing.remove();
    const link = document.createElement('link');
    link.id = 'fontOverrideLink';
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  }
  const family = window.fontsNgin[fontName].join(', ');
  const root = document.documentElement;
  root.style.setProperty('--font-sans', family);
  root.style.setProperty('--font-serif', family);
  root.style.setProperty('--font-mono', family);
}

function applyPreset(presetName) {
  if (!window.presetsNgin) return;
  const preset = window.presetsNgin[presetName];
  if (!preset) return;
  const root = document.documentElement;
  if (preset.borderRadius) {
    Object.entries(preset.borderRadius).forEach(([key, value]) => {
      if (key === 'DEFAULT') root.style.setProperty('--radius', value);
      root.style.setProperty(`--radius-${key}`, value);
    });
  }
  if (preset.fontSize) {
    Object.entries(preset.fontSize).forEach(([key, value]) => {
      const size = Array.isArray(value) ? value[0] : value;
      const lineHeight = Array.isArray(value) && value[1]?.lineHeight ? value[1].lineHeight : null;
      root.style.setProperty(`--font-size-${key}`, size);
      if (lineHeight) root.style.setProperty(`--line-height-${key}`, lineHeight);
    });
  }
  if (preset.fontFamily) {
    if (preset.fontFamily.sans) root.style.setProperty('--font-sans', preset.fontFamily.sans.join(', '));
    if (preset.fontFamily.mono) root.style.setProperty('--font-mono', preset.fontFamily.mono.join(', '));
    if (preset.fontFamily.serif) root.style.setProperty('--font-serif', preset.fontFamily.serif.join(', '));
  }
  if (preset.scale !== undefined) {
    root.style.setProperty('--scale', preset.scale);
  }
  if (preset.spacing) {
    const scaled = scaleSpacing(preset.spacing, preset.scale ?? 1);
    Object.entries(scaled).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });
  }
}

function scaleSpacing(spacing, scale) {
  return Object.entries(spacing).reduce((acc, [key, value]) => {
    if (typeof value === 'string' && value.endsWith('rem')) {
      acc[key] = `${parseFloat(value) * scale}rem`;
    } else if (typeof value === 'string' && value.endsWith('px')) {
      acc[key] = `${parseFloat(value) * scale}px`;
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
}

function applyTheme(themeName) {
  if (!window.themeNgin) return;
  const vars = window.themeNgin[themeName]?.v3?.dark ?? window.themeNgin['Modern-Retro'].v3.dark;
  console.log(window.themeNgin)
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, value]) => {
    const wrapped = (typeof value === 'string' && !value.includes('(')) ? `hsl(${value})` : value;
    root.style.setProperty(key, wrapped);
  });
}

const audio = new Audio();
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
const src = audioCtx.createMediaElementSource(audio);
src.connect(gainNode);
gainNode.connect(audioCtx.destination);

function getFadeTargets() { return document.querySelectorAll('.ui-fadeable'); }

function startFadeTimer() {
  clearTimeout(fadeTimer);
  getFadeTargets().forEach(el => el.classList.remove('faded'));
  fadeTimer = setTimeout(() => { getFadeTargets().forEach(el => el.classList.add('faded')); }, 10000);
}

document.getElementById('playerRoot').addEventListener('mousemove', startFadeTimer);
document.getElementById('playerRoot').addEventListener('click', startFadeTimer);

function formatTime(s) {
  if (isNaN(s)) return '00:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function playIndex(index) {
  if (!playlist[index]) return;
  currentIndex = index;
  audio.src = blobUrls[index];
  const albumArt = document.getElementById('albumArt');
  albumArt.src = getPlaceholder(index);
  albumArt.onerror = () => { albumArt.src = 'record/darthvader.svg'; };
  const startPlayback = () => {
    audio.play().then(() => {
      isPlaying = true;
      updateUI();
    }).catch(() => {
      isPlaying = false;
      updateUI();
    });
  };
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().then(startPlayback);
  } else {
    startPlayback();
  }
  startFadeTimer();
}

function updateUI() {
  const track = playlist[currentIndex];
  document.getElementById('songTitle').textContent = track ? track.name.replace(/\.[^.]+$/, '') : 'MIÐGARÐR SÐK';
  document.getElementById('artistName').textContent = track ? `Track ${currentIndex + 1} of ${playlist.length}` : 'MUSIC PLAYER';
  document.getElementById('playIcon').style.display = isPlaying ? 'none' : 'block';
  document.getElementById('pauseIcon').style.display = isPlaying ? 'block' : 'none';
  document.getElementById('shuffleBtn').style.opacity = shuffle ? '1' : '0.4';
  const repeatIcon = document.getElementById('repeatIcon');
  if (repeat === 'none') { repeatIcon.src = 'icons/repeat-off.svg'; repeatIcon.style.opacity = '0.4'; }
  if (repeat === 'all') { repeatIcon.src = 'icons/repeat.svg'; repeatIcon.style.opacity = '1'; }
  if (repeat === 'one') { repeatIcon.src = 'icons/repeat-single.svg'; repeatIcon.style.opacity = '1'; }

  const wrapper = document.getElementById('albumWrapper');
  if (isPlaying) {
    wrapper.classList.add('playing');
    document.querySelector('.song-info-svg')?.classList.add('playing');
  } else {
    wrapper.classList.remove('playing');
    document.querySelector('.song-info-svg')?.classList.remove('playing');
  }
  renderPlaylist();
  // document.getElementById('trackCount').textContent = playlist.length;
}

function renderPlaylist() {
  const container = document.getElementById('playlist');
  container.innerHTML = '';
  playlist.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = 'playlist-item' + (i === currentIndex ? ' active' : '');
    item.textContent = track.name.replace(/\.[^.]+$/, '');
    item.addEventListener('click', () => playIndex(i));
    container.appendChild(item);
  });
}

function nextTrack() {
  if (!playlist.length) return;
  currentIndex = shuffle ? Math.floor(Math.random() * playlist.length) : (currentIndex + 1) % playlist.length;
  playIndex(currentIndex);
}

function prevTrack() {
  if (!playlist.length) return;
  currentIndex = shuffle ? Math.floor(Math.random() * playlist.length) : (currentIndex - 1 + playlist.length) % playlist.length;
  playIndex(currentIndex);
}

audio.addEventListener('ended', () => { if (repeat === 'one') { audio.play(); return; } nextTrack(); });

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  const bar = document.getElementById('progressBar');
  bar.value = pct;
  bar.style.setProperty('--progress', pct + '%');
  document.getElementById('currentTime').textContent = formatTime(audio.currentTime);
  document.getElementById('duration').textContent = formatTime(audio.duration);
});

async function loadDirectoryHandle(dirHandle) {
  const files = [];
  for await (const entry of dirHandle.values()) {
    if (entry.kind === 'file') {
      const file = await entry.getFile();
      if (file.type.startsWith('audio/')) files.push(file);
    }
  }
  if (!files.length) return;
  blobUrls.forEach(u => URL.revokeObjectURL(u));
  blobUrls = files.map(f => URL.createObjectURL(f));
  playlist = files;
  currentIndex = 0;
  playIndex(0);
}

async function saveDirectoryHandle(dirHandle) {
  const db = await new Promise((res, rej) => {
    const req = indexedDB.open('musicPlayerDB', 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore('handles');
    req.onsuccess = e => res(e.target.result);
    req.onerror = () => rej();
  });
  const tx = db.transaction('handles', 'readwrite');
  tx.objectStore('handles').put(dirHandle, 'lastDir');
}

async function loadSavedDirectoryHandle() {
  const db = await new Promise((res, rej) => {
    const req = indexedDB.open('musicPlayerDB', 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore('handles');
    req.onsuccess = e => res(e.target.result);
    req.onerror = () => rej();
  });
  return new Promise((res) => {
    const tx = db.transaction('handles', 'readonly');
    const req = tx.objectStore('handles').get('lastDir');
    req.onsuccess = e => res(e.target.result ?? null);
    req.onerror = () => res(null);
  });
}

let pendingResumeHandle = null;

document.getElementById('selectFolder').addEventListener('click', async () => {
  if (pendingResumeHandle) {
    const dirHandle = pendingResumeHandle;
    pendingResumeHandle = null;
    document.getElementById('selectFolder').innerHTML = '<img src="icons/folder.svg" width="20" height="20" alt="Open Folder">';
    const perm = await dirHandle.requestPermission({ mode: 'read' });
    if (perm === 'granted') await loadDirectoryHandle(dirHandle);
    return;
  }
  let dirHandle;
  try { dirHandle = await window.showDirectoryPicker(); } catch { return; }
  await saveDirectoryHandle(dirHandle);
  await loadDirectoryHandle(dirHandle);
});

document.getElementById('playPauseBtn').addEventListener('click', () => {
  if (!playlist.length) return;
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    updateUI();
    startFadeTimer();
    return;
  } else {
    const resume = () => {
      audio.play().then(() => {
        isPlaying = true;
        updateUI();
      }).catch(() => {
        isPlaying = false;
        updateUI();
      });
    };
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(resume);
    } else {
      resume();
    }
  }
  startFadeTimer();
});

document.getElementById('prevBtn').addEventListener('click', prevTrack);
document.getElementById('nextBtn').addEventListener('click', nextTrack);
document.getElementById('shuffleBtn').addEventListener('click', () => { shuffle = !shuffle; updateUI(); });
document.getElementById('repeatBtn').addEventListener('click', () => { repeat = repeat === 'none' ? 'all' : repeat === 'all' ? 'one' : 'none'; updateUI(); });
document.getElementById('progressBar').addEventListener('input', (e) => { if (audio.duration) audio.currentTime = (e.target.value / 100) * audio.duration; startFadeTimer(); });
document.getElementById('volumeBoost').addEventListener('input', (e) => { const val = parseInt(e.target.value); gainNode.gain.value = val / 100; document.getElementById('boostValue').textContent = val + '%'; startFadeTimer(); });
document.getElementById('togglePlaylistBtn').addEventListener('click', () => { document.getElementById('playlist').classList.toggle('hidden'); });
document.getElementById('fontSelect').addEventListener('change', (e) => {
  if (e.target.value) applyFont(e.target.value);
  chrome.storage.local.set({ font: e.target.value });
});
document.getElementById('themeSelect').addEventListener('change', (e) => {
  applyTheme(e.target.value);
  chrome.storage.local.set({ theme: e.target.value });
});

chrome.storage.local.get(['preset', 'theme', 'font'], (result) => {
  const preset = 'MINIMALIST'; //  result.preset ??
  const theme = result.theme ?? 'Cyber-Pop';
  document.getElementById('themeSelect').value = theme;
  applyPreset(preset);
  applyTheme(theme);
  if (result.font) {
    document.getElementById('fontSelect').value = result.font;
    applyFont(result.font);
  }
  loadSavedDirectoryHandle().then((dirHandle) => {
    if (!dirHandle) return;
    pendingResumeHandle = dirHandle;
    document.getElementById('selectFolder').innerHTML = '<img src="icons/folder.svg" width="20" height="20" alt="Resume">';
  });
});
updateUI();
startFadeTimer();