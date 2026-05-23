/* CURSOR GLOW */

const cursor = document.querySelector('.cursor-glow');

if (cursor) {

    window.addEventListener('mousemove', (e) => {

        cursor.style.left = e.clientX + 'px';

        cursor.style.top = e.clientY + 'px';

    });
}


/* SCROLL ANIMATION */

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));


/* PARTICLES */

const particles = document.querySelector('.particles');

if (particles) {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement('span');

        particle.classList.add('particle');

        particle.style.left =
            Math.random() * 100 + 'vw';

        particle.style.bottom = '-20px';

        particle.style.animationDuration =
            (Math.random() * 10 + 10) + 's';

        particle.style.animationDelay =
            Math.random() * 5 + 's';

        particles.appendChild(particle);
    }
}