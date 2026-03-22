/* ============================================ */
/* 🎨 Chibi Color Joy v2 — Main App Logic        */
/* 100+ images, save-to-device, rich music       */
/* ============================================ */

const PALETTES = {
    basic: ['#EF4444', '#F97316', '#EAB308', '#22C55E', '#14B8A6', '#3B82F6', '#6366F1', '#8B5CF6', '#EC4899', '#F43F5E'],
    pastel: ['#FDA4AF', '#FDBA74', '#FDE047', '#86EFAC', '#67E8F9', '#93C5FD', '#A78BFA', '#F0ABFC', '#FCA5A5', '#FDE68A'],
    vivid: ['#DC2626', '#EA580C', '#CA8A04', '#16A34A', '#0891B2', '#2563EB', '#7C3AED', '#C026D3', '#BE123C', '#0D9488'],
    rainbow: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FF69B4', '#00CED1', '#FFD700'],
    earth: ['#92400E', '#78350F', '#365314', '#064E3B', '#1E3A5F', '#4A5568', '#D2691E', '#8B7355', '#556B2F', '#2F4F4F'],
    skin: ['#FDBCB4', '#F0C8A0', '#D4A574', '#A0785A', '#8B6F4E', '#6B4226', '#FFF0DB', '#FFE4C4', '#CDAA7D', '#8B4513'],
    neon: ['#FF0080', '#FF00FF', '#8000FF', '#0040FF', '#00FFFF', '#00FF40', '#80FF00', '#FFFF00', '#FF8000', '#FF0040'],
    candy: ['#FF69B4', '#FFB6C1', '#DDA0DD', '#DA70D6', '#FF1493', '#C71585', '#DB7093', '#FFA07A', '#FA8072', '#E9967A'],
};

let currentColor = '#EF4444';
let currentPalette = 'basic';
let currentCategory = null;
let currentImage = null;
let coloredRegions = {};
let totalRegions = 0;

document.addEventListener('DOMContentLoaded', () => {
    renderCategoryList();
    renderPalette('basic');
    showScreen('homeScreen');
});

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}

function renderCategoryList() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';
    Object.entries(IMAGE_LIBRARY).forEach(([key, cat]) => {
        const btn = document.createElement('button');
        btn.className = 'cat-card';
        btn.innerHTML = `
            <span class="cat-icon">${cat.name.split(' ')[0]}</span>
            <span class="cat-label">${cat.name.split(' ').slice(1).join(' ')}</span>
            <span class="cat-count">${cat.images.length} hình</span>
        `;
        btn.onclick = () => openCategory(key);
        grid.appendChild(btn);
    });
}

function openCategory(catKey) {
    currentCategory = catKey;
    const cat = IMAGE_LIBRARY[catKey];
    document.getElementById('catTitle').textContent = cat.name;
    const grid = document.getElementById('imageGrid');
    grid.innerHTML = '';
    cat.images.forEach(img => {
        const card = document.createElement('div');
        card.className = 'img-card';
        card.innerHTML = `<div class="img-preview">${img.svg}</div><span class="img-name">${img.name}</span>`;
        card.onclick = () => openColoring(img);
        grid.appendChild(card);
    });
    showScreen('categoryScreen');
    playSFX('click');
}

function openColoring(img) {
    currentImage = img;
    coloredRegions = {};
    totalRegions = 0;
    const canvas = document.getElementById('colorCanvas');
    canvas.innerHTML = img.svg;
    const regions = canvas.querySelectorAll('[data-region]');
    totalRegions = regions.length;
    regions.forEach(region => {
        region.style.cursor = 'pointer';
        region.addEventListener('click', e => { e.stopPropagation(); fillRegion(region); });
        region.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); fillRegion(region); });
    });
    updateProgress();
    showScreen('colorScreen');
    playSFX('click');
}

function fillRegion(region) {
    const regionId = region.getAttribute('data-region');
    region.setAttribute('fill', currentColor);
    region.style.transition = 'fill 0.2s';
    coloredRegions[regionId] = currentColor;
    region.style.filter = 'brightness(1.3)';
    setTimeout(() => region.style.filter = '', 200);
    playSFX('fill');
    updateProgress();
    if (Object.keys(coloredRegions).length >= totalRegions) setTimeout(showCompletion, 400);
}

function updateProgress() {
    const filled = Object.keys(coloredRegions).length;
    const pct = totalRegions > 0 ? Math.round((filled / totalRegions) * 100) : 0;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = `${filled}/${totalRegions}`;
}

function renderPalette(paletteName) {
    currentPalette = paletteName;
    const container = document.getElementById('palette');
    container.innerHTML = '';
    PALETTES[paletteName].forEach((color, i) => {
        const btn = document.createElement('button');
        btn.className = 'color-btn' + (i === 0 ? ' active' : '');
        btn.style.background = color;
        btn.onclick = () => selectColor(color, btn);
        container.appendChild(btn);
    });
    const eraser = document.createElement('button');
    eraser.className = 'color-btn eraser';
    eraser.textContent = '🧹';
    eraser.onclick = () => selectColor('white', eraser);
    container.appendChild(eraser);

    const selWrap = document.getElementById('paletteSelector');
    if (selWrap) {
        selWrap.innerHTML = '';
        const icons = { basic: '🌈', pastel: '🍬', vivid: '🔥', rainbow: '🌙', earth: '🌍', skin: '👤', neon: '💜', candy: '🍭' };
        Object.keys(PALETTES).forEach(name => {
            const pb = document.createElement('button');
            pb.className = 'pal-btn' + (name === paletteName ? ' active' : '');
            pb.textContent = icons[name] || '�';
            pb.title = name;
            pb.onclick = () => renderPalette(name);
            selWrap.appendChild(pb);
        });
    }
}

function selectColor(color, btn) {
    currentColor = color;
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    playSFX('click');
}

function undoLast() {
    const keys = Object.keys(coloredRegions);
    if (!keys.length) return;
    const lastKey = keys[keys.length - 1];
    delete coloredRegions[lastKey];
    const r = document.querySelector(`#colorCanvas [data-region="${lastKey}"]`);
    if (r) r.setAttribute('fill', 'white');
    updateProgress();
    playSFX('click');
}

function clearCanvas() {
    coloredRegions = {};
    document.querySelectorAll('#colorCanvas [data-region]').forEach(r => r.setAttribute('fill', 'white'));
    updateProgress();
    playSFX('click');
}

// ===== SAVE TO DEVICE =====
function saveImage() {
    const svgEl = document.querySelector('#colorCanvas svg');
    if (!svgEl) return;
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 800;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 800, 800);
    const img = new Image();
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 800, 800);
        URL.revokeObjectURL(url);
        const link = document.createElement('a');
        link.download = `chibi-color-${currentImage ? currentImage.id : 'art'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        playSFX('complete');
    };
    img.src = url;
}

// ===== COMPLETION =====
function showCompletion() {
    playSFX('complete');
    const container = document.getElementById('completionFX');
    container.innerHTML = '';
    const colors = ['#FF6B9D', '#6C63FF', '#FFD93D', '#6BCB77', '#00B4D8', '#FF8C42', '#F43F5E', '#8B5CF6'];
    for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        Object.assign(p.style, {
            left: Math.random() * 100 + '%',
            background: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: Math.random() * 2 + 's',
            animationDuration: (1.5 + Math.random() * 2) + 's',
            width: (4 + Math.random() * 8) + 'px',
            height: (4 + Math.random() * 8) + 'px',
            borderRadius: Math.random() > 0.5 ? '50%' : '2px'
        });
        container.appendChild(p);
    }
    document.getElementById('completionOverlay').classList.add('show');
    if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 200]);
}

function closeCompletion() { document.getElementById('completionOverlay').classList.remove('show'); }

function nextImage() {
    closeCompletion();
    const cat = IMAGE_LIBRARY[currentCategory];
    const idx = cat.images.findIndex(i => i.id === currentImage.id);
    openColoring(cat.images[(idx + 1) % cat.images.length]);
}

// ===== SFX =====
let sfxCtx = null;
function playSFX(type) {
    try {
        if (!sfxCtx) sfxCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (sfxCtx.state === 'suspended') sfxCtx.resume();
        const now = sfxCtx.currentTime;
        const g = sfxCtx.createGain(); g.gain.value = 0.25; g.connect(sfxCtx.destination);
        function tone(f, t, d, tp = 'sine') {
            const o = sfxCtx.createOscillator(); const ng = sfxCtx.createGain();
            o.type = tp; o.frequency.value = f;
            ng.gain.setValueAtTime(0, t); ng.gain.linearRampToValueAtTime(0.5, t + 0.02); ng.gain.linearRampToValueAtTime(0, t + d);
            o.connect(ng); ng.connect(g); o.start(t); o.stop(t + d + 0.01);
        }
        if (type === 'fill') { tone(600, now, 0.06); tone(900, now + 0.05, 0.06); }
        else if (type === 'click') { tone(500, now, 0.04); }
        else if (type === 'complete') { [523, 659, 784, 880, 1047, 1175, 1319, 1568].forEach((f, i) => { tone(f, now + i * 0.1, 0.18); if (i % 2 === 0) tone(f / 2, now + i * 0.1, 0.22, 'triangle'); }); }
    } catch (e) { }
}

function goHome() { showScreen('homeScreen'); }
function goBackToCategory() { showScreen('categoryScreen'); }
