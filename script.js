const music = document.querySelector('audio');
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const image = document.querySelector('img');
const songTitle = document.querySelector("#song-title");
const artist = document.querySelector("#artist");
const progressContainer = document.querySelector("#progress-container");
const progress = document.querySelector("#progress");
const currentTimeEl = document.querySelector("#current-time");
const durationEl = document.querySelector("#duration");


const song = [
    {
        name: './music/The-Cavemen-Me-You-I-(TrendyBeatz.com).mp3',
        title: "Me You I",
        artist: "The Cavemen",
        image: "./img/The-Cavemen-Roots-Album-Artwork.jpeg"
    },

    {
        name: './music/The-Cavemen-Osondu-(TrendyBeatz.com).mp3',
        title: "Osundu",
        artist: "The Cavemen",
        image: "./img/The-Cavemen-Roots-Album-Artwork.jpeg"

    },

    {
        name: './music/The-Cavemen-Ugo-(TrendyBeatz.com).mp3',
        title: "Ugo",
        artist: "The Cavemen",
        image: "./img/The-Cavemen-Love-and-Highlife-AlbumCover.jpg"
    },

    {
        name: './music/The-Cavemen-Anita-(TrendyBeatz.com).mp3',
        title: "Anita",
        artist: "The Cavemen",
        image: "./img/The-Cavemen-Roots-Album-Artwork.jpeg"
    },

    {
        name: './music/The-Cavemen-Beautiful-Rain-(TrendyBeatz.com).mp3',
        title: "Beautiful Rain",
        artist: "The Cavemen",
        image: "./img/The-Cavemen-Roots-Album-Artwork.jpeg"
    },

    {
        name: './music/The-Cavemen-Bena-(TrendyBeatz.com).mp3',
        title: "Bena",
        artist: "The Cavemen",
        image: "./img/The-Cavemen-Roots-Album-Artwork.jpeg"
    },

    {
        name: './music/The-Cavemen-Brothers-Keeper-(TrendyBeatz.com).mp3',
        title: "Brothers Keeper",
        artist: "The Cavemen",
        image: "./img/The-Cavemen-Love-and-Highlife-AlbumCover.jpg"
    }
    




]

console.log(music)

let isPlaying = false;
function playSong() {
    if(music.paused) {
        music.play()
        playBtn.className = "fas fa-pause main-button"
        playBtn.setAttribute("title", "pause")
    } else {
        music.pause()
        playBtn.className = "fas fa-play main-button"
        playBtn.setAttribute("title", "play")
    }
    
   
    
   

    isPlaying = true;
}

playBtn.addEventListener("click", playSong)

console.log(song[2].title)
console.log(songTitle)
console.log(song[1].image)
function loadSong(song) {
    songTitle.textContent = song.title
    artist.textContent = song.artist
    music.src = `${song.name}`
    image.src = `${song.image}`
}



let songIndex = 0

function prevSong() {
    songIndex--

    if(songIndex < 0) {
        songIndex = song.length - 1
    }
    console.log(songIndex)
    loadSong(song[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++

    if(songIndex > song.length - 1){
        songIndex = 0
    }
    console.log(songIndex)
    loadSong(song[songIndex]);
    playSong();
}
loadSong(song[songIndex]);

function updateProgressBar(e) {
    if(isPlaying) {
        const {duration, currentTime} = e.srcElement;
        
            const progressPercent = (currentTime / duration) * 100;
            progress.style.width = `${progressPercent}%`


            const durationMinutes = Math.floor(duration / 60);
            let durationSeconds = Math.floor(duration % 60);
            if(durationSeconds < 10) {
                durationSeconds = `0${durationSeconds}`;
            }

            if(durationSeconds) {
                durationEl.textContent = `${durationMinutes}:${durationSeconds}`
            }

            
            const currentMinutes = Math.floor(currentTime / 60);
            let currentSeconds = Math.floor(currentTime % 60);
            if(currentSeconds < 10) {
                currentSeconds = `0${currentSeconds}`;
            }

            currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`


            
    }


}

function setProgressBar(setDuration) {
    console.log(setDuration);
    const width = this.clientWidth;
    console.log('width',width)

    const clickX = setDuration.offsetX;
    console.log('clickX', clickX)

    const {duration} = music;
    console.log((clickX / width) * duration);

    music.currentTime = (clickX / width) * duration;
}


prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong)
music.addEventListener('timeupdate', updateProgressBar)
progressContainer.addEventListener('click', setProgressBar)

