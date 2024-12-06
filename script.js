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
//-----------------------------------point 2-a start--------------------------------------

// Pin at bottom before scrolling to the section
ScrollTrigger.create({
    trigger: ".point2-a",
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
    end: "bottom -50%", 
    pin: true,
    markers: true,
    scrub: true,
});

// Animate the fish color and scaling when scrolling to text05
gsap.to(".fish", {
    filter: "grayscale(0%)",
    scale: 1.4,
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
const trawlElement = document.querySelector('.trawl');
const widthDisplay = document.getElementById('widthDisplay');

let currentTrawlWidth = 0;

// Function to get and update the width
function updateTrawlWidth() {
    if (trawlElement) {
        currentTrawlWidth = trawlElement.offsetWidth; // Get the element's width
        widthDisplay.textContent = currentTrawlWidth; // Display the numeric width
        console.log(`Width: ${currentTrawlWidth}px`); // Log the width to console
    }
}

// Run the function initially
updateTrawlWidth();

// Add event listener to update on window resize
window.addEventListener('resize', updateTrawlWidth);

// GSAP Animation
const targetX = window.innerWidth + currentTrawlWidth;

// Set initial position
gsap.set(".trawl", { x: -targetX });

// Create animation with ScrollTrigger 
//sync w/ scroll
// gsap.to(".trawl", {
//     x: targetX, 
//     scrollTrigger: {
//         trigger: ".text07", 
//         start: "top bottom", 
//         end: "bottom top",
//         scrub: true,
//         toggleActions: "play none none reverse",
//         markers: true, 
//     },
// });

//fix duration
gsap.to(".trawl", {
    x: targetX, 
    duration: 2,
    scrollTrigger: {
        trigger: ".text07", 
        start: "bottom top", 
        end: "bottom -50%", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});

//-----------------------------------point 2-a end--------------------------------------
//-----------------------------------point 2-b start--------------------------------------

// Pin at bottom before scrolling to the section
ScrollTrigger.create({
    trigger: ".point2-b",
    start: "top bottom", 
    endTrigger: ".text-box.text07", 
    end: "bottom -50%", 
    pin: true,
    markers: true,
    scrub: true,
});

// Pin the scene when scrolling to the section
ScrollTrigger.create({
    trigger: ".weight-container",
    start: "top top", 
    endTrigger: ".text-box.text08", 
    end: "bottom -200%", 
    pin: true,
    markers: true,
    scrub: true,
});

//fish drop
gsap.set(".porgy-weighted", { x: '-50%' });
gsap.to(".porgy-weighted", {
    y: '70vh', 
    ease: "power4.out",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".text08", 
        start: "top bottom", 
        end: "top top", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});

//fish move
    // Calculate target positions
    //var porgyWeightedTargetX = 0.5 * window.innerWidth - 0.5 * document.querySelector('.porgy-weighted').offsetWidth;
    var boxTargetX = 0.5 * window.innerWidth + 0.5 * document.querySelector('.box').offsetWidth;

    // Create a GSAP timeline with a shared ScrollTrigger
    var timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".text08", // Shared trigger
            start: "bottom top", // Start point
            end: "bottom -50%", // End point
            toggleActions: "play none none reverse", // Toggle actions
            markers: true, // Debugging markers
        },
    });

    // Add animations to the timeline
    timeline
        .to(".porgy-weighted", {
            x: 0,
            ease: "power2.out",
            duration: 1,
        })
        .to(".weight-bg", {
            x: '-100vw',
            ease: "power4.out",
            duration: 1,
        }, "<") // Start at the same time as the previous animation
        .to(".box", {
            x: -boxTargetX,
            ease: "power4.out",
            duration: 1,
        }, "<") // Start at the same time as the previous animation
        .to([".porgy-weighted", ".box"], {
            scale: 0.3, // Scale to 0.5
            ease: "power4.out",
            duration: 1,
        }, "+=0"); // Start 2 seconds after the previous animations

//-----------------------------------point 2-b end--------------------------------------
//-----------------------------------point 2-c start--------------------------------------

// Pin at bottom before scrolling to the section
ScrollTrigger.create({
    trigger: ".point2-c",
    start: "top bottom", 
    endTrigger: ".text-box.text08", 
    end: "bottom -50%", 
    pin: true,
    markers: true,
    scrub: true,
});

// unpin the scene
ScrollTrigger.create({
    trigger: ".trunk-container",
    start: "top top", 
    endTrigger: ".point2-d", 
    end: "bottom top", 
    pin: true,
    markers: true,
    scrub: true,
});

//-----------------------------------point 2-c end--------------------------------------
//-----------------------------------point 2-d start--------------------------------------

// Pin at bottom before scrolling to the section
ScrollTrigger.create({
    trigger: ".point2-d",
    start: "top bottom", 
    endTrigger: ".text-box.text09", 
    end: "center center", 
    pin: true,
    markers: true,
    scrub: true,
});

// Pin the scene when scrolling to the section
ScrollTrigger.create({
    trigger: ".sign-container",
    start: "bottom 10%", 
    endTrigger: ".text-box.text09", 
    end: "bottom -200%", 
    pin: true,
    markers: true,
    scrub: true,
});

//-----------------------------------point 2-d end--------------------------------------

//-----------------------------------point 3 start--------------------------------------
// Pin at bottom before scrolling to the section
ScrollTrigger.create({
    trigger: ".market-container",
    start: "top top", 
    endTrigger: ".text-box.text11", 
    end: "bottom top", 
    pin: true,
    markers: true,
    scrub: true,
});

gsap.to(".pricetag", {
    x: '40vw',
    y: '70vh', 
    rotation: 30,
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".text10", 
        start: "top bottom", 
        end: "top center", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});

gsap.to(".box-market", {
    x: '100vw',
    y: '-50vh', 
    rotation: -30,
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".text10", 
        start: "top bottom", 
        end: "top center", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});

gsap.to(".buyer1", {
    x: '20vw',
    y: '-40vh', 
    rotation: 30,
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".text11", 
        start: "top bottom", 
        end: "top center", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});

gsap.to(".buyer2", {
    y: '-40vh', 
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".text11", 
        start: "top bottom", 
        end: "top center", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});

gsap.to(".buyer3", {
    x: '-20vw',
    y: '-40vh', 
    rotation: -30,
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".text11", 
        start: "top bottom", 
        end: "top center", 
        toggleActions: "play none none reverse",
        markers: true, 
    },
});
//-----------------------------------point 3 end--------------------------------------
