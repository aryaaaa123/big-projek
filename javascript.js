const myvidio = document.getElementById("myvidio");
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
    if (myvidio.paused) {
        myvidio.play();
        icon.src = "pause.png"
    } else {
        myvidio.pause();
        icon.src = "play.png"
    }
};
icon2.onclick = function () {
    if (myvidio.muted) {
        myvidio.muted = false;
        icon2.src = "sound.png"
    } else {
        myvidio.muted = true;
        icon2.src = "mute.png"
    }
};


const vidio = [
    {
        myvidio: 'takterbaca',
        judul: 'Tak Terbaca',
        penyanyi: 'Juicy Lucy',
        album: '(Sentimental)',
    },
    {
        myvidio: 'juicylucylantas',
        judul: 'Lantas',
        penyanyi: 'Juicy Lucy',
        album: '(Sentimental)',
    },
    {
        myvidio: 'forrevengeserana',
        judul: 'Serana',
        penyanyi: 'For Revenge',
        album: 'Perayaan Patah Hati Babak 1',
    },
    {
        myvidio: 'hindiaevaluasi',
        judul: 'Evaluasi',
        penyanyi: 'Hindia',
        album: 'Menari Dalam Bayangan',
    },
    {
        myvidio: 'forrevengeDerana',
        judul: 'Derana',
        penyanyi: 'For Revenge',
        album: 'Perayaan Patah Hati Babak 1',
    },
    {
        myvidio: 'forrevengejakarta',
        judul: 'Jakarta Hari Ini',
        penyanyi: 'For Revenge',
        album: 'Perayaan Patah Hati Babak 1',
    },
    {
        myvidio: 'hindiamembasuh',
        judul: 'Membasuh',
        penyanyi: 'Hindia',
        album: 'Menari Dalam Bayangan',
    },
    {
        myvidio: 'hindiarumah',
        judul: 'Rumah',
        penyanyi: 'Hindia',
        album: 'Menari Dalam Bayangan',
    },
    {
        myvidio: 'pamungkasoneonly',
        judul: 'One Only',
        penyanyi: 'Pamungkas',
        album: 'Walk The Walk',
    },
    {
        myvidio: 'forrevengejeda',
        judul: 'Jeda',
        penyanyi: 'For Revenge',
        album: 'Perayaan Patah Hati Babak 1',
    },
    {
        myvidio: 'juicylucysayangnya',
        judul: 'Sayangnya',
        penyanyi: 'Juicy Lucy',
        album: 'Sentimental',
    },
    {
        myvidio: 'pamungkassorry',
        judul: 'Sorry',
        penyanyi: 'Pamungkas',
        album: 'Walk The Walk',
    },
    {
        myvidio: 'pamungkasmonolog',
        judul: 'Monolog',
        penyanyi: 'Pamungkas',
        album: 'Walk The Walk',
    },
    {
        myvidio: 'hall',
        judul: 'L',
        penyanyi: 'HAL',
        album: 'Presprektif',
    },
    {
        myvidio: 'halterimakasih',
        judul: 'Terima Kasih',
        penyanyi: 'HAL',
        album: 'Presprektif',
    },
    {
        myvidio: 'forrevengejentaka',
        judul: 'Jentaka',
        penyanyi: 'For Revenge',
        album: 'Perayaan Patah Hati Babak 1',
    },
    {
        myvidio: 'juicylucykembalikesepian',
        judul: 'Kembali Kesepian',
        penyanyi: 'Juicy Lucy',
        album: 'Sentimental',
    },
];

const loadvidio = (vidio) => {
    judul.textContent = vidio.judul;
    penyanyi.textContent = vidio.penyanyi;
    album.textContent = vidio.album;
    myvidio.src = "vidio/" + vidio.myvidio + ".mp4"
    timer = setInterval(setseekslider, 1000);
};

vidioindex = 0;

const nextvidio = () => {
    vidioindex = (vidioindex + 1) % vidio.length;
    loadvidio(vidio[vidioindex]);
    if (myvidio.paused) {
        myvidio.play();
        icon.src = "pause.png"
    } else {
        myvidio.pause();
        icon.src = "play.png"
    }
};

const prevvidio = () => {
    vidioindex = (vidioindex - 1) % vidio.length;
    loadvidio(vidio[vidioindex]);
    if (myvidio.paused) {
        myvidio.play();
        icon.src = "pause.png"
    } else {
        myvidio.pause();
        icon.src = "play.png"
    }
};

seekslider.addEventListener('mousedown', function (e) {
    geser = true;
    setposisividio(e);
});
seekslider.addEventListener('mousemove', function (e) {
    setposisividio(e);

});
seekslider.addEventListener('mouseup', function () {
    geser = false;
});

function setposisividio() {
    if (geser) {
        var posisividio = myvidio.duration * (seekslider.value / 100);
        myvidio.currentTime = posisividio;
    }
}
function setseekslider() {
    let position = 0;
    if (!isNaN(myvidio.duration)) {
        position = myvidio.currentTime * (100 / myvidio.duration);
        seekslider.value = position;
    }
}


function setvolume() {
    myvidio.volume = volumeslider.value / 100;
}

myvidio.addEventListener('timeupdate', function () {
    var waktubaru = myvidio.currentTime * (100 / myvidio.duration);
    seekslider.value = waktubaru;

    
    if (myvidio.ended) {
        icon.src = "pause.png";
        if (autoplay == 1) {
            vidioindex += 1;
            loadvidio(vidio[vidioindex]);
        }
    };

    var menitsekarang = Math.floor(myvidio.currentTime / 60);
    var detiksekarang = Math.floor(myvidio.currentTime - menitsekarang * 60);
    var menitdurasi = Math.floor(myvidio.duration / 60);
    var detikdurasi = Math.floor(myvidio.duration - menitdurasi * 60)
    curent_time.innerHTML = menitsekarang + ":" + detiksekarang;
    duration1.innerHTML = menitdurasi + ":" + detikdurasi;

})



next.addEventListener("click", nextvidio);
prev.addEventListener("click", prevvidio);
volumeslider.addEventListener('mousemove', setvolume);
seekslider.addEventListener('mousemove', setseekslider);
