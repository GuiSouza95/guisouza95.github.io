// função para aparecer os desejos

const Shenlong = document.querySelector('.Shenlong');
const wishesList = document.querySelector('.wishes-Gui');

if (Shenlong){
    Shenlong.onclick =()=>{
        wishesList.classList.remove('d-none');
        wishesList.classList.add('bg-danger');
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

                countSphere.textContent=count;

                sphere.style.cursor='default';
                sphere.style.pointerEvents='none';
            }

            if(count === 7){
                setTimeout(function(){
                    document.querySelector('.text-goku').textContent='Apareça Shenlong!';
                }, 1000);
                

                setTimeout(function(){
                    document.querySelector('.Shenlong').classList.remove('d-none');
                    document.querySelector('body').classList.add('bg-black');
                    document.querySelector('.bg-cloud').classList.add('d-none');
                }, 3000);
            }
        }
    })
}

// Fim da função das esferas

// Função da fala do Goku

const frase1 = document.querySelector('.frase1');
const frase2 = document.querySelector('.frase2');
const frase3 = document.querySelector('.frase3');
const frase4 = document.querySelector('.frase4');
const frase5 = document.querySelector('.frase5');
const frase6 = document.querySelector('.frase6');
const frase7 = document.querySelector('.frase7');

const playAudioGoku = document.querySelector('.Goku-ssj');

const audio = document.getElementById('audio');

let countFrase = 1;

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

function nextPhrase(){
    countFrase++;

    if(countFrase === 2){
        playAudio(2,7);
        frase1.classList.add('d-none');
        frase2.classList.remove('d-none');
    }else if(countFrase === 3){
        playAudio(7,12);
        frase2.classList.add('d-none');
        frase3.classList.remove('d-none');
    }else if(countFrase === 4){
        playAudio(12,19);
        frase3.classList.add('d-none');
        frase4.classList.remove('d-none');
    }else if(countFrase === 5){
        playAudio(19,22);
        frase4.classList.add('d-none');
        frase5.classList.remove('d-none');
    }else if(countFrase === 6){
        playAudio(22,28);
        frase5.classList.add('d-none');
        frase6.classList.remove('d-none');
    }else if(countFrase === 7){
        playAudio(28,35);
        frase6.classList.add('d-none');
        frase7.classList.remove('d-none');
    }
}

    frase1.addEventListener('click', function(){
        playAudio(0,2);
        nextPhrase();
    })
    frase2.addEventListener('click', function(){
        playAudio(2,7);
        nextPhrase();
    })
    frase3.addEventListener('click', function(){
        playAudio(7,12);
        nextPhrase();
    })
    frase4.addEventListener('click', function(){
        playAudio(12,19);
        nextPhrase();
    })
    frase5.addEventListener('click', function(){
        playAudio(19,22);
        nextPhrase();
    })
    frase6.addEventListener('click', function(){
        playAudio(22,28);
        nextPhrase();
    })
    frase7.addEventListener('click', function(){
        playAudio(28,35);
        nextPhrase();
    });

window.onload = function(){
    setTimeout(function(){
        playAudio(0,2);
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