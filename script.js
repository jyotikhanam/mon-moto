const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


document.getElementById("year").textContent =
    new Date().getFullYear();


const requestForm =
    document.getElementById("requestForm");

const formSuccess =
    document.getElementById("formSuccess");


requestForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (!requestForm.checkValidity()) {

            requestForm.reportValidity();

            return;

        }


        const submitButton =
            requestForm.querySelector(
                ".form-submit"
            );


        const originalContent =
            submitButton.innerHTML;


        submitButton.disabled = true;


        submitButton.innerHTML =
            `
                <i class="fa-solid fa-spinner fa-spin"></i>
                Sending...
            `;


        setTimeout(() => {

            formSuccess.classList.add("show");

            requestForm.reset();

            submitButton.disabled = false;

            submitButton.innerHTML =
                originalContent;

            formSuccess.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        }, 1200);

    }
);


const faqDetails =
    document.querySelectorAll(
        ".faq-list details"
    );


faqDetails.forEach(detail => {

    detail.addEventListener(
        "toggle",
        () => {

            if (detail.open) {

                faqDetails.forEach(other => {

                    if (
                        other !== detail &&
                        other.open
                    ) {

                        other.removeAttribute(
                            "open"
                        );

                    }

                });

            }

        }
    );

});


const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 10) {

        header.style.boxShadow =
            "0 5px 25px rgba(15,45,38,0.06)";

    } else {

        header.style.boxShadow = "none";

    }

});


const deadline =
    document.getElementById("deadline");


const today =
    new Date()
        .toISOString()
        .split("T")[0];


deadline.min = today;