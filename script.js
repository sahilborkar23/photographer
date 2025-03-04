var tl = gsap.timeline()

tl.from(["#nav h3", "#nav-2 h2","i"], {
    y: -50,
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
    stagger: 0.1
})

tl.from("#main h1",{
    x:-300,
    opacity:0,
    duration:0.5,
    stagger:0.2
})

tl.from("img",{
    x:100,
    rotate:60,
    opacity:0,
    duration:1,
    stagger:0.4, 
    ease: "back.out(1.7)"
})


