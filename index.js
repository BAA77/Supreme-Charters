// menu-bar
let navMenuToggle = true;

    document.querySelector(".nav-menu").addEventListener("click", () => {
        if (navMenuToggle){
        navMenuToggle = false;
        document.querySelector(".nav-menu").style.gap = "0rem";
        document.querySelector(".nav-ul").style.width = "70vw";
        document.querySelector("#neutral-nav-menu").style.display = "none";
        document.querySelector("#top-nav-menu").style.transform = "rotate(45deg)";
        document.querySelector("#bottom-nav-menu").style.transform = "rotate(-45deg)";
        document.querySelector("#bottom-nav-menu").style.top = "-3px";
        [...document.querySelectorAll(".nav-li")].forEach((element) => {
            element.style.display = "block";
        })
        } else {
        document.querySelector(".nav-menu").style.gap = "0.4rem";
        document.querySelector(".nav-ul").style.width = "0vw";
        document.querySelector("#neutral-nav-menu").style.display = "block";
        document.querySelector("#top-nav-menu").style.transform = "rotate(0deg)";
        document.querySelector("#bottom-nav-menu").style.transform = "rotate(0deg)";
        document.querySelector("#bottom-nav-menu").style.top = "0px";
        navMenuToggle = true;
        [...document.querySelectorAll(".nav-li")].forEach((element) => {
            element.style.display = "none";
        })
        }
    })

    if (screen.width <= 905) {
        document.onclick = function (e) {
            if (e.target != document.querySelector(".nav-ul") && e.target != document.querySelector("#top-nav-menu") && e.target != document.querySelector("#neutral-nav-menu") && e.target != document.querySelector("#bottom-nav-menu") && e.target != document.querySelector(".nav-menu") && navMenuToggle == false) {
                document.querySelector(".nav-menu").style.gap = "0.4rem";
                document.querySelector(".nav-ul").style.width = "0vw";
                document.querySelector("#neutral-nav-menu").style.display = "block";
                document.querySelector("#top-nav-menu").style.transform = "rotate(0deg)";
                document.querySelector("#bottom-nav-menu").style.transform = "rotate(0deg)";
                document.querySelector("#bottom-nav-menu").style.top = "0px";
                navMenuToggle = true;
                [...document.querySelectorAll(".nav-li")].forEach((element) => {
                    element.style.display = "none";
                })
                menuBar1.classList.replace("menu-toggle-bars-on", "menu-toggle-bars-off");
                menuBar3.classList.replace("menu-toggle-bars-on-alt", "menu-toggle-bars-off");
                menuBar2.style.display = "block";
    
                for(let list of navListItem) {
                    list.style.marginRight = "0px";
                }
                console.log(e.target);
            }
        }
    }

    // header landing-page integration
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header").getBoundingClientRect().bottom;
    const landingPage = document.querySelector(".landing-pg-wp-h2").getBoundingClientRect().top;

    if (landingPage < header) {
        document.querySelector(".header").style.background = "linear-gradient(90deg, rgb(0, 0, 0), rgb(20, 20, 20), rgba(30, 30, 30))";
        document.querySelector(".header").style.boxShadow = "2px 2px 5px black";
    } else {
        document.querySelector(".header").style.background = "linear-gradient(90deg, rgb(0, 0, 0, 0.200), rgb(20, 20, 20, 0.200), rgba(30, 30, 30, 0.200))";
        document.querySelector(".header").style.boxShadow = "none";
    }
});

    // landing-page
    setTimeout(() => {
        document.querySelector(".landing-pg-wp").style.transform = "scale(1)";
        document.querySelector(".landing-pg-wp").style.opacity = "1";
    }, 1000);

    // section animation
window.addEventListener("scroll", () => {
    let verticalReveal = [...document.querySelectorAll(".vertical-reveal")];
    const vPadding = 100;

    for (let section of verticalReveal) {
        let sectionTop = section.getBoundingClientRect().top;
        let deviceHeight = window.innerHeight;

        if (sectionTop < deviceHeight - vPadding) {
            section.classList.add("reveal-vertical");
        } else {
            section.classList.remove("reveal-vertical");
        }
    }


    let horizontalReveal = [...document.querySelectorAll(".horizontal-reveal")];

    for (let section of horizontalReveal) {
        let sectionTop = section.getBoundingClientRect().top;
        let deviceHeight = window.innerHeight;

        if (sectionTop < deviceHeight - vPadding) {
            section.classList.add("reveal-horizontal");
        } else {
            section.classList.remove("reveal-horizontal");
        }
    }

    let horizontalRevealOpp = [...document.querySelectorAll(".horizontal-reveal-opp")];

    for (let section of horizontalRevealOpp) {
        let sectionTop = section.getBoundingClientRect().top;
        let deviceHeight = window.innerHeight;

        if (sectionTop < deviceHeight - vPadding) {
            section.classList.add("reveal-horizontal-opp");
        } else {
            section.classList.remove("reveal-horizontal-opp");
        }
    }


    let scaleReveal = [...document.querySelectorAll(".scale-reveal")];

    for (let section of scaleReveal) {
        let sectionTop = section.getBoundingClientRect().top;
        let deviceHeight = window.innerHeight;

        if (sectionTop < deviceHeight - vPadding) {
            section.classList.add("reveal-scale");
        } else {
            section.classList.remove("reveal-scale");
        }
    }
});

    // indulge
const leftArrow = document.querySelector("#fa-arrow-left");
const rightArrow = document.querySelector("#fa-arrow-right");
const scrollContainer = document.querySelector(".experience-service-top");
const slidePageData = document.querySelector(".slide-page-number");
const faArrowLeftBorder = document.querySelector(".arrow-left");
const faArrowRightBorder = document.querySelector(".arrow-right");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

faArrowRightBorder.addEventListener("click", () => {
    leftArrow.style.color = "black";
    faArrowLeftBorder.style.border = "4px solid black";
    faArrowLeftBorder.style.width = "62px";
    faArrowLeftBorder.style.height = "62px";
    faArrowLeftBorder.style.cursor = "pointer";
    rightArrow.style.color = "#0436326a";
    faArrowRightBorder.style.border = "4px solid #0436326a";
    faArrowRightBorder.style.width = "49px";
    faArrowRightBorder.style.height = "49px";
    faArrowRightBorder.style.cursor = "auto";
    scrollContainer.scrollLeft += window.innerWidth;
    slidePageData.textContent = "2 of 2"
});

faArrowLeftBorder.addEventListener("click", () => {
    rightArrow.style.color = "black";
    faArrowRightBorder.style.border = "4px solid black";
    faArrowRightBorder.style.width = "62px";
    faArrowRightBorder.style.height = "62px";
    faArrowRightBorder.style.cursor = "pointer";
    leftArrow.style.color = "#0436326a";
    faArrowLeftBorder.style.border = "4px solid #0436326a";
    faArrowLeftBorder.style.width = "49px";
    faArrowLeftBorder.style.height = "49px";
    faArrowLeftBorder.style.cursor = "auto";
    scrollContainer.scrollLeft -= window.innerWidth;
    slidePageData.textContent = "1 of 2"
});

// Contact Us Email Relay

function inquire() {
    try {Email.send({
        Host: "smtp.elasticemail.com",
        Username: "regnantugboga@gmail.com",
        Password: "2AB9795659A5CB93CBAE3CE34C2A53152B1A",
        To: 'regnanttycoon@gmail.com',
        From: "regnantugboga@gmail.com",
        Subject: "SUPREME CHARTERS ENQUIRY",
        Body: "CLIENT NAME: " + " " + document.querySelector("#c-u-name").value + "<br>" + "<br>"
            + "<br> EMAIL: " + " " + document.querySelector("#c-u-email").value + "<br>" + "<br>"
            + "<br> PHONE: " + " " + document.querySelector("#c-u-phone").value + "<br>" + "<br>"
            + "<br> ENQUIRY: " + " " + document.querySelector("#c-u-textarea").value + "<br>" + "<br>"
    }).then(() => {
        window.location.reload(true);
    })}
    catch {
        console.log("null");
    }

}

// subscription handling
function subscribe() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "regnantugboga@gmail.com",
        Password: "2AB9795659A5CB93CBAE3CE34C2A53152B1A",
        To: 'regnanttycoon@gmail.com',
        From: "regnantugboga@gmail.com",
        Subject: "Supreme Charters Newsletter Subscription",
        Body: "Someone has just subscribed to Supreme Charters newsletter" + "<br>" + "<br>"
            + "<br> EMAIL: " + " " + document.querySelector("#subscription-email").value + "<br>" + "<br>" + "<br>"
    }).then(() => {
        window.location.reload(true);
    })
}