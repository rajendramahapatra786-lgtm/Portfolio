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

/* DOWNLOAD RESUME */

function downloadResume() {

    const link = document.createElement('a');

    link.href = './files/RAJENDRA.pdf';

    link.download = 'Rajendra_Mahapatra_Resume.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

/* EMAILJS CONTACT FORM */

(function () {
    emailjs.init("knXZM5b18Noa5e-b5");
})();

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const sendBtn = document.querySelector(".send-btn");
        const originalBtn = sendBtn.innerHTML;

        // show spinner
        sendBtn.innerHTML = `<span class="loader"></span>`;

        emailjs.sendForm(
            "service_pfe3kxo",
            "template_8q6zcef",
            this
        )
            .then(() => {
                sendBtn.innerHTML = originalBtn;
                alert("[ TRANSMISSION SUCCESSFUL ]\nMESSAGE DELIVERED TO SERVER");
                contactForm.reset();
            })
            .catch((error) => {
                sendBtn.innerHTML = originalBtn;
                alert("Failed to send message ❌");
                console.log(error);
            });
    });
}