const audio=new Audio();

const songs=[
{title:"Humsafar Saiyaara",artist:"Sachet Tandon and Parampara Tandon",src:"https://files.catbox.moe/wod36g.mp3",cover:"images/saiyaraa.png"},
{title:"Ramba Ho",artist:"Madhubanti Bagchi and Bappi Lahiri",src:"https://files.catbox.moe/kzpmvv.mp3",cover:"images/rambha ho.png"},
{title:"Ishq Jalakar",artist:"Shashwat Das Chowdhury Sachdev,Shahzad Ali,Subhadeep Das Chowdhury,Armaan Khan",src:"https://files.catbox.moe/1v0a7y.mp3",cover:"images/ishq jalankar.png"},
{title:"Fa9La",artist:"Flipperachi",src:"https://files.catbox.moe/7n0e04.mp3",cover:"images/raksaiya.png"}
];

let index=0;

const title=document.getElementById("title");
const artist=document.getElementById("artist");
const cover=document.getElementById("cover");
const progress=document.getElementById("progress");
const duration=document.getElementById("duration");
const playBtn=document.getElementById("play");
const prevBtn=document.getElementById("prev");
const nextBtn=document.getElementById("next");
const volume=document.getElementById("volume");
const cards=document.getElementById("cards");

volume.value=0.5;
audio.volume=0.5;

function loadSong(i){
    let s=songs[i];
    audio.src=s.src;
    title.innerText=s.title;
    artist.innerText=s.artist;
    cover.src=s.cover;
}

loadSong(index);

/* controls */
playBtn.onclick=()=>{
    if(audio.paused){audio.play();playBtn.innerText="⏸";}
    else{audio.pause();playBtn.innerText="▶";}
};

nextBtn.onclick=()=>{index=(index+1)%songs.length;loadSong(index);audio.play();}
prevBtn.onclick=()=>{index=(index-1+songs.length)%songs.length;loadSong(index);audio.play();}
audio.onended=()=>nextBtn.onclick();

/* progress */
audio.ontimeupdate=()=>progress.value=(audio.currentTime/audio.duration)*100||0;
progress.oninput=()=>audio.currentTime=(progress.value/100)*audio.duration;
volume.oninput=()=>audio.volume=volume.value;

/* duration */
audio.onloadedmetadata=()=>duration.innerText=format(audio.duration);
function format(s){let m=Math.floor(s/60),sec=Math.floor(s%60);if(sec<10)sec="0"+sec;return m+":"+sec;}

/* CREATE SONG CARDS */
songs.forEach((song,i)=>{
    const card=document.createElement("div");
    card.className="songCard";

    card.innerHTML=`
        <img src="${song.cover}">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
    `;

    card.onclick=()=>{
        index=i;
        loadSong(i);
        audio.play();
        playBtn.innerText="⏸";
    };

    cards.appendChild(card);
});
