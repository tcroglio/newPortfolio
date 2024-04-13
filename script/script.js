document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function(event) {

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