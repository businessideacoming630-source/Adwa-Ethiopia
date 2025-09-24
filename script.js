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

// Load videos from links.json
fetch("links.json")
  .then(response => response.json())
  .then(data => {
    const videoSection = document.getElementById("videos");
    const shuffled = shuffle(data.videos);

    // Pick the first 3 videos after shuffle
    const sampleVideos = shuffled.slice(0, 3);

    sampleVideos.forEach(video => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${video.id}`;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      videoSection.appendChild(iframe);
    });
  })
  .catch(error => console.error("Error loading videos:", error));
