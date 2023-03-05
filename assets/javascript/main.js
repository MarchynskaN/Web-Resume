var scrollTrigger = 500;
var array = document.getElementsByClassName("imglink");
window.onscroll = function() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.getElementsByClassName("head")[0].classList.add("changeColor");

        var arr = [].slice.call(array);
        arr.forEach(element => {
            element.classList.add("txtcolor")
        });

        //document.getElementsByClassName("imglink")[0].classList.add("txtcolor");
    } else {
        document.getElementsByClassName("head")[0].classList.remove("changeColor");
        var arr = [].slice.call(array);
        arr.forEach(element => {
            element.classList.remove("txtcolor")
        });
    }
};

var menu = document.getElementsByClassName("menu-toggle");
var menulist = document.getElementsByClassName("menu-list");
var headbar = document.getElementsByClassName("head");

function togglefun(){
    menu[0].classList.toggle("closeMenu");
    menulist[0].classList.toggle("showMenu");
    headbar[0].classList.toggle("changeColor")
}