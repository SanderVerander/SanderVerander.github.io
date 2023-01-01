 var video = document.getElementById("myVideo");

  video.addEventListener("loadedmetadata", function() {
    if (video.error) {
      console.log("An error occurred while loading the video: " + video.error.code);
    }
  });	