document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
      threshold: 0.5,
  };

  // Function to reset the animation state of the faders
  const resetFaders = () => {
      faders.forEach(fader => {
          fader.classList.remove("show");  // Remove the show class to reset the animation
      });
  };

  // Create a new Intersection Observer instance for observing the faders
  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
              return;
          } else {
              entry.target.classList.add("show");  // Add the show class when the element comes into view
              appearOnScroll.unobserve(entry.target);  // Stop observing the element after it becomes visible
          }
      });
  }, appearOptions);

  // Function to start observing the faders again
  const observeFaders = () => {
      faders.forEach(fader => {
          appearOnScroll.observe(fader);  // Start observing each fader element
      });
  };

  // Initial observation when the page loads
  observeFaders();

  // When navigating back to the "home" section, reset the animation
  window.addEventListener('hashchange', function () {
      if (window.location.hash === '#home') {
          resetFaders(); // Reset the faders to trigger the animation again
          appearOnScroll.disconnect(); // Disconnect the previous observer
          observeFaders(); // Re-observe the faders
      }
    });
});