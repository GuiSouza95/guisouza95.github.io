// função para aparecer os desejos

const Shenlong = document.querySelector('.Shenlong');
const wishesList = document.querySelector('.wishes-Gui');
const textGoku = document.querySelector('.text-goku');

if (Shenlong){
    Shenlong.onclick =()=>{
        wishesList.classList.remove('d-none');
        wishesList.classList.add('bg-danger');
        textGoku.classList.add('d-none');
    };
}

// fim da função para aparecer os desejos

// função para aparecer os modals após o desejo selecionado

const modalAboutGui= document.querySelector('.modal1');
const wisheAboutGui= document.querySelector('.wishe1');
const modalExperience= document.querySelector('.modal2');
const wisheExperience= document.querySelector('.wishe2');
const modalLenguage= document.querySelector('.modal3');
const wisheLenguage= document.querySelector('.wishe3');
const downCV = document.querySelector('.modal4');
const wisheCV = document.querySelector('.wishe4');
const closeModal= document.querySelector('.closeModal');
const modals = document.querySelector('.modals');


if(wisheAboutGui){
    wisheAboutGui.onclick=()=>{
        modalAboutGui.classList.remove('d-none');
        closeModal.classList.remove('d-none');
        modals.classList.remove('d-none');
    }
};

if(wisheExperience){
    wisheExperience.onclick=()=>{
        modalExperience.classList.remove('d-none');
        closeModal.classList.remove('d-none');
        modals.classList.remove('d-none');
    }
};

if(wisheLenguage){
    wisheLenguage.onclick=()=>{
        modalLenguage.classList.remove('d-none');
        closeModal.classList.remove('d-none');
        modals.classList.remove('d-none');
    }
};

if(wisheCV){
    wisheCV.onclick=()=>{
        downCV.classList.remove('d-none');
        closeModal.classList.remove('d-none');
        modals.classList.remove('d-none');
    }
};

if(closeModal){
    closeModal.onclick=()=>{
        closeModal.classList.add('d-none');
        modalAboutGui.classList.add('d-none');
        modalExperience.classList.add('d-none');
        modalLenguage.classList.add('d-none');
        modals.classList.add('d-none');
    }
}

// fim da função dos modals

// Função das esferas

const sphereDragon = document.querySelectorAll('.starDragon');
const countSphere = document.querySelector('.count');
var count = 0;

if(sphereDragon){
    sphereDragon.forEach((sphere) =>{
        sphere.onclick=()=>{
            audio.pause();
            audioPlaying=false;
            clearTimeout(nextPhraseTimeout);
            
            if(sphere.classList.contains('starDragon1')){
                sphere.style.animation='none';

                sphere.style.transition='all 1s ease-in-out';
                sphere.style.top='70%';
                sphere.style.left='80%';

                sphere.style.pointerEvents='none';
                sphere.style.cursor='default';

                count++;
                countSphere.textContent=count;

            }else{      

                sphere.style.animation='none';

                sphere.style.transition='all 1s ease-in-out';
                sphere.style.top='70%';
                sphere.style.left='80%';
                count++;
                sphere.style.animation=`sphereGather ${1+count}s 1s linear infinite`;

                document.querySelector('.text-goku').innerHTML='Já encontrou <br>' + count + ' esferas';

                countSphere.textContent=count;

                sphere.style.cursor='default';
                sphere.style.pointerEvents='none';
            }

            if(count === 7){
                setTimeout(function(){
                    document.querySelector('.text-goku').textContent='Apareça Shenlong!';
                    document.querySelector('.sphere').classList.add('d-none');
                }, 1000);
                

                setTimeout(function(){
                    Shenlong.classList.remove('d-none');
                    Shenlong.classList.add('appearShenlong');
                    document.querySelector('body').classList.add('bg-black');
                    document.querySelector('.bg-cloud').classList.add('d-none');
                }, 3000);
            }
        }
    })
}

// Fim da função das esferas

// Função da fala do Goku

const frases= [
    {inicio: 0, fim: 2, elemento: document.querySelector('.frase1')},
    {inicio: 2, fim: 7, elemento: document.querySelector('.frase2')},
    {inicio: 7, fim: 12, elemento: document.querySelector('.frase3')},
    {inicio: 12, fim: 19, elemento: document.querySelector('.frase4')},
    {inicio: 19, fim: 22, elemento: document.querySelector('.frase5')},
    {inicio: 22, fim: 28, elemento: document.querySelector('.frase6')},
    {inicio: 28, fim: 35, elemento: document.querySelector('.frase7')}
];

const playAudioGoku = document.querySelector('.Goku-ssj');

const audio = document.getElementById('audio');

let index = 0;

let audioPlaying = false;

function playAudio(inicio,fim){
    if(audioPlaying){
        audio.pause();
        audioPlaying = false;
    }

    audio.currentTime = inicio;
    audio.play()
        .then(()=>{
            audioPlaying = true;
        })
        .catch((error) => {
            console.error('Erro ao tentar reproduzir o áudio:', error);
        });

    setTimeout(function(){
        audio.pause();
        audioPlaying = false;
    }, (fim-inicio)*1000);
}

let nextPhraseTimeout;

function nextPhrase(){
    if(index<frases.length){
        if(index > 0){
            frases[index - 1].elemento.classList.add('d-none');
        }
        frases[index].elemento.classList.remove('d-none');
        playAudio(frases[index].inicio, frases[index].fim);

        let delay = (frases[index].fim - frases[index].inicio)*1100;
        index++;
        nextPhraseTimeout = setTimeout(nextPhrase,delay);
    }
}

window.onload = function(){
    setTimeout(function(){
        playAudio(0,2);
        nextPhrase();
    }, 2000);
}

// Fim da função da fala do Goku

// Função fala do Goku

if(playAudioGoku){
    playAudioGoku.onclick=()=>{
        playAudio(0,2);
    }
}

// Fim da função de trocar falas do Goku