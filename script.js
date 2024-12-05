gsap.registerPlugin(ScrollTrigger);

// Pin the map when scrolling to the section
ScrollTrigger.create({
    trigger: ".map-container",
    start: "top top", // Start pinning when .map reaches the top of the viewport
    endTrigger: ".text-box.text03", // Stop pinning after .text03
    end: "bottom top", // Unpin when .text03 is out of the viewport
    pin: true,
    markers: true,
    scrub: true,
});

// Animate the map scaling and opacity when scrolling to text01
gsap.to(".map", {
    scale: 1.2,
    opacity: 1,
    duration: 1, // The animation duration
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text01", // Start animation when scrolling to .text01
        start: "top bottom", // Animation starts when .text01 reaches the center of the viewport
        end: "bottom center", // Optional: used for markers but not needed now
        toggleActions: "play none none reverse",
        markers: true, // Debug markers for visualization
    },
});


// Animate the map scaling and opacity when scrolling to text01
gsap.to(".montauk", {
    scale: 2,
    backgroundColor: "yellow",
    duration: 1, // The animation duration
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", // Start animation when scrolling to .text01
        start: "top bottom", // Animation starts when .text01 reaches the center of the viewport
        end: "bottom center", // Optional: used for markers but not needed now
        toggleActions: "play none none reverse",
        markers: true, // Debug markers for visualization
    },
});
