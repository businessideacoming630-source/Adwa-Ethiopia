// Load current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Load videos from links.json
fetch("links.json")
  .then(response => response.json())
  .then(data => {
    const videoSection = document.getElementById("videos");
    data.videos.forEach(video => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${video.id}`;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      videoSection.appendChild(iframe);
    });
  })
  .catch(error => console.error("Error loading videos:", error));
