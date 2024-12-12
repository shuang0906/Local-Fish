gsap.registerPlugin(ScrollTrigger);

gsap.ticker.fps(12);

//-----------------------------------point 1 start--------------------------------------
// Pin the map when scrolling to the section
ScrollTrigger.create({
    trigger: ".map-container",
    start: "top top", 
    endTrigger: ".text-box.text03", 
    end: "center center", 
    pin: true,
    //markers: true,
    scrub: true,
});

// Animate the map scaling and opacity when scrolling to text01
gsap.to(".map", {
    scale: 1.2,
    opacity: 1,
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".map", 
        start: "center bottom", 
        end: "bottom center", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});


// Animate the montauk scaling and color when scrolling to text02
gsap.to(".montauk1", {
    scale: 1.5,
    // backgroundColor: "yellow",
    duration: 0.5, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top bottom", 
        end: "bottom center", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});

gsap.to(".montauk2", {
    scale: 1.5,
    opacity: 1,
    duration: 0.5, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top bottom", 
        end: "bottom center", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});

// Make .cloud1 and .cloud2 visible when .text02 is in view
gsap.fromTo(
    [".cloud1", ".cloud2"], // Target both elements
    { 
      opacity: 0, // Initial state: hidden
      visibility: "hidden",
    },
    { 
      opacity: 1, // Final state: fully visible
      visibility: "visible",
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text02", 
        start: "top top", 
        end: "bottom top", 
        toggleActions: "play none none none", // Play when entering, reverse on leave
        //markers: true, // For debugging
      },
    }
  );
  

// Animation to move .cloud1 100% on trigger .text02
gsap.to(".cloud1", { 
    x: '100%',
    duration: 0.5, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top top", 
        end: "bottom top", 
        toggleActions: "play none none reverse",
        //markers: true,
    },
});

// Animation to move .cloud1 back to 0% and hide .map on trigger .text03
gsap.set(".boat", { autoAlpha: 0 });

gsap.fromTo(".cloud1", 
    { x: '100%' }, 
    { 
        x: '0%',
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".text03", 
            start: "top bottom", 
            end: "bottom top", 
            toggleActions: "play none none reverse",
            //markers: true,
            onEnter: () => {
                // Hide .map when the animation starts
                gsap.set(".map", { autoAlpha: 0 }); // Makes the map invisible
                gsap.set(".boat", { autoAlpha: 1 }); // Makes the map invisible
            }
        },
        onReverseComplete: () => {
            // Reappear .map only after the animation fully reverses
            gsap.set(".map", { autoAlpha: 1 }); // Makes the map visible
            gsap.set(".boat", { autoAlpha: 0 }); // Makes the map invisible
        }
    }
);

// Animation to move .cloud1 100% on trigger .text02
gsap.to(".cloud2", { 
    x: '-100%', // Move to 100% on the x-axis
    duration: 0.5, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top top", 
        end: "bottom top", 
        toggleActions: "play none none reverse", // Play on enter, reverse on leave back
        //markers: true,
    },
});

// Animation to move .cloud1 back to 0% on trigger .text03
gsap.fromTo(".cloud2", 
    { x: '-100%' }, // Starting position (from where the first animation ended)
    { 
        x: '0%', // Move back to the starting position
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".text03", 
            start: "top bottom", 
            end: "bottom top", 
            toggleActions: "play none none reverse", // Play on enter, reverse on leave back
            //markers: true,
        },
    }
);

gsap.to(".map", {
    scale: 3,
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top top", 
        end: "bottom top", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});


// Fade out .bg-ocean at trigger .map-container
gsap.to(".bg-ocean", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02",
        start: "top center", 
        end: "bottom top",
        toggleActions: "play none none reverse", // Play on enter, reverse on scroll back
        //markers: true,
    },
});

gsap.to(".bg-default2", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".map-container",
        start: "bottom center", 
        end: "bottom top",
        toggleActions: "play none none reverse", // Play on enter, reverse on scroll back
        //markers: true,
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
    //markers: true,
    scrub: true,
});

// Pin the ocean when scrolling to the section
ScrollTrigger.create({
    trigger: ".ocean-container",
    start: "top top", 
    endTrigger: ".text-box.text07", 
    end: "bottom -50%", 
    pin: true,
    //markers: true,
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
        //markers: true, 
    },
});

gsap.set(".trawl", { y: '-100vh' }); 

gsap.set(".trawl", {  opacity: 0 }); 

gsap.to(".trawl", 
    {
    opacity: 1, 
    duration: 0.1,
    scrollTrigger: {
        trigger: ".text07", 
        start: "top bottom", 
        end: "bottom -50%", 
        toggleActions: "play none none none",
        //markers: true, 
    },
});

gsap.to(".trawl", 
    {
    y: '0',
    duration: 1,
    scrollTrigger: {
        trigger: ".text07", 
        start: "top bottom", 
        end: "bottom -50%", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});

gsap.fromTo(".trawl", 
    { y: '0' },
    {
    y: '-100vh',
    duration: 1,
    scrollTrigger: {
        trigger: ".text07", 
        start: "bottom top", 
        end: "bottom -50%", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});

gsap.to(".fish-group", {
    y: '-100vh',
    duration: 1,
    scrollTrigger: {
        trigger: ".text07", 
        start: "bottom top", 
        end: "bottom -50%", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});


// gsap.fromTo(".cloud1", 
//     { x: '100%' }, 
//     { 
//         x: '0%',
//         duration: 0.5, 
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".text03", 
//             start: "top bottom", 
//             end: "bottom top", 
//             toggleActions: "play none none reverse",
//             //markers: true,
//             onEnter: () => {
//                 // Hide .map when the animation starts
//                 gsap.set(".map", { autoAlpha: 0 }); // Makes the map invisible
//                 gsap.set(".boat", { autoAlpha: 1 }); // Makes the map invisible
//             }
//         },
//         onReverseComplete: () => {
//             // Reappear .map only after the animation fully reverses
//             gsap.set(".map", { autoAlpha: 1 }); // Makes the map visible
//             gsap.set(".boat", { autoAlpha: 0 }); // Makes the map invisible
//         }
//     }
// );

//-----------------------------------point 2-a end--------------------------------------
//-----------------------------------point 2-b start--------------------------------------

// Pin at bottom before scrolling to the section
ScrollTrigger.create({
    trigger: ".point2-b",
    start: "top bottom", 
    endTrigger: ".text-box.text07", 
    end: "bottom -50%", 
    pin: true,
    //markers: true,
    scrub: true,
});

// Pin the scene when scrolling to the section
ScrollTrigger.create({
    trigger: ".weight-container",
    start: "top top", 
    endTrigger: ".text-box.text08", 
    end: "bottom -200%", 
    pin: true,
    //markers: true,
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
        //markers: true, 
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
            //markers: true, // Debugging markers
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
    //markers: true,
    scrub: true,
});

// unpin the scene
ScrollTrigger.create({
    trigger: ".trunk-container",
    start: "top top", 
    endTrigger: ".head3", 
    end: "top bottom", 
    pin: true,
    //markers: true,
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
    //markers: true,
    scrub: true,
});

// Pin the scene when scrolling to the section
// ScrollTrigger.create({
//     trigger: ".sign-container",
//     start: "top 80%", 
//     endTrigger: ".text-box.text09", 
//     end: "bottom -200%", 
//     pin: true,
//     //markers: true,
//     scrub: true,
// });

//-----------------------------------point 2-d end--------------------------------------

//-----------------------------------point 3 start--------------------------------------
// Pin at bottom before scrolling to the section
ScrollTrigger.create({
    trigger: ".market-container",
    start: "top top", 
    endTrigger: ".text-box.text11", 
    end: "bottom top", 
    pin: true,
    //markers: true,
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
        //markers: true, 
    },
});

gsap.to(".box-market", {
    x: '100vw',
    y: '-50vh', 
    rotation: -30,
    ease: "power4.out",
    duration: 2,
    scrollTrigger: {
        trigger: ".text10", 
        start: "top bottom", 
        end: "top center", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});

gsap.to(".buyer1", {
    x: '20vw',
    y: '-60vh', 
    rotation: 30,
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".text11", 
        start: "top bottom", 
        end: "top center", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});

gsap.to(".buyer2", {
    y: '-60vh', 
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".text11", 
        start: "top bottom", 
        end: "top center", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});

gsap.to(".buyer3", {
    x: '-20vw',
    y: '-60vh', 
    rotation: -30,
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".text11", 
        start: "top bottom", 
        end: "top center", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});
//-----------------------------------point 3 end--------------------------------------
