gsap.registerPlugin(ScrollTrigger);

gsap.ticker.fps(12);

//-----------------------------------cover 1 start--------------------------------------
gsap.to(".cover-flounder", {
    x: () => window.innerWidth + 800, // Move div to fully off-screen right
    duration: 10, // Animation duration (adjust as needed)
    ease: "linear", // Smooth constant speed
    repeat: -1, // Infinite loop
    onRepeat: function() {
        gsap.set(".cover-flounder", { x: -800 }); // Reset position to the left off-screen
    }
});

gsap.to(".cover-squid", {
    x: () => window.innerWidth + 400, // Move div to fully off-screen right
    duration: 10, // Animation duration (adjust as needed)
    ease: "linear", // Smooth constant speed
    repeat: -1, // Infinite loop
    delay: 2,
    onRepeat: function() {
        gsap.set(".cover-squid", { x: -400 }); // Reset position to the left off-screen
    }
});

gsap.to(".cover-porgy", {
    x: () => -window.innerWidth - 450, // Move div fully off-screen left
    duration: 10, // Animation duration (adjust as needed)
    ease: "linear", // Smooth constant speed
    repeat: -1, // Infinite loop
    delay: 2,
    onRepeat: function() {
        gsap.set(".cover-porgy", { x: window.innerWidth + 450 }); // Reset position to the right off-screen
    }
});

gsap.to(".cover-bunker", {
    x: () => -window.innerWidth - 400, // Move div fully off-screen left
    duration: 10, // Animation duration (adjust as needed)
    ease: "linear", // Smooth constant speed
    repeat: -1, // Infinite loop
    onRepeat: function() {
        gsap.set(".cover-bunker", { x: window.innerWidth + 400 }); // Reset position to the right off-screen
    }
});

//-----------------------------------cover 1 end--------------------------------------

//-----------------------------------point 1 start--------------------------------------
// Pin the map when scrolling to the section
ScrollTrigger.create({
    trigger: ".map-container",
    start: "top top", 
    endTrigger: ".text-box.text03", 
    end: "center center", 
    pin: true,
    pinType:'fixed',
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
        toggleActions: "play none none none",
    },
});



// Animate the montauk scaling and color when scrolling to text02
gsap.to(".montauk1", {
    scale: 1.2,
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
    scale: 1.2,
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

gsap.to(".label-montauk", {
    y: 10,
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

// Animation to move .cloud1 back to 0% and hide .map on trigger .text03
gsap.set(".boat", { autoAlpha: 0 });

gsap.to(".cloud1", {
    x: '100%',
    y: '-100%',
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top top", 
        end: "bottom -50%", 
        toggleActions: "play reverse play reverse",
            onLeave: () => {
                // Hide .map when the animation starts
                gsap.set(".map", { autoAlpha: 0 }); // Makes the map invisible
                gsap.set(".boat", { autoAlpha: 1 }); // Makes the map invisible
            },
            onLeaveBack: () => {
                // Reappear .map only after the animation fully reverses
                gsap.set(".map", { autoAlpha: 1 }); // Makes the map visible
                gsap.set(".boat", { autoAlpha: 0 }); // Makes the map invisible
            }
    }
});

gsap.to(".cloud2", {
    x: '-100%',
    y: '-100%',
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top top", 
        end: "bottom -50%", 
        toggleActions: "play reverse play reverse",
    }
});

gsap.to(".cloud3", {
    x: '100%',
    y: '100%',
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top top", 
        end: "bottom -50%", 
        toggleActions: "play reverse play reverse",
    }
});

gsap.to(".cloud4", {
    x: '-100%',
    y: '100%',
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top top", 
        end: "bottom -50%", 
        toggleActions: "play reverse play reverse",
    }
});


gsap.to(".map", {
    scale: 3,
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text02", 
        start: "top top", 
        end: "bottom top", 
        toggleActions: "play none none reverse",
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
gsap.to(".main-fish", {
    filter: "grayscale(0%)",
    scale: 1.5,
    opacity: 1,
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text04", 
        start: "bottom top", 
        end: "top -50%", 
        toggleActions: "play none none reverse",
    },
});

gsap.to(".fish-label", {
    opacity: 1,
    y: -10,
    duration: 0.5, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text04", 
        start: "bottom top", 
        end: "top -50%",
        toggleActions: "play none none reverse",
    },
});

gsap.set(".trawl", { y: '-100vh' }); 

gsap.set(".trawl", {  opacity: 0 }); 

gsap.to(".trawl", 
    {
    y: '0',
    opacity: 1, 
    duration: 1,
    scrollTrigger: {
        trigger: ".text07", 
        start: "top 200%", 
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

ScrollTrigger.create({
    trigger: ".bg-yellow1",
    start: "top top", 
    endTrigger: ".team", 
    end: "bottom top", 
    pin: true,
    //markers: true,
    scrub: true,
});

//fish drop
//gsap.set(".porgy-weighted", { x: '-50%' });
gsap.to(".porgy-weighted", {
    yPercent: 100,
    y: -50, //Kai
    ease: "power4.out",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".text08", 
        start: "top 80%", 
        end: "top top", 
        toggleActions: "play none none reverse",
        //markers: true, 
    },
});

//fish move
    // Calculate target positions
    var boxTargetX = 0.5 * window.innerWidth + 0.5 * document.querySelector('.box').offsetWidth;

    // Create a GSAP timeline with a shared ScrollTrigger
    var timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".text08", 
            start: "bottom top",
            end: "bottom -50%", 
            toggleActions: "play none none reverse", 
            //markers: true
        },
    });

    // Add animations to the timeline
    timeline
        .to(".porgy-weighted", {
            xPercent: 30,
            y: 5,
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
        }, "+=0");

//-----------------------------------point 2-b end--------------------------------------
//-----------------------------------point 2-c start--------------------------------------

// Pin at bottom before scrolling to the section
ScrollTrigger.create({
    trigger: ".point2-c",
    start: "top bottom", 
    endTrigger: ".text-box.text08", 
    end: "bottom -50%", 
    pin: true,
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

gsap.fromTo(".buyer1", 
    {y: "100vh" },{
    x: '20vw',
    y: '-10vh', 
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

gsap.fromTo(".buyer2", 
    {y: "100vh" },{
    y: '0vh', 
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

gsap.fromTo(".buyer3", 
    {y: "100vh" },{
    x: '-20vw',
    y: '-10vh', 
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



