window.onscroll = function() {
    const nav = document.getElementById('navbar');
    if (window.pageYOffset > 50) { nav.classList.add('scrolled'); } 
    else { nav.classList.remove('scrolled'); }
    reveal();
};
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        
        // Jarak trigger diperkecil (dari 150 jadi 50) biar lebih cepat muncul
        var elementVisible = 50; 
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
// Biar langsung muncul pas halaman terbuka tanpa nunggu scroll
window.addEventListener("load", reveal); 
