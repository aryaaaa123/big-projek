const mymusic = document.getElementById("mymusic");
const icon = document.getElementById("icon");
const icon2 = document.getElementById("icon2");
const judul = document.getElementById("judul");
const penyanyi = document.getElementById("penyanyi");
const album = document.getElementById("album");
const lanjut = document.getElementById("lanjut");
const balik = document.getElementById("balik");
let durasi = document.getElementById("durasi");
let current = document.getElementById("current");
let curent_time = document.getElementById("curent_time");
let volumeslider = document.getElementById("volumeslider");
var seekslider = document.getElementById("seekslider");
var geser;
var autoplay = 1;

icon.onclick = function () {
    if (mymusic.paused) {
        mymusic.play();
        icon.src = "pause.png"
    } else {
        mymusic.pause();
        icon.src = "play.png"
    }
};
icon2.onclick = function () {
    if (mymusic.muted) {
        mymusic.muted = false;
        icon2.src = "sound.png"
    } else {
        mymusic.muted = true;
        icon2.src = "mute.png"
    }
};


const music = [
    {
        mymusic: 'pendengarsetiamu',
        fotoalbum:'hal',
        judul: 'Pendengar Setiamu',
        penyanyi: 'Hal',
        album: 'Prespektif',
    },
    {
        mymusic: 'seninpagi',
        fotoalbum:'hal',
        judul: 'Senin Pagi Di Bulan Juli',
        penyanyi: 'Hal',
        album: 'Prespektif',
    },
    {
        mymusic: 'l',
        fotoalbum:'hal',
        judul: 'L',
        penyanyi: 'Hal',
        album: 'Prespektif',
    },
    {
        mymusic: 'terimakasih',
        fotoalbum:'hal',
        judul: 'Terima Kasih',
        penyanyi: 'Hal',
        album: 'Prespektif',
    },
    {
        mymusic: 'dimejakopian',
        fotoalbum:'hal',
        judul: 'Di Meja Kopian',
        penyanyi: 'Hal',
        album: 'Prespektif',
    },
];

const loadmusic = (music) => {
    judul.textContent = music.judul;
    fotoalbum.src = music.fotoalbum + ".jpg";
    penyanyi.textContent = music.penyanyi;
    album.textContent = music.album;
    mymusic.src = "music/" + music.mymusic + ".mp3";
    timer = setInterval(setseekslider, 1000);
};

musicindex = 0;

const nextmusic = () => {
    musicindex = (musicindex + 1) % music.length;
    loadmusic(music[musicindex]);
    if (mymusic.paused) {
        mymusic.play();
        icon.src = "pause.png"
    } else {
        mymusic.pause();
        icon.src = "play.png"
    }
};
const prevmusic = () => {
    musicindex = (musicindex - 1) % music.length;
    loadmusic(music[musicindex]);
    if (mymusic.paused) {
        mymusic.play();
        icon.src = "pause.png"
    } else {
        mymusic.pause();
        icon.src = "play.png"
    }
};

seekslider.addEventListener('mousedown', function (e) {
    geser = true;
    setposisimusic(e);
});
seekslider.addEventListener('mousemove', function (e) {
    setposisimusic(e);

});
seekslider.addEventListener('mouseup', function () {
    geser = false;
});

function setposisimusic() {
    if (geser) {
        var posisimusic = mymusic.duration * (seekslider.value / 100);
        mymusic.currentTime = posisimusic;
    }
}
function setseekslider() {
    let position = 0;
    if (!isNaN(mymusic.duration)) {
        position = mymusic.currentTime * (100 / mymusic.duration);
        seekslider.value = position;
    }
}



function setvolume() {
    mymusic.volume = volumeslider.value / 100;
}

mymusic.addEventListener('timeupdate', function () {
    var waktubaru = mymusic.currentTime * (100 / mymusic.duration);
    seekslider.value = waktubaru;

    //saat vidio selesai
    if (mymusic.ended) {
        icon.src = "play.png";
        if (autoplay == 1) {
           musicindex += 1;
            loadmusic(music[musicindex]);
        }
    };

    var menitsekarang = Math.floor(mymusic.currentTime / 60);
    var detiksekarang = Math.floor(mymusic.currentTime - menitsekarang * 60);
    var menitdurasi = Math.floor(mymusic.duration / 60);
    var detikdurasi = Math.floor(mymusic.duration - menitdurasi * 60)
    curent_time.innerHTML = menitsekarang + ":" + detiksekarang;
    duration1.innerHTML = menitdurasi + ":" + detikdurasi;

})
next.addEventListener("click", nextmusic);
prev.addEventListener("click", prevmusic);
volumeslider.addEventListener('mousemove', setvolume);
seekslider.addEventListener('mousemove', setseekslider);

myvidio