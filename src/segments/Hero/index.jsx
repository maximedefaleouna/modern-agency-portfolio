import "./Hero.css"
import { convertHexToRgba } from "../../util"
import { Link } from "react-scroll";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import heroImage from "../../assets/bb.png"//hero.png
import BoxAnimation from "../../assets/BoxAnimation"
import gsap from "gsap"
import { useEffect } from "react";
import cv from "../../assets/CV.pdf"

function Hero() {
    useEffect(()=>{
        gsap.timeline({delay:0.5})
        .fromTo("#hero .hero-subtitle",{x:-20, opacity:0},{x:0,opacity:1})
        .fromTo("#hero .hero-title" , {y:20 ,opacity:0},{y:0,opacity:1})
        .fromTo("#hero .hero-image" , {y:-20 ,opacity:0},{y:0,opacity:11})
        .fromTo("#hero .hero-description" , {y:20 ,opacity:0},{y:0,opacity:1})
        .fromTo("#hero .buttons-wrapper" , {y:20 ,opacity:0},{y:0,opacity:1})



    })
    return (
        <section id="hero">
            <BoxAnimation/>
            <div className="container">
                <div>
                    <h4 className="text-primary hero-subtitle"
                        style={{ background: convertHexToRgba("--primary", 0.2) }}>Innovation digitale et développement</h4>
                    <h1 className="hero-title">Construisez, Innovez et Transformez avec nous</h1>
                    <p className="hero-description"> Nous donnons vie à vos idées avec des solutions logicielles, web et mobiles sur mesure. De la conception au lancement, nous propulsons votre entreprise vers l'avenir.</p>
                    <div className="buttons-wrapper">
                        <a href={cv} target="_blank"  className="btn primary">Voir le CV<FaArrowTrendUp/></a>
                        <a href="https://maximedefa.netlify.app/" target="_blank"  className="btn ">See our Work <FaProjectDiagram/></a>

                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Hero;