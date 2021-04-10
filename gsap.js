gsap.to(".a", {
    x: 400,
    rotation: 360,
    duration: 3
});
gsap.from(".h1", { duration: 2, scale: "1.5", ease: "elastic", rotation: 45 });

gsap.from(".h2", { duration: 1.5, scale: "2", ease: "back" });

gsap.to(".h3", { duration: 5, x: 50, textAlign: "left", paddingRight: 50, });