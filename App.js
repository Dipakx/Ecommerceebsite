/* this will reload the website after resizing every time */

window.addEventListener("resize", function () {
    window.location.reload();
})

/* this will reload the website after resizing every time */

/* this will set the size / width of the website acroding to screen / window of the width*/

if (window.innerWidth >= 800) {
    var width_of_the_screen = Math.max(screen.width, window.innerWidth);
} else {
    var width_of_the_screen = Math.min(screen.width, window.innerWidth);
}

/* this will set the size / width of the website acroding to screen / window of the width*/

/* this will set the size / width of the header acroding to screen / window of the width*/

document.getElementById("header").style.width = width_of_the_screen + "px";

/* this will set the size / width of the header acroding to screen / window of the width*/

/* code for logo*/

document.getElementById("ghj").style.height = width_of_the_screen * 100 / 1536 + "px";
document.getElementById("ghj").style.width = width_of_the_screen * 200 / 1536 + "px";
document.getElementById("logo").style.height = width_of_the_screen * 70 / 1536 + "px";

/* code for logo*/

/* code for li itms in heder*/

document.getElementById("navbar-1").style.fontSize = width_of_the_screen * 20 / 1536 + "px";
var list_items = document.getElementsByTagName("li")
for (let index = 0; index < list_items.length; index++) {
    list_items[index].style.marginRight = width_of_the_screen * 40 / 1536 + "px";
}

/* code for li itms in heder*/

/* code for Hero section */

var heroH4 = document.getElementsByTagName("h4")[0].style;

heroH4.fontSize = width_of_the_screen * 70 / 1536 + "px";
heroH4.paddingBottom = width_of_the_screen * 15 / 1536 + "px";

var heroh2 = document.getElementsByTagName("h2")[0].style

heroh2.fontSize = width_of_the_screen * 46 / 1536 + "px";
heroh2.lineHeight = width_of_the_screen * 54 / 1536 + "px";

var heroh1 = document.getElementsByTagName("h1")[0].style

heroh1.fontSize = width_of_the_screen * 50 / 1536 + "px";
heroh1.lineHeight = width_of_the_screen * 64 / 1536 + "px";

var p = document.getElementsByTagName("p")[0].style

p.fontSize = width_of_the_screen * 26 / 1536 + "px";
p.marginTop = width_of_the_screen * 15 / 1536 + "px";
p.marginBottom = width_of_the_screen * 20 / 1536 + "px";


var buttonp = document.getElementsByTagName("button")[0].style

var size = width_of_the_screen * 5 / 1536 + "px"
var a = size + " " + "solid" + " " + "yellow";
buttonp.border = a;

buttonp.fontSize = width_of_the_screen * 40 / 1536 + "px";


buttonp.paddingTop = width_of_the_screen * 14 / 1536 + "px";
buttonp.paddingRight = width_of_the_screen * 80 / 1536 + "px";
buttonp.paddingBottom = width_of_the_screen * 14 / 1536 + "px";
buttonp.paddingLeft = width_of_the_screen * 65 / 1536 + "px";

var herostyle = document.getElementById("hero").style

herostyle.paddingRight = width_of_the_screen * 80 / 1536 + "px";
herostyle.paddingLeft = width_of_the_screen * 80 / 1536 + "px";

herostyle.height = width_of_the_screen * 624 / 1536 + "px";

var bgwidth = width_of_the_screen * 1536 / 1536 + "px";
var bgheight = width_of_the_screen * 624 / 1536 + "px";
herostyle.backgroundSize = bgwidth + " " + bgheight;

var bgposition = width_of_the_screen * 500 / 1536 + "px";
herostyle.backgroundPosition = bgposition;

/* code for Hero section */

/* code for feture section */

document.getElementById("feture").style.marginTop = width_of_the_screen * 40 / 1536 + "px";
document.getElementById("feture").style.paddingRight = width_of_the_screen * 20 / 1536 + "px";
document.getElementById("feture").style.paddingLeft = width_of_the_screen * 20 / 1536 + "px";


var febox = document.getElementsByClassName("fe-box")

for (let index = 0; index < febox.length; index++) {
    febox[index].style.marginRight = width_of_the_screen * 35 / 1536 + "px";
    febox[index].style.marginLeft = width_of_the_screen * 13 / 1536 + "px";
    febox[index].style.marginBottom = width_of_the_screen * 35 / 1536 + "px";
}

var feimg = document.getElementsByClassName("fi")

for (let index = 0; index < febox.length; index++) {
    feimg[index].style.height = width_of_the_screen * 50 * 2.5 / 1536 + "px";
    feimg[index].style.width = width_of_the_screen * 50 * 2.5 / 1536 + "px";
}

var feh6 = document.getElementsByTagName("h6");

for (let index = 0; index < feh6.length; index++) {
    feh6[index].style.fontSize = width_of_the_screen * 15 / 1536 + "px";
}

document.getElementById("qaz").style.display = "none";

/* code for feture section */

/* code for product section */

document.getElementsByClassName("fade")[0].style.marginLeft = width_of_the_screen * -200 / 1536 + "px";

var plmw = document.getElementsByClassName("plm");

for (let index = 0; index < plmw.length; index++) {
    plmw[index].style.width = width_of_the_screen * 150 / 1536 + "px";
    plmw[index].style.height = width_of_the_screen * 250 / 1536 + "px";
    plmw[index].style.padding = width_of_the_screen * 25 / 1536 + "px";
}

var ogcf = document.getElementsByClassName("ogc");

for (let index = 0; index < ogcf.length; index++) {
    ogcf[index].style.width = width_of_the_screen * 100 / 1536 + "px";
    ogcf[index].style.height = width_of_the_screen * 100 / 1536 + "px";
}
var fasf = document.getElementsByClassName("fa-star");

for (let index = 0; index < fasf.length; index++) {
    fasf[index].style.fontSize = width_of_the_screen * 15 / 1536 + "px";
}

var stare = document.getElementsByClassName("star");

for (let index = 0; index < stare.length; index++) {
    stare[index].style.marginTop = width_of_the_screen * 20 / 1536 + "px";
}
var clothg = document.getElementsByClassName("cloth");

for (let index = 0; index < clothg.length; index++) {
    clothg[index].style.marginTop = width_of_the_screen * 10 / 1536 + "px";
    clothg[index].style.fontSize = width_of_the_screen * 20 / 1536 + "px";
}
var proceh = document.getElementsByClassName("proce");

for (let index = 0; index < proceh.length; index++) {
    proceh[index].style.marginTop = width_of_the_screen * 10 / 1536 + "px";
}
var ferth = document.getElementsByClassName("fa-cart-shopping cart");

for (let index = 0; index < ferth.length; index++) {
    ferth[index].style.fontSize = width_of_the_screen * 19 / 1536 + "px";
}
var tfdj = document.getElementsByClassName("tfd");

for (let index = 0; index < tfdj.length; index++) {
    tfdj[index].style.marginRight = width_of_the_screen * 20 / 1536 + "px";
    tfdj[index].style.fontSize = width_of_the_screen * 19 / 1536 + "px";
}


$(document).ready(function () {
    $('.fade').slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        slidesToShow: 7.6,
        slidesToScroll: 1
    });

});

document.getElementById("efgt").style.display = "none";

document.getElementById("efgt").style.display = "none";


/* code for product section */





if (width_of_the_screen <= 768) {

    /* to set padding of the header to looks good*/

    document.getElementById("header").style.paddingBottom = width_of_the_screen * 50 / 1536 + "px";
    document.getElementById("header").style.paddingTop = width_of_the_screen * 50 / 1536 + "px";

    /* to set padding of the header to looks good*/

    /* to hidde the li itmes in small device*/

    var list_items = document.getElementsByTagName("li")
    for (let index = 0; index < list_items.length; index++) {
        list_items[index].style.display = "none";
    }

    /* to hidde the li itmes in small device*/

    /* to set icons in small device*/

    document.getElementById("mobile").style.display = "flex";
    document.getElementById("mobile").style.marginRight = width_of_the_screen * 20 / 1536 + "px";
    document.getElementById("bar").style.marginLeft = width_of_the_screen * 20 / 1536 + "px";

    /* to set icons in small device*/

    /* to set the styling of the li itmes in the small device*/

    document.getElementById("bar").addEventListener("click", function () {

        /* to set the li items in small device*/

        document.getElementById("mobile").style.display = "none";

        for (let index = 0; index < list_items.length; index++) {
            list_items[index].style.display = "flex";
            list_items[index].style.marginBottom = width_of_the_screen * 20 / 1536 + "px";
            list_items[index].style.marginTop = width_of_the_screen * 20 / 1536 + "px";
            list_items[index].style.marginLeft = width_of_the_screen * 30 / 1536 + "px";
        }

        /* to set the li items in small device*/

        /* to set the li items in small device*/

        var navbar = document.getElementById("navbar-1").style;

        navbar.display = "flex";
        navbar.alignItems = "flex-start";
        navbar.flexDirection = "column";
        navbar.position = "fixed";
        navbar.top = "0px";
        navbar.right = "0px";
        navbar.height = "100vh";
        navbar.width = width_of_the_screen * 350 / 1536 + "px";
        navbar.backgroundColor = "whitesmoke";
        navbar.fontSize = width_of_the_screen / 30 + "px";

        /* to set the li items in small device*/

    })


    /* to set the styling of the hero section in the small device*/

    var heroH4 = document.getElementsByTagName("h4")[0].style;

    heroH4.fontSize = width_of_the_screen * 70 * 1.7 / 1536 + "px";
    heroH4.paddingBottom = width_of_the_screen * 15 * 1.7 / 1536 + "px";

    var heroh2 = document.getElementsByTagName("h2")[0].style

    heroh2.fontSize = width_of_the_screen * 46 * 1.7 / 1536 + "px";
    heroh2.lineHeight = width_of_the_screen * 54 * 1.7 / 1536 + "px";

    var heroh1 = document.getElementsByTagName("h1")[0].style

    heroh1.fontSize = width_of_the_screen * 50 * 1.7 / 1536 + "px";
    heroh1.lineHeight = width_of_the_screen * 64 * 1.7 / 1536 + "px";

    var p = document.getElementsByTagName("p")[0].style

    p.fontSize = width_of_the_screen * 26 * 2.7 / 1536 + "px";
    p.marginTop = width_of_the_screen * 15 * 1.7 / 1536 + "px";
    p.marginBottom = width_of_the_screen * 20 * 1.7 / 1536 + "px";


    var buttonp = document.getElementsByTagName("button")[0].style

    var size = width_of_the_screen * 5 * 1.7 / 1536 + "px"
    var a = size + " " + "solid" + " " + "yellow";
    buttonp.border = a;

    buttonp.fontSize = width_of_the_screen * 40 * 1.7 / 1536 + "px";


    buttonp.paddingTop = width_of_the_screen * 14 / 1536 + "px";
    buttonp.paddingRight = width_of_the_screen * 80 / 1536 + "px";
    buttonp.paddingBottom = width_of_the_screen * 14 / 1536 + "px";
    buttonp.paddingLeft = width_of_the_screen * 65 / 1536 + "px";

    var herostyle = document.getElementById("hero").style

    herostyle.paddingRight = width_of_the_screen * 80 / 1536 + "px";
    herostyle.paddingLeft = width_of_the_screen * 80 / 1536 + "px";

    herostyle.height = width_of_the_screen * 624 * 1.7 / 1536 + "px";

    var bgwidth = width_of_the_screen * 1536 / 1536 + "px";
    var bgheight = width_of_the_screen * 624 * 1.7 / 1536 + "px";
    herostyle.backgroundSize = bgwidth + " " + bgheight;

    var bgposition = width_of_the_screen * 500 / 1536 + "px";
    herostyle.backgroundPosition = bgposition;

    /* to set the styling of the hero section in the small device*/


    /* code for feture section in small device */

    document.getElementById("feture").style.display = "none";

    document.getElementById("qaz").style.display = "flex";

    document.getElementById("qaz").style.padding = width_of_the_screen * 100 / 1536 + "px";
    document.getElementById("qaz").style.marginTop = width_of_the_screen * 100 / 1536 + "px";
    document.getElementById("qaz").style.marginBottom = width_of_the_screen * 100 / 1536 + "px";


    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    var febox = document.getElementsByClassName("fe-box")

    for (let index = 0; index < febox.length; index++) {
        febox[index].style.marginRight = width_of_the_screen * 35 / 1536 + "px";
        febox[index].style.marginLeft = width_of_the_screen * 13 / 1536 + "px";
        febox[index].style.marginBottom = width_of_the_screen * 35 / 1536 + "px";
    }

    var feimg = document.getElementsByClassName("fi")

    for (let index = 0; index < febox.length; index++) {
        feimg[index].style.height = width_of_the_screen * 50 * 7.5 / 1536 + "px";
        feimg[index].style.width = width_of_the_screen * 50 * 7.5 / 1536 + "px";
    }

    var feh6 = document.getElementsByTagName("h6");

    for (let index = 0; index < feh6.length; index++) {
        feh6[index].style.fontSize = width_of_the_screen * 75 / 1536 + "px";
    }

    /* code for feture section in small device */

    /* code for Product section in small device */

    document.getElementById("wdbf").style.display = "none";

    document.getElementById("efgt").style.display = "flex";

    var plmw = document.getElementsByClassName("plm");

    for (let index = 0; index < plmw.length; index++) {
        plmw[index].style.width = width_of_the_screen * 150 * 2.5 / 1536 + "px";
        plmw[index].style.height = width_of_the_screen * 250 * 2.8 / 1536 + "px";
        plmw[index].style.padding = width_of_the_screen * 25 * 2.5 / 1536 + "px";
    }

    var ogcf = document.getElementsByClassName("ogc");

    for (let index = 0; index < ogcf.length; index++) {
        ogcf[index].style.width = width_of_the_screen * 100 * 2.5 / 1536 + "px";
        ogcf[index].style.height = width_of_the_screen * 100 * 2.5 / 1536 + "px";
    }
    var fasf = document.getElementsByClassName("fa-star");

    for (let index = 0; index < fasf.length; index++) {
        fasf[index].style.fontSize = width_of_the_screen * 15 * 2.5 / 1536 + "px";
    }

    var stare = document.getElementsByClassName("star");

    for (let index = 0; index < stare.length; index++) {
        stare[index].style.marginTop = width_of_the_screen * 20 * 2.5 / 1536 + "px";
    }
    var clothg = document.getElementsByClassName("cloth");

    for (let index = 0; index < clothg.length; index++) {
        clothg[index].style.marginTop = width_of_the_screen * 10 * 2.5 / 1536 + "px";
        clothg[index].style.fontSize = width_of_the_screen * 20 * 2.5 / 1536 + "px";
    }
    var proceh = document.getElementsByClassName("proce");

    for (let index = 0; index < proceh.length; index++) {
        proceh[index].style.marginTop = width_of_the_screen * 10 * 2.5 / 1536 + "px";
    }
    var ferth = document.getElementsByClassName("fa-cart-shopping cart");

    for (let index = 0; index < ferth.length; index++) {
        ferth[index].style.fontSize = width_of_the_screen * 20 * 2.5 / 1536 + "px";
    }
    var tfdj = document.getElementsByClassName("tfd");

    for (let index = 0; index < tfdj.length; index++) {
        tfdj[index].style.marginRight = width_of_the_screen * 20 * 2.5 / 1536 + "px";
        tfdj[index].style.fontSize = width_of_the_screen * 19 * 2.5 / 1536 + "px";
    }


    $(document).ready(function () {
        $('.efrg').slick({
            dots: false,
            infinite: true,
            speed: 700,
            autoplay: false,
            autoplaySpeed: 1000,
            arrows: false,
            slidesToShow: 3.6,
            slidesToScroll: 1
        });

    });

    /* code for Product section in small device */

} 
