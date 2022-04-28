window.onscroll = function() {scrollFunction()};

document.addEventListener('DOMContentLoaded', () => {
    window.scrollBy({
        left: -1000,
        behavior: 'instant'
    });
});

function scrollFunction() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementById('nav').style.backgroundColor = "rgba(255, 255, 255, .8)";
    } else {
        document.getElementById('nav').style.backgroundColor = "rgba(244, 244, 245, .8)";
    }
}