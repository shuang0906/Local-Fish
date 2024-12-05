gsap.registerPlugin(ScrollTrigger);

//-----------------------------------point 1 start--------------------------------------
// Pin the map when scrolling to the section
ScrollTrigger.create({
    trigger: ".map-container",
    start: "top top", 
    endTrigger: ".text-box.text03", 
    end: "center center", 
    pin: true,
    markers: true,
    scrub: true,
});

// Animate the map scaling and opacity when scrolling to text01
gsap.to(".map", {
    scale: 1.2,
    opacity: 1,
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text01", 
        start: "top bottom", 
        end: "bottom center", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});


// Animate the montauk scaling and color when scrolling to text02
gsap.to(".montauk", {
    scale: 2,
    backgroundColor: "yellow",
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top bottom", 
        end: "bottom center", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});

// Animate the map scaling and position when scrolling to text03
gsap.to(".map", {
    scale: 4,
    x: -200,
    y: 300,
    duration: 1, 
    scrollTrigger: {
        trigger: ".text03", 
        start: "top bottom", 
        end: "bottom center", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});

//-----------------------------------point 1 end--------------------------------------
//-----------------------------------point 2 start--------------------------------------

// Pin the ocean at bottom before scrolling to the section
ScrollTrigger.create({
    trigger: ".point2",
    start: "top bottom", 
    endTrigger: ".text-box.text03", 
    end: "center center", 
    pin: true,
    markers: true,
    scrub: true,
});

// Pin the ocean when scrolling to the section
ScrollTrigger.create({
    trigger: ".ocean-container",
    start: "top top", 
    endTrigger: ".text-box.text07", 
    end: "center center", 
    pin: true,
    markers: true,
    scrub: true,
});

// Animate the fish color and scaling when scrolling to text05
gsap.to(".fish", {
    filter: "grayscale(0%)",
    scale: 1.2,
    opacity: 1,
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text05", 
        start: "top bottom", 
        end: "bottom center", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});

// Animate the trawl
// const targetX = window.innerWidth + 800;
// gsap.to(".trawl", {
//     x: targetX,
//     scrollTrigger: {
//       trigger: ".text07", 
//       start: "top bottom", 
//       end: "bottom center", 
//       scrub: true, // Syncs the animation with the scroll
//       toggleActions: "play none none reverse",
//       markers: true, 
//     },
//   });