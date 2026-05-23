const texts = [
    'Full Stack Python Developer',
    'Cyber UI Engineer',
    'AI System Builder'
];

const typing = document.getElementById('typing');

let textIndex = 0;
let charIndex = 0;

function typeEffect() {

    if (!typing) return;

    if (charIndex < texts[textIndex].length) {

        typing.innerHTML += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {

    if (!typing) return;

    if (charIndex > 0) {

        typing.innerHTML =
            texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }

        setTimeout(typeEffect, 500);
    }
}

typeEffect();