document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector(".carrossel .lista");
    const items = document.querySelectorAll(".carrossel .lista .item");
    let index = 0;
    
    function atualizarCarrossel() {
        items.forEach((item, i) => {
            item.style.transition = "transform 0.5s, filter 0.5s, opacity 0.5s";
            item.style.opacity = "0";
            item.style.pointerEvents = "none";

            if (i === index) {
                item.style.transform = "translate(0, 0)";
                item.style.filter = "blur(0)";
                item.style.zIndex = "10";
                item.style.opacity = "1";
                item.style.pointerEvents = "auto";
            } else if (i === (index + 1) % items.length) {
                item.style.transform = "translate(100%, -5%) scale(1.2)";
                item.style.filter = "blur(2rem)";
                item.style.zIndex = "11";
            } else if (i === (index - 1 + items.length) % items.length) {
                item.style.transform = "translate(50%, -10%) scale(0.7)";
                item.style.filter = "blur(0.8rem)";
                item.style.zIndex = "9";
                item.style.opacity = "1";
            }
        });
    }

    function avancarCarrossel() {
        index = (index - 1 + items.length) % items.length;
        atualizarCarrossel();
    }
    
    setInterval(avancarCarrossel, 3000);
    atualizarCarrossel();
});
