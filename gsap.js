gsap.to(".a", { x: 200, rotation: 360, duration: 3 });
gsap.to(".b", { duration: 2, borderRadius: "50%" });
gsap.to(".c", { duration: 3, backgroundColor: "black", x: 120, y: -120, textAlign: "center", fontFamily: "cursive", textContent: "You can even target text inside objects", height: "300", width: "300", fontSize: "50" })
gsap.from(".h1", { duration: 2, scale: "1.5", ease: "elastic", rotation: 45, textAlign: "center", repeat: "-1" });

gsap.to(".h2", { duration: 1.5, scale: "1.2", backgroundColor: "black", color: "grey", margin: "100", repeat: "-1", padding: 15, borderRadius: 15, marginTop: "75", marginBottom: "75", ease: "back", yoyo: true });

gsap.to(".h3", { duration: 5, x: 50, textAlign: "left", paddingRight: 50, repeat: "-1" });

gsap.from(".ginger", { duration: 1.5, fontSize: "100", x: 300, scale: "5", ease: "back" });
gsap.to(".ginger", { duration: 2.5, scaleX: "1.1", scaleY: "2", color: "red", paddingBottom: 20 })
gsap.from("body", { duration: 2.5, backgroundColor: "purple" });

gsap.to(".h4", { duration: 3, scale: 1.1, ease: "bounce", color: "black", padding: 20 });

gsap.to(".h1", { color: "black" });

gsap.fromTo(".fish", { duration: 2, x: 200, y: 200, opacity: 0 }, { duration: 3, x: 120, y: -550, opacity: 1 });

gsap.fromTo(".svg", { duration: 2, x: 2, y: 200, opacity: 0 }, { duration: 3, x: 5, y: -50, rotate: 45, repeat: "-1", backgroundColor: "purple", margin: "50", height: "100", width: "100", opacity: .9 });

gsap.to(
    ".new", { duration: 2.5, ease: "bounce.inOut", y: -1050, color: "black", textShadow: "2px 2px red", backgroundColor: "green", opacity: ".7", borderRadius: "15", fontFamily: "fantasy", marginRight: "100", marginLeft: "30" });