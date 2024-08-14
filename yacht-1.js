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

    // yacht gallery
    document.querySelector(".yacht-img-slide-wrap").addEventListener("wheel", (evt) => {
        evt.preventDefault();
        document.querySelector(".yacht-img-slide-wrap").scrollLeft += evt.deltaY;
    });

    document.getElementById("#yacht-g-l-arrow").addEventListener("click", () => {
        document.querySelector(".yacht-img-slide-catr").scrollLeft -= window.innerWidth;
        console.log("yeah");
    });
    
    document.getElementById("#yacht-g-r-arrow").addEventListener("click", () => {
        document.querySelector(".yacht-img-slide-catr").scrollLeft += window.innerWidth;
        console.log("YEAH");
    });

    // header-page integration
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header").getBoundingClientRect().bottom;
    const page = document.querySelector(".yacht-name-h2").getBoundingClientRect().top;

    if (page < header) {
        document.querySelector(".header").style.background = "linear-gradient(90deg, rgb(0, 0, 0), rgb(20, 20, 20), rgba(30, 30, 30))";
        document.querySelector(".header").style.boxShadow = "2px 2px 5px black";
    } else {
        document.querySelector(".header").style.background = "linear-gradient(90deg, rgb(0, 0, 0, 0.200), rgb(20, 20, 20, 0.200), rgba(30, 30, 30, 0.200))";
        document.querySelector(".header").style.boxShadow = "none";
    }
});

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
});

// Booking Form Email Sending

function sendEmail() {
    try {Email.send({
        Host: "smtp.elasticemail.com",
        Username: "regnantugboga@gmail.com",
        Password: "2AB9795659A5CB93CBAE3CE34C2A53152B1A",
        To: 'regnanttycoon@gmail.com',
        From: "regnantugboga@gmail.com",
        Subject: "BOOKING REQUEST FOR SUPREME I",
        Body: "CLIENT NAME: " + " " + document.querySelector("#bookingName").value + "<br>" + "<br>"
            + "<br> EMAIL: " + " " + document.querySelector("#bookingEmail").value + "<br>" + "<br>"
            + "<br> PHONE: " + " " + document.querySelector("#bookingTel").value + "<br>" + "<br>"
            + "<br> NUMBER OF GUESTS: " + " " + document.querySelector("#bookingGuests").value + "<br>" + "<br>"
            + "<br> DATE (Year-Month-Day): " + " " + document.querySelector("#bookingDate").value + "<br>" + "<br>"
            + "<br> DURATION (HOURS): " + " " + document.querySelector("#bookingDuration").value + "<br>" + "<br>"
    }).then(() => {
        window.location = "alert.html";
    })}
    catch {
        window.location = "eAlert.html";
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