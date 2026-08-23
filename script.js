// ========================================
// YATO FX - WEBSITE JAVASCRIPT
// ========================================


// ================= SECTION REVEAL =================

const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(
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


sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(35px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    revealObserver.observe(section);

});


// ================= ADD VISIBLE STYLE =================

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.section.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

`;

document.head.appendChild(revealStyle);


// ================= NAVBAR SCROLL EFFECT =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(7,7,11,0.92)";

    } else {

        header.style.background =
            "rgba(7,7,11,0.72)";

    }

});


// ================= ACTIVE NAVIGATION =================

const navLinks =
    document.querySelectorAll(".nav-links a");

const pageSections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    pageSections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ================= SMOOTH NAVIGATION =================

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const target =
            document.querySelector(
                link.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================= VIDEO CONTROL =================

// Ek time par sirf ek video play hoga.

const videos =
    document.querySelectorAll(".edit-card video");


videos.forEach((video) => {

    video.addEventListener("play", () => {

        videos.forEach((otherVideo) => {

            if (otherVideo !== video) {

                otherVideo.pause();

            }

        });

    });

});


// ================= VIDEO HOVER EFFECT =================

const editCards =
    document.querySelectorAll(".edit-card");


editCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";

    });

});


// ================= SCROLL TO TOP BUTTON =================

const topButton =
    document.createElement("button");


topButton.innerHTML = "↑";

topButton.className =
    "back-to-top";


document.body.appendChild(topButton);


// Button CSS

const topButtonStyle =
    document.createElement("style");


topButtonStyle.innerHTML = `

.back-to-top {

    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 48px;
    height: 48px;

    border-radius: 50%;

    border: 1px solid rgba(255,255,255,0.15);

    background: rgba(20,20,28,0.85);

    color: white;

    font-size: 22px;

    cursor: pointer;

    opacity: 0;

    visibility: hidden;

    transform: translateY(20px);

    transition: 0.3s;

    z-index: 999;

}

.back-to-top.show {

    opacity: 1;

    visibility: visible;

    transform: translateY(0);

}

.back-to-top:hover {

    background: #b98cff;

    color: #08080c;

    transform: translateY(-5px);

}

.nav-links a.active {

    color: #b98cff;

}

`;

document.head.appendChild(topButtonStyle);


// Show button after scrolling

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


// Scroll to top

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================= CURRENT YEAR =================

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    const year =
        new Date().getFullYear();

    copyright.textContent =
        `© ${year} YATO FX. All Rights Reserved.`;

}


// ================= CONSOLE =================

console.log(
    "⚡ YATO FX Portfolio Loaded Successfully!"
);