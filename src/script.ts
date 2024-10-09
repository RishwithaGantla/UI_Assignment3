document.addEventListener("DOMContentLoaded", () => {
    const loading = document.getElementById("loading-animation");
    const mainContent = document.getElementById("content");
  
    if (loading && mainContent) {
      setTimeout(() => {
        loading.style.display = "none";
        mainContent.classList.remove("hidden");
        mainContent.classList.add("visible");
      }, 2000);
    }
  });
  