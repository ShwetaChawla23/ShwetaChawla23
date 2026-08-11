// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


// Observe sections

document
    .querySelectorAll(".section, .hero-content, .terminal")
    .forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });


// ===============================
// SMOOTH NAVIGATION
// ===============================

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });