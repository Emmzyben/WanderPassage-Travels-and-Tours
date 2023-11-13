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

function rollFlags() {
    flagContainerInner.style.animation = `roll ${duplicatedFlags.length * 2}s linear infinite`; // Set the animation duration based on the number of duplicated flags
}

rollFlags();



