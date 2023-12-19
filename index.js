const countryFlags = ['images/usa.jpg', 'images/uk.jpg', 'images/uae.png', 'images/australia.png', 'images/canada.png', 'images/germany.png','images/italy.png']; // Add the paths to your flag images

const flagContainerInner = document.querySelector('.flag-container-inner');

function createFlagElement(flagPath) {
  const flagElement = document.createElement('img');
  flagElement.src = flagPath;
  flagElement.classList.add('flag');
  return flagElement;
}

// Duplicate the images to ensure seamless rolling effect
const duplicatedFlags = [...countryFlags, ...countryFlags];

duplicatedFlags.forEach(flagPath => {
  const flagElement = createFlagElement(flagPath);
  flagContainerInner.appendChild(flagElement);
});

let currentPosition = 0;
const increment = 0.1; // Adjust the increment value for the desired speed

function rollFlags() {
  currentPosition -= increment;
  flagContainerInner.style.transform = `translateX(${currentPosition}%)`;

  if (currentPosition <= -100) {
    currentPosition = 0;
  }

  requestAnimationFrame(rollFlags);
}

// Start the animation loop
rollFlags();
  



