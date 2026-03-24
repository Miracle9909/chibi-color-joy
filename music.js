/* ============================================ */
/* 🎵 Chibi Color Joy — Music System v3           */
/* 5 bài nhạc thiếu nhi vui nhộn                 */
/* Background playback on ALL devices            */
/* ============================================ */

const MusicPlayer = (() => {
    let ctx = null, masterGain = null, isPlaying = false, melodyTimer = null, currentTrack = 0;

    const N = {
        C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
        C5: 523.25, D5: 587.33, E5: 659.26, F5: 698.46, G5: 783.99, A5: 880.00,
        C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94
    };

    const TRACKS = [
        {
            n: '🎵 Một Con Vịt',
            m: [N.C4, N.E4, N.G4, N.C5, N.G4, N.E4, N.C4, N.D4,
            N.E4, N.F4, N.G4, N.A4, N.G4, N.F4, N.E4, N.D4,
            N.C4, N.C4, N.E4, N.E4, N.G4, N.G4, N.C5, N.C5,
            N.A4, N.G4, N.F4, N.E4, N.D4, N.E4, N.C4, N.C4],
            b: [N.C3, N.G3, N.C3, N.G3, N.F3, N.C3, N.G3, N.C3],
            t: 260, w: 'sine'
        },
        {
            n: '🐥 Con Gà Trống',
            m: [N.G4, N.G4, N.A4, N.A4, N.G4, N.G4, N.E4, N.E4,
            N.F4, N.F4, N.E4, N.E4, N.D4, N.D4, N.C4, N.C4,
            N.E4, N.E4, N.F4, N.F4, N.G4, N.G4, N.A4, N.A4,
            N.G4, N.F4, N.E4, N.D4, N.C4, N.E4, N.G4, N.C5],
            b: [N.C3, N.E3, N.G3, N.C3, N.F3, N.A3, N.G3, N.C3],
            t: 240, w: 'sine'
        },
        {
            n: '🌟 Twinkle Twinkle',
            m: [N.C4, N.C4, N.G4, N.G4, N.A4, N.A4, N.G4, N.G4,
            N.F4, N.F4, N.E4, N.E4, N.D4, N.D4, N.C4, N.C4,
            N.G4, N.G4, N.F4, N.F4, N.E4, N.E4, N.D4, N.D4,
            N.G4, N.G4, N.F4, N.F4, N.E4, N.E4, N.D4, N.D4],
            b: [N.C3, N.C3, N.F3, N.C3, N.F3, N.C3, N.G3, N.C3],
            t: 320, w: 'sine'
        },
        {
            n: '🐸 Chú Ếch Con',
            m: [N.C4, N.D4, N.E4, N.F4, N.G4, N.G4, N.G4, N.G4,
            N.A4, N.A4, N.G4, N.G4, N.F4, N.F4, N.E4, N.E4,
            N.D4, N.D4, N.C4, N.C4, N.E4, N.G4, N.C5, N.C5,
            N.G4, N.E4, N.C4, N.D4, N.E4, N.F4, N.G4, N.C4],
            b: [N.C3, N.G3, N.A3, N.E3, N.F3, N.C3, N.G3, N.C3],
            t: 230, w: 'sine'
        },
        {
            n: '🎪 Nhong Nhong Nhong',
            m: [N.E4, N.G4, N.C5, N.C5, N.A4, N.G4, N.E4, N.G4,
            N.A4, N.G4, N.F4, N.E4, N.D4, N.E4, N.F4, N.D4,
            N.E4, N.G4, N.C5, N.C5, N.D5, N.C5, N.A4, N.G4,
            N.F4, N.E4, N.D4, N.C4, N.D4, N.E4, N.C4, N.C4],
            b: [N.C3, N.E3, N.F3, N.G3, N.C3, N.A3, N.G3, N.C3],
            t: 220, w: 'sine'
        }
    ];

    let phraseIndex = 0;

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
        const track = TRACKS[currentTrack];
        const mel = track.m;
        const bas = track.b;
        const now = ctx.currentTime;
        const noteDur = track.t / 1000;

        for (let i = 0; i < 8; i++) {
            const noteIdx = (phraseIndex * 8 + i) % mel.length;
            const freq = mel[noteIdx];
            const tm = now + i * noteDur;
            const dur = noteDur * 0.8;
            playNote(freq, tm, dur, track.w || 'sine', 0.35);
            if (i % 2 === 0) playNote(freq * 1.5, tm, dur * 0.6, 'triangle', 0.12);
        }

        const bassIdx = (phraseIndex * 2) % bas.length;
        playNote(bas[bassIdx], now, noteDur * 4, 'triangle', 0.2);
        playNote(bas[(bassIdx + 1) % bas.length], now + noteDur * 4, noteDur * 4, 'triangle', 0.15);

        phraseIndex++;
        if (phraseIndex * 8 >= mel.length) phraseIndex = 0;

        melodyTimer = setTimeout(generateMelody, track.t * 8);
    }

    function play() { ensureCtx(); isPlaying = true; phraseIndex = 0; generateMelody(); updateUI(); }
    function pause() { isPlaying = false; clearTimeout(melodyTimer); updateUI(); }
    function toggle() { if (isPlaying) pause(); else play(); }
    function nextTrack() { const w = isPlaying; pause(); currentTrack = (currentTrack + 1) % TRACKS.length; phraseIndex = 0; if (w) setTimeout(play, 100); updateUI(); }
    function prevTrack() { const w = isPlaying; pause(); currentTrack = (currentTrack - 1 + TRACKS.length) % TRACKS.length; phraseIndex = 0; if (w) setTimeout(play, 100); updateUI(); }
    function reshufflePlaylist() { const w = isPlaying; pause(); currentTrack = Math.floor(Math.random() * TRACKS.length); phraseIndex = 0; if (w) setTimeout(play, 100); updateUI(); }

    function updateUI() {
        const el = id => document.getElementById(id);
        if (el('track-title')) el('track-title').textContent = TRACKS[currentTrack].n;
        if (el('track-info')) el('track-info').textContent = `${currentTrack + 1}/${TRACKS.length}`;
        if (el('musicPlayBtn')) el('musicPlayBtn').textContent = isPlaying ? '⏸️' : '▶️';
    }

    return { init, play, pause, toggle, nextTrack, prevTrack, reshufflePlaylist, get isPlaying() { return isPlaying; } };
})();
