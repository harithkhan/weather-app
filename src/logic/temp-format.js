let tempFormat = "fahrenheit";

export const getTempFormat = () => tempFormat;

export function toggleTempFormat() {
    if (tempFormat === "fahrenheit") {
        tempFormat = "celcius";
    } else if (tempFormat === "celcius") {
        tempFormat = "fahrenheit";
    }
}
