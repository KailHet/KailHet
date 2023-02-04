const preloader = document.querySelector(".preloader");
const button = document.querySelector(".preloader-content_button");
let animInterval;
let loadInterval;

const videoId = "FxVmC9nxnRY"
YT.ready(_=>{
    window.player = new YT.Player("player", {
        videoId: videoId,
        playerVars: { "autoplay": 0, "controls": 0, "loop": 1, "playlist": videoId},
        events: {
            "onReady": e => {
                e.target.setVolume(100);
                clearInterval(loadInterval)
                button.classList.add("ready");
                button.addEventListener("click", () => {
                    animInterval = setInterval(preloaderAnim, 10);
                    button.classList.add("clicked");
                });
            }
        }
    });
})

let i = 0;

let j = 1;
function preloaderAnim() {
    j -= .01;
    preloader.style.opacity = j;

    if (j <= 0) {
        clearInterval(animInterval);
        setTimeout(() => {preloader.removeAttribute("style");}, 50);
        setTimeout(() => {preloader.style.display = "none"; preloader.remove()}, 60);
    };

    if (j <= 1) {
        player.unMute();
        player.playVideo();
    };
};
