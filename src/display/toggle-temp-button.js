import { getTempFormat, toggleTempFormat } from "../logic/temp-format";
function toggleDisplayTempFormat() {
    toggleTempFormat();
}

export function attachToggleEventListener() {
    const toggleButton = document.getElementById("unit-toggle");
    toggleButton.addEventListener("click", toggleDisplayTempFormat);
}