console.log("Welcome to iMusic");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let song1Element = new Audio('song/2.mp3');
let song2Element = new Audio('song/3.mp3');
let song3Element = new Audio('song/4.mp3');
let song4Element = new Audio('song/5.mp3');
let song5Element = new Audio('song/6.mp3');
let song6Element = new Audio('song/7.mp3');
let song7Element = new Audio('song/8.mp3');
let song8Element = new Audio('song/9.mp3');
let song9Element = new Audio('song/10.mp3');
let song10Element = new Audio('song/1.mp3');
let song11lement = new Audio('song/12.mp3');
let song12Element = new Audio('song/13.mp3');
let song13Element = new Audio('song/14.mp3');
let song14Element = new Audio('song/15.mp3');
let song15Element = new Audio('song/16.mp3');
let song16Element = new Audio('song/17.mp3');
let song17Element = new Audio('song/18.mp3');
let song18Element = new Audio('song/19.mp3');
let song19Element = new Audio('song/20.mp3');
let song20Element = new Audio('song/21.mp3');
let song21Element = new Audio('song/22.mp3');
let song22Element = new Audio('song/23.mp3');
let song23Element = new Audio('song/24.mp3');
let song24Element = new Audio('song/25.mp3');
let song25Element = new Audio('song/26.mp3');
let song26Element = new Audio('song/27.mp3');
let song27Element = new Audio('song/28.mp3');
let song28Element = new Audio('song/29.mp3');
let song29Element = new Audio('song/30.mp3');
let song30Element = new Audio('song/31.mp3');
let song31Element = new Audio('song/32.mp3');
let song32Element = new Audio('song/33.mp3');
let song33Element = new Audio('song/34.mp3');
let song34Element = new Audio('song/35.mp3');
let song35Element = new Audio('song/36.mp3');
let song36Element = new Audio('song/37.mp3');
let song37Element = new Audio('song/38.mp3');
let song38Element = new Audio('song/39.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song = [
    { songName: "Bachpan Ka Pyaar", filePath: "song/1.mp3", coverPath: "cover/bachpan.jpg" },
    { songName: "Badtameez Dil", filePath: "song/2.mp3", coverPath: "cover/badtameez.jpg" },
    { songName: "Chatak Matak", filePath: "song/3.mp3", coverPath: "cover/chatak.jpg" },
    { songName: "Chaudhary", filePath: "song/4.mp3", coverPath: "cover/chaudhary.jpg" },
    { songName: "Dilbaro", filePath: "song/5.mp3", coverPath: "cover/dilbaro.jpg" },
    { songName: "Maine Payal Hai Chankai", filePath: "song/6.mp3", coverPath: "cover/payal.jpg" },
    { songName: "Raatan Lambiyan", filePath: "song/7.mp3", coverPath: "cover/raat.jpg" },
    { songName: "Coco Cola", filePath: "song/8.mp3", coverPath: "cover/cola.jpg" },
    { songName: "52 Gaj Ka Daman", filePath: "song/9.mp3", coverPath: "cover/52.jpg" },
    { songName: "Haye Re Meri Motto", filePath: "song/10.mp3", coverPath: "cover/moto.jpg" },
    { songName: "Ghoonghru Tut Jayega", filePath: "song/11.mp3", coverPath: "cover/tut.jpg" },
    { songName: "Taagdi", filePath: "song/12.mp3", coverPath: "cover/taagdi.jpg" },
    { songName: "Bahu Kale Ki", filePath: "song/13.mp3", coverPath: "cover/bahu.jpg" },
    { songName: "Teri Aakhya Ka Yo Kaajal", filePath: "song/14.mp3", coverPath: "cover/kajal.jpg" },
    { songName: "Solid Body", filePath: "song/15.mp3", coverPath: "cover/solid.jpg" },
    { songName: "Oh Ho Ho Ho", filePath: "song/16.mp3", coverPath: "cover/oh.jpg" },
    { songName: "Lehenga", filePath: "song/17.mp3", coverPath: "cover/lehenga.jpg" },
    { songName: "Bum Bum Bole", filePath: "song/18.mp3", coverPath: "cover/bum.jpg" },
    { songName: "Yaad Piya Ki Aane Lagi", filePath: "song/19.mp3", coverPath: "cover/yaad.jpg" },
    { songName: "Kaun Tujhe", filePath: "song/20.mp3", coverPath: "cover/kaun.jpg" },
    { songName: "Param Sundari", filePath: "song/21.mp3", coverPath: "cover/param.jpg" },
    { songName: "Saki Saki", filePath: "song/22.mp3", coverPath: "cover/saki.jpg" },
    { songName: "Chittiyaan Kalayian", filePath: "song/23.mp3", coverPath: "cover/chit.jpg" },
    { songName: "Apna Time Aayega", filePath: "song/24.mp3", coverPath: "cover/time.jpg" },
    { songName: "Dilbar", filePath: "song/25.mp3", coverPath: "cover/dil.jpg" },
    { songName: "Luv Letter", filePath: "song/26.mp3", coverPath: "cover/luv.jpg" },
    { songName: "Illegel Weapon 2.0", filePath: "song/27.mp3", coverPath: "cover/2.0.jpg" },
    { songName: "Nachdene Saare", filePath: "song/28.mp3", coverPath: "cover/nach.jpg" },
    { songName: "Morni Banke", filePath: "song/29.mp3", coverPath: "cover/mor.jpg" },
    { songName: "Baarish Ki Jaaye", filePath: "song/30.mp3", coverPath: "cover/baarish.jpg" },
    { songName: "Maa - Puranviram", filePath: "song/31.mp3", coverPath: "cover/maa.jpg" },
    { songName: "Baarish Ban Jaana", filePath: "song/32.mp3", coverPath: "cover/baarish2.jpg" },
    { songName: "Khairiyat Pucho", filePath: "song/33.mp3", coverPath: "cover/puch.jpg" },
    { songName: "Bewafa Tera Masoom Chehra", filePath: "song/34.mp3", coverPath: "cover/bewafa.jpg" },
    { songName: "Tauba Tauba", filePath: "song/35.mp3", coverPath: "cover/tauba.jpg" },
    { songName: "Breakup Song", filePath: "song/36.mp3", coverPath: "cover/song.jpg" },
    { songName: "Gallan Goodiyan", filePath: "song/37.mp3", coverPath: "cover/gallan.jpg" },
    { songName: "Kala Chashma", filePath: "song/38.mp3", coverPath: "cover/kala.jpg" },
    { songName: "Abhi Toh Party Shuru Hui Hai", filePath: "song/39.mp3", coverPath: "cover/party.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
    // Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})