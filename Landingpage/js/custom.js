// Ativa ou desativa a class header-active baseado no scroll
window.onscroll = function(ev) {
    var B = document.body; //IE 'quirks'
    var D = document.documentElement; //IE with doctype
    D = (D.clientHeight)? D: B;

    if (D.scrollTop == 0) {
        $(".header").removeClass('header-active');
    } else {
        $(".header").addClass('header-active');
    }        
};