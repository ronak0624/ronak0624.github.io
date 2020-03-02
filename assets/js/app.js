$(".toggle").click(function () {
    $(this).toggleClass('on');
    $(".resize").toggleClass("active");
});

$(".resize ul li a").click(function () {
    $(this).toggleClass('on');
    $(".resize").toggleClass("active");
});

$(".close-btn").click(function () {
    $(this).toggleClass('on');
    $(".resize").toggleClass("active");
});






TweenMax.from(".brand", 1, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu li", 1, {
    delay: 0.2,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

var Typewriter = function (element, toRotate, rate) {
    this.toRotate = toRotate;
    this.element = element;
    this.loopNum = 0;
    this.rate = parseInt(rate, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

Typewriter.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.rate;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    let phrases = [ "I'm a student at the University of Washington.", 
                    "I'm a Full Stack Developer.", 
                    "I design user interfaces.",
                    "I love to cook and make websites."
                ]
    let element = document.getElementsByClassName('typewrite')[0]
    new Typewriter(element, phrases, 1000);
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};