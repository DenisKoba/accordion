var accordionTab = document.querySelectorAll(".accordion-button");
var buttons = [accordionTab[0], accordionTab[1], accordionTab[2]];

buttons.forEach(function(item){
    item.addEventListener("click", function(){
        var text = this.nextElementSibling;
        var cross = this.firstChild;
        text.classList.toggle("toggle");
        cross.classList.toggle("cross-active");
        this.classList.toggle("active");
    });
});