document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    // Função para rolar a página para o topo
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        tabLinks[0].click();
    }


    // Adiciona um ouvinte de evento ao carregar a página
    window.addEventListener("load", scrollToTop);

    tabLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar o comportamento padrão de redirecionamento do link

            const tabId = this.getAttribute("data-tab");

            tabContents.forEach(content => {
                content.style.display = "none";
            });

            document.getElementById(tabId).style.display = "block";

            tabLinks.forEach(link => {
                link.classList.remove("active");
            });

            this.classList.add("active");
        });
    });

    tabLinks[0].click();
});