gsap.registerPlugin(ScrollTrigger);

// gsap.to(".box", {
//     //x: 200,
// });

// gsap
//     .to(".map", {
//         scrollTrigger: {
//             trigger: ".map",
//             start: "top 33%",
//             end: "5000vh bottom",
//             scrub: 1,// not sure if we need the scrub
//             pin: true,
//             markers: true
//         },
//         //duration:3
//     })

// function intro() {
//     var tl = gsap.timeline();
//     //...add animations here...
//     tl.to(".map", {scale: 1.2, duration:1})
//     return tl;
//   }
  
//   function middle() {
//     var tl = gsap.timeline(); 
//     tl.to(".map", {scale: 3, x: 500, y: 300, duration:1})
//     return tl;
//   }
  
//   function conclusion() {
//     var tl = gsap.timeline();
//     //...add animations here...
//     return tl;
//   }
  
//   // stitch them together in a master timeline...
//   var master = gsap.timeline();
//   master
//     .add(intro())
//     .add(middle(), "+=1") //with a gap of 2 seconds
//     .add(conclusion(), "-=1"); //overlap by 1 second



gsap.timeline()
    .to(".map", {
        scrollTrigger: {
            trigger: ".map",
            start: "top 33%",
            end: "bottom top",
            scrub: 1,// not sure if we need the scrub
            pin: true,
            markers: true
        },
        scale: 1.2,
    })
