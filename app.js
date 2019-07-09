function homeLoad() {
    const words = ["CREATIVE", "TECHNOLOGICAL", "INNOVATIVE"];
    let count = 0;
    let iter = 0;

    function setText() {
        if (iter < 20) {
            if (count < words.length) {            
                document.getElementById("swap-text").innerHTML = words[count];
                count++;
                iter++;       
            }else {
                count = 0;
                document.getElementById("swap-text").innerHTML = words[count];
                count++;
                iter++;
            }}
        else {
        document.getElementById("swap-text").innerHTML = "STARTED";
        window.clearInterval(timer);
        }
    }      
    let timer = window.setInterval(setText, 100);
}
homeLoad();

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
        //TOGGLE
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((x) => {
            x.addEventListener('click', ()=> {
                navLinks.forEach((link, index) => {
                    link.style.animation = ''});
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });
        //LINKS
        function navAnimation() {
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.2 }s`;
                }
            });
        };
        navAnimation();
        //buger animation
        burger.classList.toggle('toggle');
    });;
}

navSlide();

function cvDisplay() {
    document.getElementById("modal").style.display = "block";
};

function cvHide() {
    document.getElementById("modal").style.display = "none";
};

