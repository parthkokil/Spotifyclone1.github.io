console.log("Welcome To Spotify");
//Initialize The Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songsItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Indrayani Kathi", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Ratta Maar", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Ilahi", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Subhanallah ", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Besabriyan", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Fikar Not", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Jai Jai Shivshankar", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Shankara re shankara", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tera Baap Aya", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "once more-Tera Baap Aya", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
]

songsItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fas-play-circle');
        masterPlay.classList.add('fas-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fas-pause-circle');
        masterPlay.classList.add('fas-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen To Events
audioElement.addEventListener('timeupdate', () => {
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songIemPlay')).forEach((element) => {
        element.classList.remove('fas-pause-circle');
        element.classList.add('fas-play-circle');
    })
}
Array.from(document.getElementsByClassName('songIemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fas-play-circle');
        e.target.classList.add('fas-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fas-play-circle');
        masterPlay.classList.add('fas-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fas-play-circle');
    masterPlay.classList.add('fas-pause-circle');


})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fas-play-circle');
    masterPlay.classList.add('fas-pause-circle');
})