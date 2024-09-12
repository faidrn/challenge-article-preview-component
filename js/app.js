const toggleShareIcon = document.getElementById('toggle-share-icon');
const peakShare = document.getElementById("peak-share");
const popupShare = document.getElementById("popup-share");

toggleShareIcon.addEventListener("click", () => {
    peakShare.classList.toggle("hidden");
    popupShare.classList.toggle("hidden");
});