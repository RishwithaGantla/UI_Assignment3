document.addEventListener("DOMContentLoaded", function () {
    var loading = document.getElementById("loading-animation");
    var mainContent = document.getElementById("content");
    if (loading && mainContent) {
        setTimeout(function () {
            loading.style.display = "none";
            mainContent.classList.remove("hidden");
            mainContent.classList.add("visible");
        }, 2000);
    }
});
