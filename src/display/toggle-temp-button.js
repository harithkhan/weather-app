import { toggleTempFormat } from "../logic/temp-format";
import { handleSearchSubmit } from "./search-form";

function toggleDisplayTempFormat() {
    toggleTempFormat();
    const searchInput = document.getElementById("search");
    if (searchInput.dataset.searched === "true") {
        const locationContainer = document.querySelector(".location-container");
        searchInput.value = locationContainer.textContent;
        handleSearchSubmit(null);
    }
}

export function attachToggleEventListener() {
    const toggleButton = document.getElementById("unit-toggle");
    toggleButton.addEventListener("click", toggleDisplayTempFormat);
}
