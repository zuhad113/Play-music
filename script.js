const songs = [
    { title: "Song 1", file: "anugerah_terindah.mp3" },
    { title: "Song 2", file: "AUD-20250308-WA0041.mp3" }
];

let currentSongIndex = 0;
const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const songTitle = document.getElementById('song-title');

function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playMusic();
}

function loadSong(index) {
    audioSource.src = songs[index].file;
    songTitle.textContent = "Judul Lagu: " + songs[index].title;
    audio.load();
}