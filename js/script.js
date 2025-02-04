// função para aparecer os desejos

const photoBall = document.querySelector('.dragon-ball');
const wishesList = document.querySelector('.wishes-Gui');

if (photoBall){
    photoBall.onclick =()=>{
        wishesList.classList.remove('d-none');
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
    sphereDragon.forEach((sphere,index) =>{
        sphere.onclick=()=>{
            sphere.style.animation='none';

            sphere.style.transition='all 1s ease-in-out';
            sphere.style.top='70%';
            sphere.style.left='80%';
            
            sphere.style.animation='sphereGather 5s linear infinite';

            count++;
            countSphere.textContent=count;

            sphere.style.cursor='default';
            sphere.style.pointerEvents='none';
        }
    })
}

// Fim da função das esferas