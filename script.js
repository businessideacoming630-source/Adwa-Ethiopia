// Load current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Function to shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to display 3 random videos with fade effect
function displayVideos(videos) {
  const videoSection = document.getElementById("videos");

  // Fade out
  videoSection.classList.remove("fade-in");
  videoSection.classList.add("fade-out");

  setTimeout(() => {
    // Clear old videos
    videoSection.innerHTML = "";

    // Pick new 3 random videos
    const shuffled = shuffle([...videos]);
    const sampleVideos = shuffled.slice(0, 3);

    sampleVideos.forEach(video => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${video.id}`;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      videoSection.appendChild(iframe);
    });

    // Fade in
    videoSection.classList.remove("fade-out");
    videoSection.classList.add("fade-in");
  }, 2000); // wait for fade-out before swapping
}

// Fetch videos once and start cycle
fetch("links.json")
  .then(response => response.json())
  .then(data => {
    // Initial load
    displayVideos(data.videos);

    // Refresh every 60s
    setInterval(() => {
      displayVideos(data.videos);
    }, 60000);
  })
  .catch(error => console.error("Error loading videos:", error));
