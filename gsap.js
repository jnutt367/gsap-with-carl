gsap.to(".a", { x: 400, rotation: 360, duration: 3 });
gsap.to(".b", { duration: 2, borderRadius: "50%" });
gsap.to(".c", { duration: 3, backgroundColor: "black", x: 120, y: -120, textAlign: "center", fontFamily: "cursive", textContent: "You can even target text inside objects", height: "300", width: "300", fontSize: "50" })
gsap.from(".h1", { duration: 2, scale: "1.5", ease: "elastic", rotation: 45 });

gsap.from(".h2", { duration: 1.5, scale: "2", ease: "back" });

gsap.to(".h3", { duration: 5, x: 50, textAlign: "left", paddingRight: 50, });

gsap.from(".ginger", { duration: 1.5, fontSize: "100", x: 300, scale: "5", ease: "back" });
gsap.to(".ginger", { duration: 2.5, scaleX: "1.1", scaleY: "2", color: "red", paddingBottom: 20 })
gsap.from("body", { duration: 2.5, backgroundColor: "gold" });

gsap.to(".h4", { duration: 3, scale: 1.1, color: "black", padding: 20 });

gsap.to(".h1", { color: "black" });

gsap.fromTo(".fish", { duration: 2, x: 200, y: 200, opacity: 0 }, { duration: 3, x: 120, y: -600, opacity: 1 });

gsap.fromTo(".svg", { duration: 2, x: 2, y: 200, opacity: 0 }, { duration: 3, x: 5, y: -700, rotate: 45, opacity: .9 })