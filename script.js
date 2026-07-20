/* =====================================
   PxxStudix Slider
===================================== */

document.querySelectorAll(".slider").forEach(slider => {

    const slides = slider.querySelector(".slides");
    const images = slider.querySelectorAll("img");

    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");

    let index = 0;
    const total = images.length;

    function updateSlider(){

        slides.style.transform =
        `translateX(-${index * 100}%)`;

    }

    function nextSlide(){

        index++;

        if(index >= total){

            index = 0;

        }

        updateSlider();

    }

    function prevSlide(){

        index--;

        if(index < 0){

            index = total - 1;

        }

        updateSlider();

    }

    next.addEventListener("click", () => {

        nextSlide();
        restartAuto();

    });

    prev.addEventListener("click", () => {

        prevSlide();
        restartAuto();

    });

    let auto = setInterval(nextSlide, 4000);

    function restartAuto(){

        clearInterval(auto);
        auto = setInterval(nextSlide, 4000);

    }

    slider.addEventListener("mouseenter", () => {

        clearInterval(auto);

    });

    slider.addEventListener("mouseleave", () => {

        restartAuto();

    });

    slider.addEventListener("touchstart", () => {

        clearInterval(auto);

    });

    slider.addEventListener("touchend", () => {

        restartAuto();

    });

});

/* =====================================
   ORDER BUTTON
===================================== */

const nomorWA = "6287796942365";

document.querySelectorAll(".order").forEach(button => {

    button.addEventListener("click", function(){

        const card = this.closest(".card");

        const paket =
        card.querySelector("h2").innerText;

        const pesan =
`Yang ini:
${paket}`;

        window.open(
            `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`,
            "_blank"
        );

    });

});

/* =====================================
   CARD ANIMATION
===================================== */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

cards.forEach(card=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";

    observer.observe(card);

});

/* =====================================
   FILTER PAYMENT
===================================== */

const payItems =
document.querySelectorAll(".pay-item");

function showCards(payment){

    cards.forEach(card=>{

        if(card.dataset.pay === payment){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

payItems.forEach(item=>{

    item.addEventListener("click",()=>{

        payItems.forEach(p=>
            p.classList.remove("active")
        );

        item.classList.add("active");

        showCards(item.dataset.pay);

    });

});

/* =====================================
   DEFAULT
===================================== */

showCards("dana");
