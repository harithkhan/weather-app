export function displayLoadingGif() {
    const loadingContainer = document.getElementById("loading-container");
    loadingContainer.classList.remove("hidden"); 
}

export function hideLoadingGif() {
    const loadingContainer = document.getElementById("loading-container");
    loadingContainer.classList.add("hidden");
}