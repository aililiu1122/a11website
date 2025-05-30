const video = document.getElementById("background-video");
const enterPage = document.getElementById("enter-page");
const mainPage = document.getElementById("main-page");
const enterBtn = document.getElementById("enter-btn");

video.muted = false;

video.addEventListener('error', function(e) {
  console.error('Error loading video:', e);
});

async function attemptPlay() {
  try {
    await video.play();
    console.log('Playing with sound');
  } catch (err) {
    console.log('Autoplay with sound failed, falling back to muted');
    video.muted = true;
    try {
      await video.play();
      console.log('Playing muted');
    } catch (err) {
      console.error('Both autoplay attempts failed:', err);
    }
  }
}

video.addEventListener('canplay', function() {
  console.log('Video can play');
  attemptPlay();
});

video.load();

enterPage.addEventListener("click", () => {
  enterPage.style.display = "none";
  mainPage.style.display = "flex";
});

enterBtn.addEventListener("click", () => {
  enterPage.style.display = "none";
  mainPage.style.display = "flex";
});