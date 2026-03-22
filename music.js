/* ============================================ */
/* 🎵 Chibi Color Joy — Music System v2           */
/* 100 procedural tracks · Web Audio API         */
/* Background playback on ALL devices            */
/* ============================================ */

const MusicPlayer = (() => {
    let ctx = null, masterGain = null, isPlaying = false, melodyTimer = null, currentTrack = 0;

    // 100 tracks: name, scale, tempo, wave type
    const S = [261, 277, 293, 311, 329, 349, 370, 392, 415, 440, 466, 493, 523, 554, 587, 622, 659, 698, 740, 784, 831, 880, 932, 988, 1047];
    function sc(base, pattern) { return pattern.map(i => Math.round(base * Math.pow(2, i / 12))); }

    const TRACKS = [
        // Pop hits style
        { n: '🎤 Flowers', s: sc(261, [0, 2, 4, 5, 7, 9, 11, 12]), t: 280, w: 'sine' },
        { n: '🎤 Blinding Lights', s: sc(329, [0, 2, 4, 5, 7, 9, 11, 12]), t: 250, w: 'sine' },
        { n: '🎤 As It Was', s: sc(293, [0, 2, 4, 5, 7, 9, 11, 12]), t: 270, w: 'triangle' },
        { n: '🎤 Anti-Hero', s: sc(349, [0, 2, 3, 5, 7, 8, 10, 12]), t: 260, w: 'sine' },
        { n: '🎤 Calm Down', s: sc(392, [0, 2, 4, 5, 7, 9, 11, 12]), t: 240, w: 'sine' },
        { n: '🎤 Cruel Summer', s: sc(277, [0, 2, 4, 5, 7, 9, 11, 12]), t: 255, w: 'sine' },
        { n: '🎤 Vampire', s: sc(311, [0, 2, 3, 5, 7, 8, 10, 12]), t: 290, w: 'sine' },
        { n: '🎤 Paint The Town Red', s: sc(370, [0, 2, 4, 5, 7, 9, 11, 12]), t: 245, w: 'sine' },
        { n: '🎤 Espresso', s: sc(415, [0, 2, 4, 5, 7, 9, 11, 12]), t: 235, w: 'triangle' },
        { n: '🎤 Greedy', s: sc(440, [0, 2, 3, 5, 7, 8, 10, 12]), t: 250, w: 'sine' },
        // K-Pop style
        { n: '🇰🇷 K-Pop Dance', s: sc(392, [0, 3, 5, 7, 10, 12, 15, 17]), t: 220, w: 'sine' },
        { n: '🇰🇷 Seoul Nights', s: sc(440, [0, 2, 4, 7, 9, 12, 14, 16]), t: 230, w: 'triangle' },
        { n: '🇰🇷 Cherry Blossom', s: sc(329, [0, 2, 4, 5, 7, 9, 11, 12]), t: 300, w: 'sine' },
        { n: '🇰🇷 Bubble Pop', s: sc(349, [0, 2, 4, 5, 7, 9, 11, 12]), t: 210, w: 'sine' },
        { n: '🇰🇷 Starlight', s: sc(293, [0, 2, 3, 5, 7, 8, 10, 12]), t: 280, w: 'sine' },
        { n: '🇰🇷 Neon City', s: sc(370, [0, 3, 5, 7, 10, 12, 15, 17]), t: 225, w: 'sine' },
        { n: '🇰🇷 Cotton Candy', s: sc(311, [0, 2, 4, 5, 7, 9, 11, 12]), t: 240, w: 'triangle' },
        { n: '🇰🇷 Moonlight', s: sc(261, [0, 2, 3, 7, 9, 12, 14, 15]), t: 310, w: 'sine' },
        { n: '🇰🇷 Sugar Rush', s: sc(415, [0, 2, 4, 5, 7, 9, 11, 12]), t: 215, w: 'sine' },
        { n: '🇰🇷 Dreamy', s: sc(277, [0, 2, 4, 7, 9, 12, 14, 16]), t: 320, w: 'triangle' },
        // Piano Classical
        { n: '🎹 Für Elise', s: sc(329, [0, 1, 0, -1, 0, -5, -3, -1, 0, 2, 4, 5]), t: 350, w: 'sine' },
        { n: '🎹 Moonlight Sonata', s: sc(277, [0, 3, 7, 12, 15, 19, 12, 7]), t: 380, w: 'sine' },
        { n: '🎹 River Flows', s: sc(261, [0, 4, 7, 12, 16, 19, 12, 4]), t: 360, w: 'sine' },
        { n: '🎹 Canon in D', s: sc(293, [0, 7, 4, 0, 5, 2, 5, 7]), t: 330, w: 'sine' },
        { n: '🎹 Clair de Lune', s: sc(349, [0, 4, 7, 11, 12, 16, 19, 24]), t: 400, w: 'sine' },
        { n: '🎹 Comptine', s: sc(329, [0, 2, 4, 7, 9, 12, 14, 16]), t: 320, w: 'triangle' },
        { n: '🎹 Turkish March', s: sc(440, [0, 1, 2, 4, 5, 7, 9, 11]), t: 240, w: 'sine' },
        { n: '🎹 Spring Waltz', s: sc(392, [0, 4, 7, 12, 11, 7, 4, 0]), t: 350, w: 'sine' },
        { n: '🎹 Ballade No.1', s: sc(370, [0, 3, 7, 10, 12, 15, 19, 22]), t: 370, w: 'sine' },
        { n: '🎹 Nocturne Op.9', s: sc(311, [0, 4, 7, 12, 16, 19, 24, 28]), t: 390, w: 'sine' },
        // Vietnamese lullaby
        { n: '🇻🇳 Cháu Yêu Bà', s: sc(261, [0, 2, 4, 5, 7, 9, 11, 12]), t: 320, w: 'sine' },
        { n: '🇻🇳 Bống Bống', s: sc(293, [0, 2, 5, 7, 9, 12, 14, 17]), t: 280, w: 'sine' },
        { n: '🇻🇳 Con Cò Bé', s: sc(329, [0, 2, 4, 5, 7, 9, 11, 12]), t: 340, w: 'triangle' },
        { n: '🇻🇳 Trống Cơm', s: sc(349, [0, 2, 5, 7, 9, 12, 14, 17]), t: 260, w: 'sine' },
        { n: '🇻🇳 Lý Cây Bông', s: sc(392, [0, 2, 4, 5, 7, 9, 11, 12]), t: 270, w: 'sine' },
        { n: '🇻🇳 Rước Đèn', s: sc(261, [0, 2, 4, 7, 9, 12, 14, 16]), t: 250, w: 'sine' },
        { n: '🇻🇳 Em Yêu Trường', s: sc(277, [0, 2, 4, 5, 7, 9, 11, 12]), t: 290, w: 'sine' },
        { n: '🇻🇳 Cả Nhà Thương', s: sc(311, [0, 2, 5, 7, 9, 12, 14, 17]), t: 300, w: 'triangle' },
        { n: '🇻🇳 Vườn Cây', s: sc(349, [0, 2, 4, 5, 7, 9, 11, 12]), t: 310, w: 'sine' },
        { n: '🇻🇳 Hoa Bé Ngoan', s: sc(370, [0, 2, 4, 7, 9, 12, 14, 16]), t: 330, w: 'sine' },
        // Anime / Ghibli
        { n: '🎌 Totoro Walk', s: sc(349, [0, 2, 4, 5, 7, 9, 11, 12]), t: 300, w: 'sine' },
        { n: '🎌 Spirited Away', s: sc(293, [0, 2, 3, 5, 7, 8, 10, 12]), t: 340, w: 'triangle' },
        { n: '🎌 Howl\'s Theme', s: sc(261, [0, 4, 7, 12, 16, 19, 12, 7]), t: 360, w: 'sine' },
        { n: '🎌 Kiki\'s Delivery', s: sc(329, [0, 2, 4, 5, 7, 9, 11, 12]), t: 280, w: 'sine' },
        { n: '🎌 Ponyo Song', s: sc(392, [0, 2, 4, 5, 7, 9, 11, 12]), t: 250, w: 'sine' },
        { n: '🎌 Princess Melody', s: sc(370, [0, 2, 4, 7, 9, 12, 14, 16]), t: 320, w: 'sine' },
        { n: '🎌 Wind Valley', s: sc(311, [0, 2, 3, 7, 9, 12, 14, 15]), t: 350, w: 'triangle' },
        { n: '🎌 Castle Sky', s: sc(277, [0, 2, 4, 5, 7, 9, 11, 12]), t: 330, w: 'sine' },
        { n: '🎌 Firefly Night', s: sc(415, [0, 2, 3, 5, 7, 8, 10, 12]), t: 370, w: 'sine' },
        { n: '🎌 Ocean Breeze', s: sc(349, [0, 4, 7, 11, 12, 16, 19, 24]), t: 380, w: 'sine' },
        // Disney style
        { n: '🏰 Let It Go', s: sc(329, [0, 2, 4, 5, 7, 9, 11, 12]), t: 270, w: 'sine' },
        { n: '🏰 A Whole New World', s: sc(349, [0, 4, 7, 12, 16, 19, 12, 7]), t: 320, w: 'sine' },
        { n: '🏰 Under The Sea', s: sc(392, [0, 2, 4, 5, 7, 9, 11, 12]), t: 230, w: 'triangle' },
        { n: '🏰 Beauty & Beast', s: sc(293, [0, 2, 4, 7, 9, 12, 14, 16]), t: 350, w: 'sine' },
        { n: '🏰 Colors of Wind', s: sc(261, [0, 2, 4, 5, 7, 9, 11, 12]), t: 310, w: 'sine' },
        { n: '🏰 Into Unknown', s: sc(277, [0, 2, 3, 5, 7, 8, 10, 12]), t: 275, w: 'sine' },
        { n: '🏰 How Far I\'ll Go', s: sc(311, [0, 2, 4, 5, 7, 9, 11, 12]), t: 260, w: 'sine' },
        { n: '🏰 Remember Me', s: sc(370, [0, 2, 4, 7, 9, 12, 14, 16]), t: 340, w: 'triangle' },
        { n: '🏰 Hakuna Matata', s: sc(415, [0, 2, 4, 5, 7, 9, 11, 12]), t: 235, w: 'sine' },
        { n: '🏰 Circle of Life', s: sc(349, [0, 2, 3, 5, 7, 9, 10, 12]), t: 290, w: 'sine' },
        // Lo-fi chill
        { n: '☁️ Rainy Café', s: sc(261, [0, 2, 4, 7, 9, 12, 14, 16]), t: 380, w: 'sine' },
        { n: '☁️ Study Beats', s: sc(277, [0, 3, 5, 7, 10, 12, 15, 17]), t: 370, w: 'triangle' },
        { n: '☁️ Midnight Rain', s: sc(293, [0, 2, 3, 7, 9, 12, 14, 15]), t: 400, w: 'sine' },
        { n: '☁️ Cozy Blanket', s: sc(311, [0, 4, 7, 12, 16, 19, 12, 7]), t: 390, w: 'sine' },
        { n: '☁️ Soft Clouds', s: sc(329, [0, 2, 4, 7, 9, 12, 14, 16]), t: 360, w: 'sine' },
        { n: '☁️ Dream Walk', s: sc(349, [0, 2, 3, 5, 7, 8, 10, 12]), t: 350, w: 'triangle' },
        { n: '☁️ Sunset Glow', s: sc(370, [0, 4, 7, 11, 12, 16, 19, 24]), t: 380, w: 'sine' },
        { n: '☁️ Morning Dew', s: sc(261, [0, 2, 4, 5, 7, 9, 11, 12]), t: 340, w: 'sine' },
        { n: '☁️ Paper Crane', s: sc(392, [0, 2, 3, 7, 9, 12, 14, 15]), t: 370, w: 'sine' },
        { n: '☁️ Starlight Mix', s: sc(415, [0, 2, 4, 7, 9, 12, 14, 16]), t: 360, w: 'triangle' },
        // Latin / Tropical
        { n: '🌴 Tropical Vibes', s: sc(392, [0, 2, 4, 5, 7, 9, 11, 12]), t: 230, w: 'sine' },
        { n: '🌴 Salsa Baby', s: sc(440, [0, 3, 5, 7, 10, 12, 15, 17]), t: 210, w: 'sine' },
        { n: '🌴 Reggaeton Beat', s: sc(349, [0, 2, 3, 5, 7, 8, 10, 12]), t: 225, w: 'triangle' },
        { n: '🌴 Samba Sun', s: sc(370, [0, 2, 4, 5, 7, 9, 11, 12]), t: 220, w: 'sine' },
        { n: '🌴 Havana Night', s: sc(293, [0, 3, 5, 7, 10, 12, 15, 17]), t: 240, w: 'sine' },
        { n: '🌴 Beach Party', s: sc(329, [0, 2, 4, 5, 7, 9, 11, 12]), t: 215, w: 'sine' },
        { n: '🌴 Coconut Beat', s: sc(311, [0, 2, 3, 5, 7, 8, 10, 12]), t: 235, w: 'triangle' },
        { n: '🌴 Caribbean', s: sc(261, [0, 2, 4, 5, 7, 9, 11, 12]), t: 245, w: 'sine' },
        { n: '🌴 Fiesta', s: sc(415, [0, 3, 5, 7, 10, 12, 15, 17]), t: 205, w: 'sine' },
        { n: '🌴 Island Song', s: sc(277, [0, 2, 4, 7, 9, 12, 14, 16]), t: 250, w: 'sine' },
        // R&B / Soul
        { n: '💜 Velvet', s: sc(261, [0, 3, 5, 7, 10, 12, 15, 17]), t: 310, w: 'sine' },
        { n: '💜 Silk Route', s: sc(293, [0, 2, 3, 5, 7, 9, 10, 12]), t: 320, w: 'triangle' },
        { n: '💜 Midnight Soul', s: sc(277, [0, 3, 5, 7, 10, 12, 15, 17]), t: 330, w: 'sine' },
        { n: '💜 Golden Hour', s: sc(329, [0, 2, 4, 5, 7, 9, 11, 12]), t: 300, w: 'sine' },
        { n: '💜 Purple Rain', s: sc(311, [0, 2, 3, 7, 9, 12, 14, 15]), t: 340, w: 'sine' },
        { n: '💜 Satin Dream', s: sc(349, [0, 3, 5, 7, 10, 12, 15, 17]), t: 350, w: 'triangle' },
        { n: '💜 Honey Glow', s: sc(370, [0, 2, 4, 5, 7, 9, 11, 12]), t: 290, w: 'sine' },
        { n: '💜 Jazz Breeze', s: sc(392, [0, 3, 5, 7, 10, 12, 15, 17]), t: 300, w: 'sine' },
        { n: '💜 Blue Moon', s: sc(415, [0, 2, 3, 5, 7, 8, 10, 12]), t: 360, w: 'sine' },
        { n: '💜 Crystal Night', s: sc(440, [0, 4, 7, 12, 16, 19, 12, 7]), t: 370, w: 'triangle' },
        // EDM / Electronic  
        { n: '⚡ Neon Pulse', s: sc(329, [0, 3, 5, 7, 10, 12, 15, 17]), t: 200, w: 'sine' },
        { n: '⚡ Digital Rain', s: sc(392, [0, 2, 4, 7, 9, 12, 14, 16]), t: 195, w: 'sine' },
        { n: '⚡ Cyber Groove', s: sc(440, [0, 3, 5, 7, 10, 12, 15, 17]), t: 190, w: 'triangle' },
        { n: '⚡ Pixel Beat', s: sc(349, [0, 2, 4, 5, 7, 9, 11, 12]), t: 205, w: 'sine' },
        { n: '⚡ Laser Light', s: sc(261, [0, 3, 7, 12, 15, 19, 24, 27]), t: 210, w: 'sine' },
        { n: '⚡ Synth Wave', s: sc(293, [0, 2, 3, 5, 7, 8, 10, 12]), t: 215, w: 'sine' },
        { n: '⚡ Bass Drop', s: sc(277, [0, 3, 5, 7, 10, 12, 15, 17]), t: 185, w: 'triangle' },
        { n: '⚡ Glitch Hop', s: sc(311, [0, 2, 4, 7, 9, 12, 14, 16]), t: 200, w: 'sine' },
        { n: '⚡ Future Bass', s: sc(370, [0, 3, 5, 7, 10, 12, 15, 17]), t: 195, w: 'sine' },
        { n: '⚡ Trance Dream', s: sc(415, [0, 2, 4, 5, 7, 9, 11, 12]), t: 220, w: 'sine' },
    ];

    function init() { currentTrack = Math.floor(Math.random() * TRACKS.length); }

    function ensureCtx() {
        if (!ctx) { ctx = new (window.AudioContext || window.webkitAudioContext)(); masterGain = ctx.createGain(); masterGain.gain.value = 0.12; masterGain.connect(ctx.destination); }
        if (ctx.state === 'suspended') ctx.resume();
    }

    function playNote(freq, time, dur, type = 'sine', vol = 0.5) {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = type; o.frequency.value = freq;
        g.gain.setValueAtTime(0, time); g.gain.linearRampToValueAtTime(vol, time + 0.05);
        g.gain.setValueAtTime(vol * 0.7, time + dur * 0.6); g.gain.linearRampToValueAtTime(0, time + dur);
        o.connect(g); g.connect(masterGain); o.start(time); o.stop(time + dur + 0.02);
    }

    function generateMelody() {
        if (!isPlaying || !ctx) return;
        const t = TRACKS[currentTrack], s = t.s, now = ctx.currentTime;
        if (!s || !s.length) { melodyTimer = setTimeout(generateMelody, 500); return; }
        for (let i = 0; i < 8; i++) {
            const note = s[Math.floor(Math.random() * s.length)];
            const tm = now + (i * t.t / 1000), dur = t.t / 1000 * 0.8;
            playNote(note, tm, dur, t.w || 'sine', 0.35);
            if (Math.random() > 0.6) playNote(note * 1.5, tm, dur * 0.6, 'triangle', 0.12);
        }
        const bassRoot = s[0] / 2;
        const bassFifth = s[Math.min(4, s.length - 1)] / 2;
        playNote(bassRoot, now, t.t * 4 / 1000, 'triangle', 0.2);
        playNote(bassFifth, now + t.t * 4 / 1000, t.t * 4 / 1000, 'triangle', 0.15);
        melodyTimer = setTimeout(generateMelody, t.t * 8);
    }

    function play() { ensureCtx(); isPlaying = true; generateMelody(); updateUI(); }
    function pause() { isPlaying = false; clearTimeout(melodyTimer); updateUI(); }
    function toggle() { if (isPlaying) pause(); else play(); }
    function nextTrack() { const w = isPlaying; pause(); currentTrack = (currentTrack + 1) % TRACKS.length; if (w) setTimeout(play, 100); updateUI(); }
    function prevTrack() { const w = isPlaying; pause(); currentTrack = (currentTrack - 1 + TRACKS.length) % TRACKS.length; if (w) setTimeout(play, 100); updateUI(); }
    function reshufflePlaylist() { const w = isPlaying; pause(); currentTrack = Math.floor(Math.random() * TRACKS.length); if (w) setTimeout(play, 100); updateUI(); }

    function updateUI() {
        const el = id => document.getElementById(id);
        if (el('track-title')) el('track-title').textContent = TRACKS[currentTrack].n;
        if (el('track-info')) el('track-info').textContent = `${currentTrack + 1}/${TRACKS.length}`;
        if (el('musicPlayBtn')) el('musicPlayBtn').textContent = isPlaying ? '⏸️' : '▶️';
    }

    return { init, play, pause, toggle, nextTrack, prevTrack, reshufflePlaylist, get isPlaying() { return isPlaying; } };
})();
