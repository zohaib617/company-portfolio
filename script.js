function setActive(link) {
    // Remove active class from all links
    document.querySelectorAll(".navbar a").forEach((item) => {
        item.classList.remove("active");
    });
    
    // Add active class to the clicked link
    link.classList.add("active");
    
    
}



// JavaScript function to change background

function changeBackground(dotNumber) {
  const wavyDiv = document.getElementById("wavyDiv");
  const svgBackground = document.querySelector(".wavy-background");

  if (dotNumber === 1) {
      wavyDiv.style.backgroundImage = "none"; // Show only the wavy SVG lines
      svgBackground.style.opacity = "1"; // Make SVG visible
  } else if (dotNumber === 2) {
      wavyDiv.style.backgroundImage = "url('bg2.jpg')";
      svgBackground.style.opacity = "0"; // Hide SVG
  } else if (dotNumber === 3) {
      wavyDiv.style.backgroundImage = "url('bg3.jpeg')";
      svgBackground.style.opacity = "0"; // Hide SVG
  }
}


